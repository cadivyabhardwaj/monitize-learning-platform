
import React, { useState, useRef, useEffect } from 'react';
import { 
  Upload, Type, RefreshCcw, Eye, AlertCircle, ShieldAlert, X, 
  Camera, ChevronRight, Info, FileText, ChevronDown, ChevronUp, 
  Copy, ShieldCheck, Zap, BookOpen, GraduationCap, Lightbulb 
} from 'lucide-react';
import { gemini } from './geminiService';
import { OCRInterpretation, LearningMode, View } from './types';

const LabOCRInterpreter = ({ onNavigate }: { onNavigate: (view: View) => void }) => {
  const [sourceImage, setSourceImage] = useState<string | null>(null);
  const [result, setResult] = useState<OCRInterpretation | null>(null);
  const [loading, setLoading] = useState(false);
  const [mimeType, setMimeType] = useState('image/png');
  const [mode, setMode] = useState<'upload' | 'camera'>('upload');
  const [learningMode, setLearningMode] = useState<LearningMode>('standard');
  const [showRawText, setShowRawText] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  
  // Safety state
  const [safetyWarning, setSafetyWarning] = useState<string[]>([]);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Client-side detection of sensitive patterns
  const detectSensitiveData = (text: string) => {
    const patterns = {
      aadhaar: /\d{4}\s\d{4}\s\d{4}|\d{12}/,
      pan: /[A-Z]{5}[0-9]{4}[A-Z]{1}/i,
      account: /\d{9,18}/
    };
    const warnings = [];
    if (patterns.aadhaar.test(text)) warnings.push("Potential Aadhaar number detected.");
    if (patterns.pan.test(text)) warnings.push("Potential PAN identifier detected.");
    if (patterns.account.test(text)) warnings.push("Potential Bank Account pattern detected.");
    return warnings;
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("Please upload a file smaller than 5MB.");
        return;
      }
      setMimeType(file.type);
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataUrl = reader.result as string;
        setSourceImage(dataUrl);
        setResult(null);
        setSafetyWarning([]);
      };
      reader.readAsDataURL(file);
    }
  };

  const startCamera = async () => {
    setCameraError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' }, 
        audio: false 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsCameraActive(true);
      }
    } catch (err) {
      console.error("Camera Access Error:", err);
      setCameraError("Unable to access camera. Please ensure permissions are granted.");
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsCameraActive(false);
  };

  const captureFrame = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/png');
        setSourceImage(dataUrl);
        setMimeType('image/png');
        stopCamera();
      }
    }
  };

  const handleOCR = async () => {
    if (!sourceImage) return;
    setLoading(true);
    try {
      const base64Data = sourceImage.split(',')[1];
      const interpretation = await gemini.interpretDocumentOCR(base64Data, mimeType, learningMode);
      if (interpretation) {
        setResult(interpretation);
        // Trigger safety check on extracted text
        const warnings = detectSensitiveData(interpretation.extracted_text);
        setSafetyWarning(warnings);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const clear = () => {
    setSourceImage(null);
    setResult(null);
    setSafetyWarning([]);
    stopCamera();
    setShowRawText(false);
  };

  const handleCopyNotes = async () => {
    if (!result) return;
    const textToCopy = `Document Type: ${result.document_type_guess}\n\nExplanation: ${result.simplified_explanation}\n\nLearning Notes: ${result.learning_notes}`;
    await navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  useEffect(() => {
    return () => stopCamera();
  }, []);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* MODULE BRIEFING HEADER */}
      <div className="bg-white p-8 rounded-[40px] border border-primary/5 shadow-sm flex flex-col md:flex-row items-center gap-8">
        <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center shrink-0 text-purple-500">
          <Type size={24} />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl font-poppins font-bold text-primary mb-2 flex items-center justify-center md:justify-start gap-2">
            <span>Module Briefing: OCR Interpreter</span>
            <div className="px-2 py-0.5 bg-purple-100 rounded text-[8px] font-black text-purple-500 uppercase tracking-tighter">Capture Support</div>
          </h3>
          <p className="text-sm text-primary/60 font-medium leading-relaxed max-w-3xl">
            Experimental text-to-context conversion for general administrative records. This module extracts data and provides a 'Simplified Explanation' to help bridge the gap between technical data and human logic.
          </p>
        </div>
        <div className="w-px h-12 bg-primary/5 hidden md:block" />
        <div className="flex items-center gap-3">
          <Lightbulb size={24} className="text-purple-500/30" />
        </div>
      </div>

      {/* Disclaimer Banner */}
      <div className="bg-primary p-4 rounded-2xl flex items-center justify-center gap-3 text-white/80">
        <ShieldAlert size={18} className="text-accent" />
        <p className="text-[10px] font-bold uppercase tracking-widest">
          Non-Advisory Sandbox: This tool converts pixels to educational context. It does not file taxes or verify legal status.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        {/* Interaction Pane */}
        <div className="bg-white p-8 lg:p-12 rounded-[48px] shadow-sm border border-primary/5 flex flex-col">
          <div className="flex items-center justify-between mb-8">
             <h4 className="text-lg font-bold text-primary flex items-center gap-2">
                <Type size={18} className="text-purple-500" />
                <span>Interpreter Input</span>
             </h4>
             <div className="flex items-center gap-2">
               <button 
                onClick={() => { setMode('upload'); stopCamera(); }}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${mode === 'upload' ? 'bg-primary text-white' : 'text-primary/40 hover:bg-primary/5'}`}
               >
                 Upload
               </button>
               <button 
                onClick={() => { setMode('camera'); setSourceImage(null); }}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${mode === 'camera' ? 'bg-primary text-white' : 'text-primary/40 hover:bg-primary/5'}`}
               >
                 Camera
               </button>
             </div>
          </div>

          <div className="space-y-8 flex-1">
            <p className="text-xs text-primary/50 leading-relaxed font-medium">
              Extract raw text and structured administrative context from captures using vision logic calibrated for the Indian regulatory landscape.
            </p>

            <button 
              onClick={() => onNavigate('tax-fundamentals')}
              className="w-fit flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-purple-600 hover:bg-purple-100 transition-colors"
            >
              <GraduationCap size={14} />
              <span>Learn Technical Frameworks First</span>
              <ChevronRight size={12} />
            </button>

            {/* Mode Selectors */}
            <div className="space-y-3 pt-4">
              <p className="text-[10px] font-black text-primary/30 uppercase tracking-widest">Select Learning Lens</p>
              <div className="flex gap-2">
                {[
                  { id: 'beginner', label: 'Beginner', icon: <BookOpen size={14} />, color: 'bg-emerald-500' },
                  { id: 'standard', label: 'Standard', icon: <Type size={14} />, color: 'bg-blue-500' },
                  { id: 'deepdive', label: 'Deep Dive', icon: <Zap size={14} />, color: 'bg-orange-500' }
                ].map(l => (
                  <button
                    key={l.id}
                    onClick={() => setLearningMode(l.id as LearningMode)}
                    className={`flex-1 py-3 px-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 border ${learningMode === l.id ? 'bg-primary border-primary text-white shadow-lg' : 'bg-white border-primary/5 text-primary/40 hover:bg-primary/5'}`}
                  >
                    {l.icon}
                    <span>{l.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {mode === 'upload' ? (
              <div 
                onClick={() => fileInputRef.current?.click()}
                className={`aspect-[3/4] bg-[#F5F7FA] border-2 border-dashed rounded-3xl flex flex-col items-center justify-center cursor-pointer hover:bg-primary/5 transition-all group overflow-hidden relative ${sourceImage ? 'border-purple-500/20' : 'border-primary/10'}`}
                role="button"
                tabIndex={0}
                aria-label="Upload document image"
              >
                {sourceImage ? (
                  <img src={sourceImage} alt="Input document" className="w-full h-full object-contain p-4" />
                ) : (
                  <div className="text-center space-y-4 px-8">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-primary/5 flex items-center justify-center text-primary/20 mx-auto group-hover:text-purple-500 group-hover:scale-110 transition-all">
                      <Upload size={32} />
                    </div>
                    <p className="text-primary/40 font-bold uppercase tracking-widest text-[10px]">Upload document for interpretation</p>
                    <p className="text-[9px] text-primary/20 italic">Supported formats: JPG, PNG (Max 5MB)</p>
                  </div>
                )}
                <input type="file" ref={fileInputRef} onChange={handleFileUpload} className="hidden" accept="image/*" />
              </div>
            ) : (
              <div className="aspect-[3/4] bg-[#F5F7FA] border-2 border-dashed border-primary/10 rounded-3xl flex flex-col items-center justify-center overflow-hidden relative group">
                {sourceImage ? (
                  <div className="relative w-full h-full p-4">
                    <img src={sourceImage} alt="Captured document" className="w-full h-full object-contain" />
                    <button 
                      onClick={() => setSourceImage(null)}
                      className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full shadow-lg hover:bg-red-600 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ) : isCameraActive ? (
                  <div className="relative w-full h-full bg-black">
                    <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" />
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4 px-6">
                      <button 
                        onClick={captureFrame}
                        className="bg-purple-500 text-white px-8 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-xl hover:bg-purple-600 transition-all"
                      >
                        <Camera size={18} />
                        <span>Capture Frame</span>
                      </button>
                      <button 
                        onClick={stopCamera}
                        className="bg-white/20 backdrop-blur-md text-white p-3 rounded-2xl hover:bg-white/30 transition-all"
                      >
                        <X size={18} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center space-y-6 px-12">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-primary/5 flex items-center justify-center text-primary/20 mx-auto group-hover:text-purple-500 group-hover:scale-110 transition-all">
                      <Camera size={32} />
                    </div>
                    <div>
                      <p className="text-primary/40 font-bold uppercase tracking-widest text-[10px] mb-6">Camera Access Required</p>
                      <button 
                        onClick={startCamera}
                        className="bg-primary text-white px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-primary/90 transition-all flex items-center justify-center gap-2 mx-auto"
                      >
                        <span>Enable Camera</span>
                        <ChevronRight size={14} />
                      </button>
                    </div>
                    {cameraError && <p className="text-[9px] text-red-400 font-medium italic">{cameraError}</p>}
                  </div>
                )}
                <canvas ref={canvasRef} className="hidden" />
              </div>
            )}

            <div className="space-y-4">
              <button 
                onClick={handleOCR}
                disabled={loading || !sourceImage}
                className="w-full bg-[#0B1C2D] hover:bg-primary/90 text-white py-5 rounded-2xl font-bold text-sm shadow-xl shadow-primary/10 transition-all flex items-center justify-center gap-3 disabled:opacity-30"
              >
                {loading ? <RefreshCcw className="animate-spin" size={18} /> : <Zap size={18} className="text-purple-400" />}
                <span>Interpret with AI</span>
              </button>
              
              {safetyWarning.length > 0 && (
                <div className="p-5 bg-orange-50 border border-orange-100 rounded-2xl space-y-2 animate-in slide-in-from-top-2">
                   <div className="flex items-center gap-2 text-orange-800 font-bold text-[10px] uppercase">
                     <ShieldAlert size={14} />
                     <span>Sensitive Identifiers Found</span>
                   </div>
                   <ul className="space-y-1">
                      {safetyWarning.map((w, i) => (
                        <li key={i} className="text-[9px] text-orange-700 italic">• {w}</li>
                      ))}
                   </ul>
                   <p className="text-[8px] text-orange-600 font-medium">Monitize does not store these. Please use blurred captures for privacy.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Output Pane */}
        <div className="bg-white p-8 lg:p-12 rounded-[48px] border border-primary/5 shadow-sm flex flex-col relative overflow-hidden">
          <div className="flex items-center justify-between mb-8">
             <h4 className="text-lg font-bold text-primary flex items-center gap-2">
                <FileText size={18} className="text-purple-500" />
                <span>Interpreter Results</span>
             </h4>
             {result && (
               <div className="flex items-center gap-2">
                 <button 
                  onClick={handleCopyNotes} 
                  className={`text-[9px] font-black uppercase tracking-widest transition-colors flex items-center gap-1 ${isCopied ? 'text-accent' : 'text-primary/30 hover:text-primary'}`}
                 >
                   <Copy size={12} /> {isCopied ? 'Copied' : 'Copy Notes'}
                 </button>
                 <button onClick={clear} className="text-[9px] font-black text-red-400 uppercase tracking-widest hover:text-red-600 transition-colors flex items-center gap-1">
                   <X size={12} /> Reset Lab
                 </button>
               </div>
             )}
          </div>

          <div className="flex-1 bg-[#F8FAFC] border border-primary/5 rounded-[32px] p-8 relative overflow-y-auto max-h-[700px] space-y-8">
            {loading ? (
              <div className="space-y-8 animate-pulse">
                <div className="h-8 bg-primary/5 rounded-xl w-1/3"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-primary/5 rounded w-full"></div>
                  <div className="h-4 bg-primary/5 rounded w-5/6"></div>
                  <div className="h-4 bg-primary/5 rounded w-4/6"></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 bg-primary/5 rounded-3xl"></div>
                  <div className="h-24 bg-primary/5 rounded-3xl"></div>
                </div>
              </div>
            ) : result ? (
              <div className="space-y-10 animate-in fade-in duration-500">
                {/* Header Information */}
                <div className="flex flex-wrap gap-4 items-center">
                  <div className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-[10px] font-black uppercase tracking-widest">
                    {result.document_type_guess || 'Document (Unverified)'}
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/5 rounded-full">
                    <Info size={12} className="text-primary/30" />
                    <span className="text-[9px] font-bold text-primary/40 italic">{result.confidence_note}</span>
                  </div>
                </div>

                {/* Collapsible Raw Text */}
                <div className="border border-primary/5 rounded-2xl overflow-hidden bg-white">
                  <button 
                    onClick={() => setShowRawText(!showRawText)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-primary/[0.02] transition-colors"
                  >
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary/40">Raw Extracted Data</span>
                    {showRawText ? <ChevronUp size={16} className="text-primary/20" /> : <ChevronDown size={16} className="text-primary/20" />}
                  </button>
                  {showRawText && (
                    <div className="px-6 pb-6 text-xs text-primary/50 leading-relaxed whitespace-pre-wrap font-mono bg-primary/[0.01] border-t border-primary/5 max-h-[200px] overflow-y-auto">
                      {result.extracted_text || "No text could be reliably extracted."}
                    </div>
                  )}
                </div>

                {/* Explanation Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-purple-500 font-black text-[10px] uppercase tracking-widest">
                    <BookOpen size={14} />
                    <span>Conceptual Understanding</span>
                  </div>
                  <p className="text-sm text-primary/70 leading-relaxed font-medium">
                    {result.simplified_explanation}
                  </p>
                </div>

                {/* Key Terms */}
                {result.key_terms.length > 0 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-purple-500 font-black text-[10px] uppercase tracking-widest">
                      <GraduationCap size={14} />
                      <span>Glossary Detected</span>
                    </div>
                    <div className="grid gap-3">
                      {result.key_terms.map((item, idx) => (
                        <div key={idx} className="p-4 bg-white border border-primary/5 rounded-2xl hover:border-purple-200 transition-colors">
                          <p className="text-xs font-bold text-primary mb-1">{item.term}</p>
                          <p className="text-[11px] text-primary/50 italic leading-relaxed">{item.meaning}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Learning Notes */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-purple-500 font-black text-[10px] uppercase tracking-widest">
                    <ShieldCheck size={14} />
                    <span>Learning Artifacts</span>
                  </div>
                  <p className="text-xs text-primary/60 leading-relaxed italic bg-purple-50/50 p-6 rounded-[32px] border border-purple-100">
                    {result.learning_notes}
                  </p>
                </div>

                {/* Section Specific Disclaimers */}
                <div className="p-6 border-l-4 border-orange-200 bg-orange-50/30 rounded-r-2xl space-y-2">
                   <p className="text-[9px] font-black uppercase text-orange-700 tracking-wider">Limitations & Boundaries</p>
                   <p className="text-[10px] text-orange-800/70 font-medium italic">{result.limitations}</p>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-30">
                 <Eye size={48} className="text-primary/20" />
                 <p className="text-xs font-bold uppercase tracking-widest">Awaiting Capture</p>
                 <p className="text-[10px] font-medium leading-relaxed max-w-[240px] italic">
                   The interpreter will deconstruct document structure and provide technical context here.
                 </p>
              </div>
            )}
          </div>

          <div className="mt-8 p-6 bg-[#0B1C2D] rounded-3xl text-white/80">
             <div className="flex items-center gap-2 mb-3">
               <Info size={16} className="text-accent" />
               <span className="text-[10px] font-black uppercase tracking-widest">Institutional Notice</span>
             </div>
             <p className="text-[10px] leading-relaxed italic font-medium">
               This tool does NOT replace professional review. OCR output may contain errors. Educational identification is unverified and provided for structural learning only.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabOCRInterpreter;
