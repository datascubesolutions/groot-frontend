// @ts-nocheck
"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/Dialog";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Textarea } from "@/components/ui/Textarea";
import { AnimatePresence, m } from "framer-motion";
import { Award, CheckCircle2, Code2, File, Loader2, Phone, Sparkles, UploadCloud, X } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";

const TIMELINE_STEPS = [
  {
    icon: <Sparkles size={16} />,
    title: "Profile Review",
    desc: "Our engineering team reviews your background."
  },
  {
    icon: <Phone size={16} />,
    title: "Introductory Call",
    desc: "A quick 30-min chat to align on goals and role."
  },
  {
    icon: <Code2 size={16} />,
    title: "Technical Deep Dive",
    desc: "Showcase your data skills in a practical scenario."
  },
  {
    icon: <Award size={16} />,
    title: "The Offer",
    desc: "Join the elite data engineering squad at Groot."
  }
];

export default function ApplicationModal({ isOpen, onClose, jobTitle }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!resumeFile) {
      toast.error("Resume attachment is required");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Auto close after showing success
      setTimeout(() => {
        handleClose();
      }, 3000);
    }, 1500);
  };

  const handleClose = () => {
    onClose();
    // Reset state after animation finishes
    setTimeout(() => {
      setIsSuccess(false);
      setIsSubmitting(false);
      setResumeFile(null);
    }, 300);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setResumeFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="max-w-[1100px] w-[95vw] max-h-[90vh] overflow-y-auto lg:overflow-hidden p-0 border-0 bg-transparent shadow-none">

        <div className="bg-card/90 backdrop-blur-3xl rounded-2xl sm:rounded-[3rem] border border-border/50 shadow-[0_0_80px_-20px_hsl(var(--primary)/0.15)] overflow-hidden relative flex flex-col lg:flex-row min-h-[auto] lg:min-h-[760px] lg:h-[90vh]">
          {/* LEFT PANEL - CONTEXT & BRANDING */}
          <div className="w-full lg:w-[40%] bg-forest relative p-5 sm:p-8 md:p-12 text-forest-foreground flex flex-col justify-between overflow-hidden shrink-0">
            {/* Background graphics */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.25),transparent_70%)] pointer-events-none" />
            <div className="absolute bottom-0 left-[-20%] w-[400px] h-[400px] bg-[radial-gradient(circle_at_bottom_left,hsl(var(--mint)/0.15),transparent_70%)] pointer-events-none" />

            <div className="relative z-10 h-full flex flex-col">
              <div className="mb-0 md:mb-12">
                <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-primary mb-3 md:mb-4 flex items-center gap-2 md:gap-3">
                  <span className="w-4 md:w-6 h-px bg-primary" /> Active Position
                </h2>
                <DialogTitle className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter leading-[1.1] mb-4 md:mb-6 text-background">{jobTitle}</DialogTitle>
                <p className="text-background/80 font-medium text-sm sm:text-base md:text-lg leading-relaxed max-w-sm">
                  Join an elite engineering culture building the world's most robust data platforms on the Microsoft stack.
                </p>
              </div>

              <div className="mt-8 md:mt-auto hidden md:block">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-8 border-b border-primary/20 pb-4">What to Expect</h3>

                <div className="space-y-6">
                  {TIMELINE_STEPS.map((step, i) => (
                    <div key={i} className="flex items-start gap-5 relative group">
                      {/* Timeline Line */}
                      {i !== TIMELINE_STEPS.length - 1 && (
                        <div className="absolute top-10 left-[1.1rem] bottom-[-24px] w-px bg-primary/20 group-hover:bg-primary/50 transition-colors" />
                      )}

                      <div className="w-9 h-9 rounded-full bg-background/5 border border-background/20 flex items-center justify-center shrink-0 text-primary shadow-[0_0_15px_-3px_hsl(var(--primary)/0.3)]">
                        {step.icon}
                      </div>

                      <div className="pt-1">
                        <h4 className="font-bold text-background tracking-wide mb-1">{step.title}</h4>
                        <p className="text-background/60 text-sm font-medium leading-relaxed max-w-[250px]">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL - THE FORM */}
          <div className="w-full lg:w-[60%] p-5 sm:p-6 md:p-8 lg:p-10 relative flex flex-col lg:overflow-y-auto custom-scrollbar">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <m.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center h-full text-center py-20"
                >
                  <div className="w-24 h-24 sm:w-28 sm:h-28 bg-forest/10 text-forest rounded-full flex items-center justify-center mb-6 sm:mb-8 border border-forest/20 shadow-[0_0_60px_-10px_hsl(var(--forest)/0.4)] relative">
                    <div className="absolute inset-0 rounded-full border border-forest/30 animate-ping opacity-20" />
                    <CheckCircle2 size={48} strokeWidth={2.5} className="sm:w-14 sm:h-14" />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-foreground mb-4 tracking-tight">Application Sent!</h3>
                  <p className="text-lg sm:text-xl text-muted-foreground font-medium max-w-md mx-auto">
                    Thanks for applying. Our engineering team has received your profile and will be in touch shortly.
                  </p>
                </m.div>
              ) : (
                <m.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col h-full"
                >
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tighter text-foreground mb-4">Submit Your Application</h3>
                    <p className="text-sm sm:text-base text-forest/70 font-medium border-l-2 border-primary/50 pl-4 py-1 bg-primary/5 rounded-r-lg">Fields marked with an asterisk are required.</p>
                  </div>

                  <div className="space-y-4 sm:space-y-6 flex-1">
                    {/* Compact Grid for Basics */}
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-1.5">
                        <Label htmlFor="firstName" className="text-forest/80 font-black uppercase tracking-[0.2em] text-[10px] ml-1">First Name <span className="text-primary">*</span></Label>
                        <Input id="firstName" required placeholder="Shivam" className="h-12 rounded-2xl border border-border/80 bg-muted/30 px-5 text-base font-semibold text-foreground transition-all duration-300 placeholder:text-muted-foreground/60 shadow-sm hover:bg-muted/50 hover:border-border outline-none focus-visible:outline-none focus-visible:border-primary focus-visible:bg-white focus-visible:ring-[3px] focus-visible:ring-primary/20" />
                      </div>
                      <div className="space-y-2.5">
                        <Label htmlFor="lastName" className="text-forest/80 font-black uppercase tracking-[0.2em] text-[10px] ml-1">Last Name <span className="text-primary">*</span></Label>
                        <Input id="lastName" required placeholder="Chaudhary" className="h-12 rounded-2xl border border-border/80 bg-muted/30 px-5 text-base font-semibold text-foreground transition-all duration-300 placeholder:text-muted-foreground/60 shadow-sm hover:bg-muted/50 hover:border-border outline-none focus-visible:outline-none focus-visible:border-primary focus-visible:bg-white focus-visible:ring-[3px] focus-visible:ring-primary/20" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5 sm:gap-8">
                      <div className="space-y-2.5">
                        <Label htmlFor="email" className="text-forest/80 font-black uppercase tracking-[0.2em] text-[10px] ml-1">Email Address <span className="text-primary">*</span></Label>
                        <Input id="email" type="email" required placeholder="Groot@example.com" className="h-12 rounded-2xl border border-border/80 bg-muted/30 px-5 text-base font-semibold text-foreground transition-all duration-300 placeholder:text-muted-foreground/60 shadow-sm hover:bg-muted/50 hover:border-border outline-none focus-visible:outline-none focus-visible:border-primary focus-visible:bg-white focus-visible:ring-[3px] focus-visible:ring-primary/20" />
                      </div>
                      <div className="space-y-2.5">
                        <Label htmlFor="linkedin" className="text-forest/80 font-black uppercase tracking-[0.2em] text-[10px] ml-1">LinkedIn / Portfolio</Label>
                        <Input id="linkedin" type="url" placeholder="https://linkedin.com/in/..." className="h-12 rounded-2xl border border-border/80 bg-muted/30 px-5 text-base font-semibold text-foreground transition-all duration-300 placeholder:text-muted-foreground/60 shadow-sm hover:bg-muted/50 hover:border-border outline-none focus-visible:outline-none focus-visible:border-primary focus-visible:bg-white focus-visible:ring-[3px] focus-visible:ring-primary/20" />
                      </div>
                    </div>

                    {/* Horizontal Compact Resume Uploader */}
                    <div className="space-y-1.5 pt-1">
                      <Label className="text-forest/80 font-black uppercase tracking-[0.2em] text-[10px] ml-1">Resume / CV <span className="text-primary">*</span></Label>
                      <div
                        className={`relative flex items-center justify-between w-full p-4 sm:p-5 rounded-2xl border-2 border-dashed transition-all duration-300 cursor-pointer ${isDragging ? 'border-primary bg-primary/10 scale-[1.02] shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.2)]' : 'border-border/60 bg-muted/30 shadow-sm hover:bg-muted/50 hover:border-primary/40'}`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          className="hidden"
                          accept=".pdf,.doc,.docx"
                        />

                        {resumeFile ? (
                          <div className="flex items-center gap-4 w-full">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-forest/10 flex items-center justify-center text-forest shrink-0 shadow-inner border border-forest/20">
                              <File size={24} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-base font-bold text-foreground truncate">{resumeFile.name}</p>
                              <p className="text-[10px] sm:text-xs text-forest font-bold uppercase tracking-wider mt-1 flex items-center gap-1.5"><CheckCircle2 size={12} /> Ready to upload</p>
                            </div>
                            <button
                              type="button"
                              onClick={(e) => { e.stopPropagation(); setResumeFile(null); }}
                              className="w-12 h-12 rounded-full flex items-center justify-center text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors shrink-0 border border-transparent hover:border-destructive/20"
                            >
                              <X size={20} />
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center gap-4 sm:gap-5 w-full">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 shadow-inner border border-primary/20">
                              <UploadCloud size={24} />
                            </div>
                            <div>
                              <p className="text-sm sm:text-base font-bold text-foreground">Click or drag file to upload</p>
                              <p className="text-[11px] sm:text-xs text-muted-foreground font-semibold uppercase tracking-wider mt-1">PDF, DOC, DOCX up to 5MB</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      <Label htmlFor="whyGroot" className="text-forest/80 font-black uppercase tracking-[0.2em] text-[10px] ml-1">Why Groot Analytics? <span className="text-primary">*</span></Label>
                      <Textarea
                        id="whyGroot"
                        required
                        placeholder="A few short sentences on why Groot interests you..."
                        className="h-20 sm:h-24 rounded-2xl border border-border/80 bg-muted/30 p-4 sm:p-5 text-base font-semibold text-foreground transition-all duration-300 placeholder:text-muted-foreground/60 shadow-sm hover:bg-muted/50 hover:border-border outline-none focus-visible:outline-none focus-visible:border-primary focus-visible:bg-white focus-visible:ring-[3px] focus-visible:ring-primary/20 resize-none"
                      />
                    </div>

                    <div className="space-y-1.5 pt-1 pb-4">
                      <Label htmlFor="dataProject" className="text-forest/80 font-black uppercase tracking-[0.2em] text-[10px] ml-1">A Data Project You're Proud Of <span className="text-primary">*</span></Label>
                      <Textarea
                        id="dataProject"
                        required
                        placeholder="Briefly describe a data puzzle, pipeline, or model you built."
                        className="h-20 sm:h-24 rounded-2xl border border-border/80 bg-muted/30 p-4 sm:p-5 text-base font-semibold text-foreground transition-all duration-300 placeholder:text-muted-foreground/60 shadow-sm hover:bg-muted/50 hover:border-border outline-none focus-visible:outline-none focus-visible:border-primary focus-visible:bg-white focus-visible:ring-[3px] focus-visible:ring-primary/20 resize-none"
                      />
                    </div>
                  </div>

                  {/* Footer Area */}
                  <div className="border-t-2 border-border/30 mt-6 pt-5 sm:pt-8 -mx-5 -mb-5 px-5 pb-5 sm:-mx-6 sm:-mb-6 sm:px-6 sm:pb-6 md:-mx-8 md:-mb-8 md:px-8 md:pb-8 lg:mx-0 lg:mb-0 lg:px-0 lg:pb-0 relative z-20">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 sm:h-16 rounded-2xl bg-forest text-forest-foreground font-black tracking-[0.25em] uppercase text-[12px] sm:text-[14px] transition-all duration-500 flex items-center justify-center shadow-[0_15px_40px_-10px_hsl(var(--forest)/0.4)] hover:shadow-[0_20px_50px_-10px_hsl(var(--forest)/0.6)] hover:-translate-y-1 hover:bg-forest/90 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:shadow-none group overflow-hidden relative"
                    >
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                      <span className="relative z-10 flex items-center">
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                            Submitting Application...
                          </>
                        ) : (
                          "Send Application"
                        )}
                      </span>
                    </button>
                  </div>
                </m.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
