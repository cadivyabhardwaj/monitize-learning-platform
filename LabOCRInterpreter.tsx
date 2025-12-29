import React, { useState, useRef, useEffect } from 'react';
import { 
  Upload, Type, RefreshCcw, Eye, AlertCircle, ShieldAlert, X, 
  Camera, ChevronRight, Info, FileText, ChevronDown, ChevronUp, 
  Copy, ShieldCheck, Zap, BookOpen, GraduationCap, Lightbulb 
} from 'lucide-react';
import { gemini } from './geminiService';
import { OCRInterpretation, LearningMode, View } from './types';
import { AuditService } from './auditUtils';

const LabOCRInterpreter = ({ onNavigate }: { onNavigate: (view: View) => void }) => {
  const [sourceImage, setSourceImage] = useState<string | null>(null);
  const [result, setResult] = useState<OCRInterpretation | null>(null);
  const [loading, setLoading] = useState(false);
  const [mimeType, setMimeType] = useState('image/png');
  const [mode, setMode] = useState<'upload' | 'camera'>('upload');
  const [learningMode, setLearningMode] = useState<LearningMode>('standard');
  const [showRawText, setShowRawText] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  
  // HITL State
  const [isAcknowledgeTool, setIsAcknowledgeTool] = useState(false);
  
  // Safety state
  const [safetyWarning, setSafetyWarning] = useState<string[]>([]);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
    if (!sourceImage || !isAcknowledgeTool) return;
    setLoading(true);
    try {
      const base64Data = sourceImage.split(',')[1];
      const interpretation = await gemini.interpretDocumentOCR(base64Data, mimeType, learningMode);
      if (interpretation) {
        setResult(interpretation);
        const warnings = detectSensitiveData(interpretation.extracted_text);
        setSafetyWarning(warnings);
        AuditService.logAction('generated', 'AI-generated', { toolId: 'ocr-interpreter' });
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

  useEffect(() => {
    return () => stopCamera();
  }, []);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
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
        <div className="flex items-center gap-3">
          <Lightbulb size={24} className="text-purple-500/30" />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        <div className="bg-white p-8 lg:p-12 rounded-[48px] shadow-sm border border-primary/5 flex flex-col">
          <div className="flex items-center justify-between mb-8">
             <h4 className="text-lg font-bold text-primary flex items-center gap-2">
                <Type size={18} className="text-purple-500" />
                <span>Interpreter Input</span>
             </h4>
             <div className="flex items-center gap-2">
               <button onClick={() => { setMode('upload'); stopCamera(); }} className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${mode === 'upload' ? 'bg-primary text-white' : 'text-primary/40 hover:bg-primary/5'}`}>Upload</button>
               <button onClick={() => { setMode('camera'); setSourceImage(null); }} className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${mode === 'camera' ? 'bg-primary text-white' : 'text-primary/40 hover:bg-primary/5'}`}>Camera</button>
             </div>
          </div>

          <div className="space-y-8 flex-1">
            <div className="space-y-3">
              <label className="text-[10px] font-black text-primary/30 uppercase tracking-widest ml-1">Select Learning Lens</label>
              <div className="flex gap-2">
                {['beginner', 'standard', 'deepdive'].map(l => (
                  <button key={l} onClick={() => setLearningMode(l as LearningMode)} className={`flex-1 py-3 px-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all border ${learningMode === l ? 'bg-primary border-primary text-white shadow-lg' : 'bg-white border-primary/5 text-primary/40 hover:bg-primary/5'}`}>{l}</button>
                ))}
              </div>
            </div>

            {mode === 'upload' ? (
              <div onClick={() => fileInputRef.current?.click()} className={`aspect-[3/4] bg-[#F5F7FA] border-2 border-dashed rounded-3xl flex flex-col items-center justify-center cursor-pointer hover:bg-primary/5 transition-all group overflow-hidden relative ${sourceImage ? 'border-purple-500/20' : 'border-primary/10'}`}>
                {sourceImage ? <img src={sourceImage} alt="Input" className="w-full h-full object-contain p-4" /> : <Upload size={32} className="text-primary/20" />}
                <input type="file" ref={fileInputRef} onChange={handleFileUpload} className="hidden" accept="image/*" />
              </div>
            ) : (
              <div className="aspect-[3/4] bg-[#F5F7FA] border-2 border-dashed border-primary/10 rounded-3xl flex flex-col items-center justify-center overflow-hidden relative">
                {sourceImage ? <img src={sourceImage} alt="Captured" className="w-full h-full object-contain p-4" /> : isCameraActive ? <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" /> : <Camera size={32} className="text-primary/20" />}
              </div>
            )}

            <div className="space-y-6 pt-4">
              <label className="flex items-start gap-3 p-4 bg-[#F8FAFC] rounded-2xl border border-primary/5 cursor-pointer group">
                 <input 
                  type="checkbox" 
                  checked={isAcknowledgeTool}
                  onChange={(e) => setIsAcknowledgeTool(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded border-primary/10 text-accent focus:ring-accent"
                 />
                 <span className="text-[10px] text-primary/60 leading-relaxed font-medium italic group-hover:text-primary transition-colors">
                   "I understand this content is <span className="text-accent font-bold">educational</span> and has been reviewed by me."
                 </span>
              </label>

              <button 
                onClick={handleOCR}
                disabled={loading || !sourceImage || !isAcknowledgeTool}
                className="w-full bg-[#0B1C2D] hover:bg-primary/90 text-white py-5 rounded-2xl font-bold text-sm shadow-xl shadow-primary/10 transition-all flex items-center justify-center gap-3 disabled:opacity-30 disabled:grayscale"
              >
                {loading ? <RefreshCcw className="animate-spin" size={18} /> : <Zap size={18} className="text-purple-400" />}
                <span>Interpret Document</span>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 lg:p-12 rounded-[48px] border border-primary/5 shadow-sm flex flex-col relative overflow-hidden">
          <div className="flex-1 bg-[#F8FAFC] border border-primary/5 rounded-[32px] p-8 relative overflow-y-auto max-h-[700px]">
            {result ? (
              <div className="space-y-6 animate-in fade-in duration-500">
                <p className="text-sm text-primary/70 leading-relaxed font-medium italic">{result.simplified_explanation}</p>
                <div className="pt-6 border-t border-primary/5 space-y-4">
                   <p className="text-[9px] font-black uppercase text-primary/30 tracking-widest">Key Findings</p>
                   {result.key_terms.map((t, i) => (
                     <div key={i} className="p-4 bg-white rounded-2xl border border-primary/5">
                        <p className="text-xs font-bold text-primary">{t.term}</p>
                        <p className="text-[10px] text-primary/50">{t.meaning}</p>
                     </div>
                   ))}
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-30">
                 <Eye size={48} className="text-primary/20" />
                 <p className="text-xs font-bold uppercase tracking-widest mt-4">Awaiting Action</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabOCRInterpreter;