
import React, { useState, useRef, useEffect } from 'react';
import { Upload, FileSearch, RefreshCcw, Eye, AlertCircle, ShieldAlert, X, Camera, ChevronRight, Info, FileText, GraduationCap, Lightbulb } from 'lucide-react';
import { gemini } from './geminiService';
import { View } from './types';

const LabDocumentExplainer = ({ onNavigate }: { onNavigate: (view: View) => void }) => {
  const [sourceImage, setSourceImage] = useState<string | null>(null);
  const [explanation, setExplanation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [mimeType, setMimeType] = useState('image/png');
  const [mode, setMode] = useState<'upload' | 'camera'>('upload');
  
  // Camera specific state
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
        setSourceImage(reader.result as string);
        setExplanation(null);
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

  const handleExplain = async () => {
    if (!sourceImage) return;
    setLoading(true);
    try {
      const base64Data = sourceImage.split(',')[1];
      const result = await gemini.explainDocument(base64Data, mimeType);
      if (result) {
        setExplanation(result);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const clear = () => {
    setSourceImage(null);
    setExplanation(null);
    stopCamera();
  };

  useEffect(() => {
    return () => stopCamera();
  }, []);

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      {/* MODULE BRIEFING HEADER */}
      <div className="bg-white p-8 rounded-[40px] border border-primary/5 shadow-sm flex flex-col md:flex-row items-center gap-8">
        <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center shrink-0 text-emerald-500">
          <FileSearch size={24} />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl font-poppins font-bold text-primary mb-2 flex items-center justify-center md:justify-start gap-2">
            <span>Module Briefing: Document Explainer</span>
            <div className="px-2 py-0.5 bg-emerald-100 rounded text-[8px] font-black text-emerald-500 uppercase tracking-tighter">Capture Support</div>
          </h3>
          <p className="text-sm text-primary/60 font-medium leading-relaxed max-w-3xl">
            Identifies common sections in administrative forms (like ITR forms or GST certificates) for structural awareness. It helps you understand where key information typically resides in standard documentation.
          </p>
        </div>
        <div className="w-px h-12 bg-primary/5 hidden md:block" />
        <div className="flex items-center gap-3">
          <Lightbulb size={24} className="text-emerald-500/30" />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        {/* Interaction Pane */}
        <div className="bg-white p-8 lg:p-12 rounded-[48px] shadow-sm border border-primary/5 flex flex-col">
          <div className="flex items-center justify-between mb-8">
             <h4 className="text-lg font-bold text-primary flex items-center gap-2">
                <FileSearch size={18} className="text-emerald-500" />
                <span>Document Input</span>
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
              Upload a document image to receive an experimental identification and structural explanation based on neutral Indian administrative logic.
            </p>

            <button 
              onClick={() => onNavigate('tax-fundamentals')}
              className="w-fit flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-emerald-600 hover:bg-emerald-100 transition-colors"
            >
              <GraduationCap size={14} />
              <span>Learn Tax Frameworks First</span>
              <ChevronRight size={12} />
            </button>

            {mode === 'upload' ? (
              <div 
                onClick={() => fileInputRef.current?.click()}
                className={`aspect-[3/4] bg-[#F5F7FA] border-2 border-dashed rounded-3xl flex flex-col items-center justify-center cursor-pointer hover:bg-primary/5 transition-all group overflow-hidden relative ${sourceImage ? 'border-emerald-500/20' : 'border-primary/10'}`}
                role="button"
                tabIndex={0}
                aria-label="Upload document image"
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && fileInputRef.current?.click()}
              >
                {sourceImage ? (
                  <img src={sourceImage} alt="Input document" className="w-full h-full object-contain p-4" />
                ) : (
                  <div className="text-center space-y-4 px-8">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-primary/5 flex items-center justify-center text-primary/20 mx-auto group-hover:text-emerald-500 group-hover:scale-110 transition-all">
                      <Upload size={32} />
                    </div>
                    <p className="text-primary/40 font-bold uppercase tracking-widest text-[10px]">Click to upload document photo</p>
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
                    <video 
                      ref={videoRef} 
                      autoPlay 
                      playsInline 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4 px-6">
                      <button 
                        onClick={captureFrame}
                        className="bg-emerald-500 text-white px-8 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-xl hover:bg-emerald-600 transition-all"
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
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-primary/5 flex items-center justify-center text-primary/20 mx-auto group-hover:text-emerald-500 group-hover:scale-110 transition-all">
                      <Camera size={32} />
                    </div>
                    <div>
                      <p className="text-primary/40 font-bold uppercase tracking-widest text-[10px] mb-6">Camera Access Required</p>
                      <button 
                        onClick={startCamera}
                        className="bg-primary text-white px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-primary/90 transition-all flex items-center justify-center gap-2 mx-auto"
                      >
                        <span>Enable Camera Access</span>
                        <ChevronRight size={14} />
                      </button>
                    </div>
                    {cameraError && <p className="text-[9px] text-red-400 font-medium leading-relaxed italic">{cameraError}</p>}
                  </div>
                )}
                <canvas ref={canvasRef} className="hidden" />
              </div>
            )}

            <div className="space-y-4">
              <button 
                onClick={handleExplain}
                disabled={loading || !sourceImage}
                className="w-full bg-[#0B1C2D] hover:bg-primary/90 text-white py-5 rounded-2xl font-bold text-sm shadow-xl shadow-primary/10 transition-all flex items-center justify-center gap-3 disabled:opacity-30"
              >
                {loading ? <RefreshCcw className="animate-spin" size={18} /> : <FileSearch size={18} className="text-emerald-400" />}
                <span>Explain Document Logic</span>
              </button>
              
              <div className="p-5 bg-orange-50 border border-orange-100 rounded-2xl flex items-start gap-4">
                 <ShieldAlert className="text-orange-500 shrink-0 mt-0.5" size={18} />
                 <p className="text-[10px] text-orange-800 leading-relaxed font-medium italic">
                   EXPERIMENTAL: This tool analyzes visual document patterns. It may misinterpret blurred or low-contrast text. Never use for final verification of sensitive documents.
                 </p>
              </div>
            </div>
          </div>
        </div>

        {/* Output Pane */}
        <div className="bg-white p-8 lg:p-12 rounded-[48px] border border-primary/5 shadow-sm flex flex-col relative overflow-hidden">
          <div className="flex items-center justify-between mb-8">
             <h4 className="text-lg font-bold text-primary flex items-center gap-2">
                <FileText size={18} className="text-emerald-500" />
                <span>Explanation Dashboard</span>
             </h4>
             {explanation && (
               <button onClick={clear} className="text-[10px] font-black text-red-400 uppercase tracking-widest hover:text-red-600 transition-colors flex items-center gap-1">
                 <X size={12} /> Clear Lab
               </button>
             )}
          </div>

          <div className="flex-1 bg-[#F8FAFC] border border-primary/5 rounded-[32px] p-8 relative overflow-y-auto max-h-[600px]">
            {explanation ? (
              <div className="whitespace-pre-wrap text-sm text-primary/70 leading-relaxed space-y-4 font-medium">
                {explanation}
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-30">
                 <Eye size={48} className="text-primary/20" />
                 <p className="text-xs font-bold uppercase tracking-widest">Awaiting Analysis</p>
                 <p className="text-[10px] font-medium leading-relaxed max-w-[200px] italic">
                   Structure identification and educational context will materialize here.
                 </p>
              </div>
            )}

            {loading && (
              <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex flex-col items-center justify-center space-y-4">
                 <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                 <p className="text-emerald-600 font-black text-[10px] uppercase tracking-widest">Applying Vision Logic</p>
              </div>
            )}
          </div>

          <div className="mt-8 p-6 bg-[#0B1C2D] rounded-3xl text-white/80">
             <div className="flex items-center gap-2 mb-3">
               <Info size={16} className="text-accent" />
               <span className="text-[10px] font-black uppercase tracking-widest">Educational Disclaimer</span>
             </div>
             <p className="text-[10px] leading-relaxed italic font-medium">
               This explanation is for educational understanding only. It is not financial, legal, or tax advice. Please consult a qualified professional for decisions.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabDocumentExplainer;
