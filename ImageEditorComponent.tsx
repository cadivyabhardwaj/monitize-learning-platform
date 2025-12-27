
import React, { useState, useRef, useEffect } from 'react';
import { Upload, Wand2, RefreshCcw, Download, Eye, AlertCircle, Beaker, ShieldAlert, X, Camera, FlipHorizontal, ChevronRight } from 'lucide-react';
import { gemini } from './geminiService';
import { View } from './types';

const ImageEditorComponent = ({ onNavigate }: { onNavigate: (view: View) => void }) => {
  const [sourceImage, setSourceImage] = useState<string | null>(null);
  const [editedImage, setEditedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
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
        setEditedImage(null);
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

  const handleEdit = async () => {
    if (!sourceImage || !prompt.trim()) return;
    setLoading(true);
    try {
      const base64Data = sourceImage.split(',')[1];
      const result = await gemini.editImage(base64Data, `DOCUMENT PROCESSING TASK: ${prompt}. Focus on clarity, contrast, and text legibility. Maintain original information integrity.`, mimeType);
      if (result) {
        setEditedImage(result);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const clear = () => {
    setSourceImage(null);
    setEditedImage(null);
    setPrompt('');
    stopCamera();
  };

  // Clean up camera on unmount
  useEffect(() => {
    return () => stopCamera();
  }, []);

  return (
    <div className="space-y-8">
      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        {/* Interaction Pane */}
        <div className="bg-white p-8 lg:p-12 rounded-[48px] shadow-sm border border-primary/5 flex flex-col">
          <div className="flex items-center justify-between mb-8">
             <h4 className="text-lg font-bold text-primary flex items-center gap-2">
                <Upload size={18} className="text-accent" />
                <span>Input Workflow</span>
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
            {mode === 'upload' ? (
              <div 
                onClick={() => fileInputRef.current?.click()}
                className={`aspect-video bg-[#F5F7FA] border-2 border-dashed rounded-3xl flex flex-col items-center justify-center cursor-pointer hover:bg-primary/5 transition-all group overflow-hidden relative ${sourceImage ? 'border-accent/20' : 'border-primary/10'}`}
                role="button"
                tabIndex={0}
                aria-label="Upload document image"
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && fileInputRef.current?.click()}
              >
                {sourceImage ? (
                  <img src={sourceImage} alt="Input document" className="w-full h-full object-contain" />
                ) : (
                  <div className="text-center space-y-4 px-8">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-primary/5 flex items-center justify-center text-primary/20 mx-auto group-hover:text-accent group-hover:scale-110 transition-all">
                      <Upload size={32} />
                    </div>
                    <p className="text-primary/40 font-bold uppercase tracking-widest text-[10px]">Click to upload document capture</p>
                    <p className="text-[9px] text-primary/20 italic">Supported formats: JPG, PNG (Max 5MB)</p>
                  </div>
                )}
                <input type="file" ref={fileInputRef} onChange={handleFileUpload} className="hidden" accept="image/*" />
              </div>
            ) : (
              <div className="aspect-video bg-[#F5F7FA] border-2 border-dashed border-primary/10 rounded-3xl flex flex-col items-center justify-center overflow-hidden relative group">
                {sourceImage ? (
                  <div className="relative w-full h-full">
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
                        className="bg-accent text-white px-8 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-xl hover:bg-accent/90 transition-all"
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
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-primary/5 flex items-center justify-center text-primary/20 mx-auto group-hover:text-accent group-hover:scale-110 transition-all">
                      <Camera size={32} />
                    </div>
                    <div>
                      <p className="text-primary/40 font-bold uppercase tracking-widest text-[10px] mb-6">Camera Access Required</p>
                      <button 
                        onClick={startCamera}
                        className="bg-primary text-white px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-primary/90 transition-all flex items-center justify-center gap-2 mx-auto"
                      >
                        <span>Enable Camera Access</span>
                        {/* Fix: ChevronRight added to imports above */}
                        <ChevronRight size={14} />
                      </button>
                    </div>
                    {cameraError && <p className="text-[9px] text-red-400 font-medium leading-relaxed italic">{cameraError}</p>}
                    <p className="text-[9px] text-primary/20 italic max-w-[200px] mx-auto">Permission is only requested when you click the button above.</p>
                  </div>
                )}
                <canvas ref={canvasRef} className="hidden" />
              </div>
            )}

            <div className="space-y-4">
              <label className="block text-[10px] font-black text-primary/40 uppercase tracking-[0.2em] ml-1">Laboratory Instruction</label>
              <div className="flex gap-2">
                <input 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g. 'Improve text contrast for reading'"
                  className="flex-1 bg-[#F5F7FA] border border-primary/5 rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-accent outline-none transition-all placeholder:text-primary/20"
                />
                <button 
                  onClick={handleEdit}
                  disabled={loading || !sourceImage || !prompt.trim()}
                  className="bg-accent hover:bg-accent/90 text-white px-6 rounded-2xl font-bold flex items-center justify-center gap-2 disabled:opacity-30 transition-all shadow-lg shadow-accent/10"
                >
                  {loading ? <RefreshCcw className="animate-spin" size={18} /> : <Wand2 size={18} />}
                  <span className="hidden sm:inline">Process</span>
                </button>
              </div>
            </div>

            <div className="p-5 bg-blue-50 border border-blue-100 rounded-2xl flex items-start gap-4">
               <ShieldAlert className="text-blue-500 shrink-0" size={18} />
               <p className="text-[10px] text-blue-800 leading-relaxed font-medium italic">
                 Processing occurs on secure infrastructure. By opting to use the camera, you grant temporary browser-level access for the duration of this lab session.
               </p>
            </div>
          </div>
        </div>

        {/* Output Pane */}
        <div className="bg-[#0B1C2D] rounded-[48px] p-8 lg:p-12 text-white flex flex-col shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-8 relative z-10">
            <h4 className="text-sm font-bold uppercase tracking-widest flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
              <span>Experimental Output</span>
            </h4>
            {editedImage && (
              <a 
                href={editedImage} 
                download="monitize_lab_output.png" 
                className="text-white/40 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-xl flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"
              >
                <Download size={16} /> Save Capture
              </a>
            )}
          </div>

          <div className="flex-1 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center overflow-hidden relative min-h-[300px] group">
            {editedImage ? (
              <img src={editedImage} alt="Processed document" className="w-full h-full object-contain p-4" />
            ) : (
              <div className="text-center px-12 space-y-6">
                <Eye className="text-white/5 mx-auto group-hover:text-white/10 transition-colors" size={64} />
                <div className="space-y-2">
                  <p className="text-white/30 text-[10px] font-black uppercase tracking-widest">Awaiting Lab Execution</p>
                  <p className="text-white/20 text-[11px] font-medium leading-relaxed italic max-w-[240px] mx-auto">
                    Results of the experimental vision logic will materialize here after processing.
                  </p>
                </div>
              </div>
            )}
            
            {loading && (
              <div className="absolute inset-0 bg-[#0B1C2D]/80 backdrop-blur-md flex flex-col items-center justify-center space-y-4">
                <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
                <div className="text-center">
                  <p className="text-accent font-black text-xs uppercase tracking-[0.4em] mb-2">Analyzing Pixels</p>
                  <p className="text-white/20 text-[9px] font-bold uppercase tracking-widest">LLM Vision Active</p>
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-2 gap-6 relative z-10">
             <div className="space-y-2">
               <p className="text-[9px] font-black text-accent uppercase tracking-widest">Logic Applied</p>
               <p className="text-[10px] text-white/40 font-medium leading-relaxed italic">
                 Image contrast enhancement & label identification.
               </p>
             </div>
             <div className="space-y-2">
               <p className="text-[9px] font-black text-white/40 uppercase tracking-widest">Model Confidence</p>
               <p className="text-[10px] text-white/40 font-medium leading-relaxed italic">
                 Experimental / Unverified Accuracy.
               </p>
             </div>
          </div>
          
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />
        </div>
      </div>
    </div>
  );
};

export default ImageEditorComponent;
