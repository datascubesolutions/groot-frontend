"use client";

import { BriefcaseIcon, ViewColumnsIcon, QueueListIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";
import { Plus, Trash2, GripVertical } from "lucide-react";
import { useEffect, useState } from "react";
import { AdminSkeleton } from "@/components/admin/AdminSkeleton";
import { toast } from "sonner";

export default function AdminServicesPage() {
  const [activeTab, setActiveTab] = useState("hero");
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isDynamic, setIsDynamic] = useState(false);

  useEffect(() => {
    // Mock initial data fetch parity
    setTimeout(() => setIsLoading(false), 700);
  }, []);

  // Data State
  const [hero, setHero] = useState({
    badgeText: "OUR EXPERTISE",
    headline: "Transforming Data into Advantage",
    subtitle: "We engineer scalable data infrastructures and AI solutions that drive real business outcomes.",
  });

  const [categories, setCategories] = useState([
    { title: "Data Platform Engineering", description: "Modernizing legacy warehouses to cloud-native data platforms." },
    { title: "Decision Intelligence", description: "Powering real-time dashboards." },
    { title: "AI & Machine Learning", description: "Deploying generative AI." }
  ]);

  const [methodology, setMethodology] = useState([
    { step: "01", name: "Assessment & Planning", desc: "Evaluating current architecture." },
    { step: "02", name: "Foundation & Setup", desc: "Building the core data layer." },
    { step: "03", name: "Deployment & Scaling", desc: "Releasing production models." }
  ]);

  const tabs = [
    { id: "hero", name: "Hero Header", icon: ViewColumnsIcon },
    { id: "categories", name: "Service Offerings", icon: BriefcaseIcon },
    { id: "methodology", name: "Methodology", icon: QueueListIcon },
    { id: "certification", name: "Badges", icon: CheckBadgeIcon },
  ];

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    // Mock save delay
    setTimeout(() => {
      setIsSaving(false);
      toast.success("Services content saved successfully!");
    }, 1000);
  };

  if (isLoading) {
    return <AdminSkeleton type="builder" />;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Services Page</h1>
          <p className="text-muted-foreground mt-1 text-sm">Manage dynamic service offerings and methodologies.</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-white/70 font-medium">Use Dynamic Content</span>
          <button
            type="button"
            onClick={() => setIsDynamic(!isDynamic)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isDynamic ? "bg-primary" : "bg-white/10"}`}
          >
            <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isDynamic ? "translate-x-6" : "translate-x-1"}`} />
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Navigation Sidebar */}
        <div className="lg:w-64 shrink-0">
          <nav className="flex flex-row lg:flex-col gap-1 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
             {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all whitespace-nowrap lg:whitespace-normal
                    ${isActive
                      ? "bg-primary/10 text-primary border border-primary/20 shadow-[0_0_15px_rgba(34,197,94,0.1)]"
                      : "text-muted-foreground hover:bg-white/5 hover:text-white"
                    }
                  `}
                >
                  <tab.icon className={`w-5 h-5 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                  {tab.name}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Content Panel */}
        <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-2xl p-6 lg:p-8 relative overflow-hidden backdrop-blur-xl">
           <form onSubmit={handleSave} className="relative z-10 w-full max-w-4xl space-y-8">
             
             {/* HERO TAB */}
             {activeTab === "hero" && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="border-b border-border/40 pb-4">
                    <h2 className="text-lg font-semibold text-white">Hero Header</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                       <label className="text-sm font-medium text-white/80">Badge Text</label>
                       <input
                         type="text"
                         value={hero.badgeText}
                         onChange={(e) => setHero({...hero, badgeText: e.target.value})}
                         className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50"
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-medium text-white/80">Main Headline</label>
                       <input
                         type="text"
                         value={hero.headline}
                         onChange={(e) => setHero({...hero, headline: e.target.value})}
                         className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50"
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-medium text-white/80">Subtitle Description</label>
                       <textarea
                         rows={3}
                         value={hero.subtitle}
                         onChange={(e) => setHero({...hero, subtitle: e.target.value})}
                         className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 resize-y"
                       />
                    </div>
                  </div>
                </div>
             )}

             {/* CATEGORIES TAB */}
             {activeTab === "categories" && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="border-b border-border/40 pb-4 flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-white">Service Offerings</h2>
                    <button
                      type="button"
                      onClick={() => setCategories([...categories, { title: "New Core Service", description: "Service details" }])}
                      className="px-3 py-1.5 bg-primary/20 text-primary hover:bg-primary/30 rounded-lg text-sm transition-colors flex items-center gap-2 font-medium"
                    >
                      <Plus className="w-4 h-4" /> Add Catalog Item
                    </button>
                  </div>
                  <div className="space-y-4">
                     {categories.map((cat, i) => (
                       <div key={i} className="flex gap-4 items-start bg-black/20 border border-white/10 p-4 rounded-xl group relative">
                          <GripVertical className="w-5 h-5 text-white/20 mt-2 cursor-grab" />
                          <div className="flex-1 space-y-3">
                             <input
                               type="text"
                               value={cat.title}
                               onChange={(e) => {
                                 const newList = [...categories];
                                 newList[i].title = e.target.value;
                                 setCategories(newList);
                               }}
                               className="w-full bg-transparent border-b border-white/10 focus:border-primary text-white font-medium focus:outline-none pb-1"
                             />
                             <textarea
                               rows={2}
                               value={cat.description}
                               onChange={(e) => {
                                 const newList = [...categories];
                                 newList[i].description = e.target.value;
                                 setCategories(newList);
                               }}
                               className="w-full bg-transparent border border-white/10 rounded-lg p-2 text-sm text-white/80 focus:border-primary focus:outline-none"
                             />
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              setCategories(categories.filter((_, idx) => idx !== i));
                            }}
                            className="text-red-400 opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-red-400/10 rounded-lg"
                          >
                             <Trash2 className="w-4 h-4" />
                          </button>
                       </div>
                     ))}
                  </div>
                </div>
             )}

             {/* METHODOLOGY TAB */}
             {activeTab === "methodology" && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="border-b border-border/40 pb-4 flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-white">Delivery Methodology</h2>
                    <button
                      type="button"
                      onClick={() => setMethodology([...methodology, { step: "XX", name: "New Phase", desc: "" }])}
                      className="px-3 py-1.5 bg-primary/20 text-primary hover:bg-primary/30 rounded-lg text-sm transition-colors flex items-center gap-2 font-medium"
                    >
                      <Plus className="w-4 h-4" /> Add Step
                    </button>
                  </div>
                  <div className="space-y-4">
                     {methodology.map((step, i) => (
                       <div key={i} className="flex gap-4 items-center bg-black/20 border border-white/10 p-3 rounded-xl group">
                          <input 
                            type="text" 
                            value={step.step} 
                            onChange={(e) => {
                              const arr = [...methodology]; arr[i].step = e.target.value; setMethodology(arr);
                            }}
                            className="w-12 h-12 text-center bg-black border border-white/10 rounded-full text-primary font-bold focus:outline-none" 
                          />
                          <div className="flex-1 space-y-2">
                             <input 
                               type="text" 
                               value={step.name} 
                               onChange={(e) => {
                                 const arr = [...methodology]; arr[i].name = e.target.value; setMethodology(arr);
                               }}
                               className="w-full bg-transparent text-white font-medium focus:outline-none"
                             />
                             <input 
                               type="text" 
                               value={step.desc} 
                               onChange={(e) => {
                                 const arr = [...methodology]; arr[i].desc = e.target.value; setMethodology(arr);
                               }}
                               className="w-full bg-transparent text-sm text-muted-foreground focus:outline-none"
                             />
                          </div>
                          <button
                            type="button"
                            onClick={() => setMethodology(methodology.filter((_, idx) => idx !== i))}
                            className="text-red-400 opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-red-400/10 rounded-lg border border-red-500/0"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                       </div>
                     ))}
                  </div>
                </div>
             )}

             {/* CERTIFICATION TAB */}
             {activeTab === "certification" && (
                <div className="py-8 text-center border-2 border-dashed border-white/10 rounded-xl">
                   <p className="text-muted-foreground text-sm font-medium">Partner Badge & Certification settings coming soon.</p>
                </div>
             )}

             <div className="pt-6 mt-6 border-t border-white/10 flex justify-end">
               <button
                 type="submit"
                 disabled={isSaving}
                 className="px-6 py-2.5 bg-white text-black font-bold text-sm rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2 disabled:opacity-70 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
               >
                 {isSaving ? "Saving..." : "Save Changes"}
               </button>
             </div>
           </form>
        </div>
      </div>
    </div>
  );
}
