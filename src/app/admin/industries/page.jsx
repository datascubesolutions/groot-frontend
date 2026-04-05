"use client";

import { BuildingOffice2Icon, DocumentChartBarIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { AdminSkeleton } from "@/components/admin/AdminSkeleton";
import { toast } from "sonner";

export default function AdminIndustriesPage() {
  const [activeTab, setActiveTab] = useState("hero");
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isDynamic, setIsDynamic] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 700);
  }, []);

  // Data State
  const [hero, setHero] = useState({
    badge: "INDUSTRIES WE SERVE",
    title: "Domain Expertise at Scale",
    subtitle: "Bringing deep sector knowledge to accelerate your data transformation journey.",
  });

  const [sectors, setSectors] = useState([
    { name: "Financial Services", description: "Risk modeling and regulatory reporting automation." },
    { name: "Healthcare & Life Sciences", description: "Secure patient analytics and operational efficiency." },
    { name: "Retail & E-commerce", description: "Supply chain intelligence and customer 360 views." }
  ]);

  const tabs = [
    { id: "hero", name: "Sector Header", icon: GlobeAltIcon },
    { id: "sectors", name: "Industry Verticals", icon: BuildingOffice2Icon },
    { id: "cases", name: "Use Cases", icon: DocumentChartBarIcon },
  ];

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      toast.success("Industries content saved successfully!");
    }, 1000);
  };

  if (isLoading) {
    return <AdminSkeleton type="builder" />;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Industries Page</h1>
          <p className="text-muted-foreground mt-1 text-sm">Manage industry verticals and specific use-cases.</p>
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

        <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-2xl p-6 lg:p-8 relative overflow-hidden backdrop-blur-xl">
           <form onSubmit={handleSave} className="relative z-10 w-full max-w-4xl space-y-8">
             
             {activeTab === "hero" && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="border-b border-border/40 pb-4">
                    <h2 className="text-lg font-semibold text-white">Header Section</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                       <label className="text-sm font-medium text-white/80">Badge Text</label>
                       <input
                         type="text"
                         value={hero.badge}
                         onChange={(e) => setHero({...hero, badge: e.target.value})}
                         className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50"
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-medium text-white/80">Main Headline</label>
                       <input
                         type="text"
                         value={hero.title}
                         onChange={(e) => setHero({...hero, title: e.target.value})}
                         className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50"
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-medium text-white/80">Subtitle Description</label>
                       <textarea
                         rows={2}
                         value={hero.subtitle}
                         onChange={(e) => setHero({...hero, subtitle: e.target.value})}
                         className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 resize-y"
                       />
                    </div>
                  </div>
                </div>
             )}

             {activeTab === "sectors" && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="border-b border-border/40 pb-4 flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-white">Industry Verticals</h2>
                    <button
                      type="button"
                      onClick={() => setSectors([...sectors, { name: "New Industry", description: "Details and value prop." }])}
                      className="px-3 py-1.5 bg-primary/20 text-primary hover:bg-primary/30 rounded-lg text-sm transition-colors flex items-center gap-2 font-medium"
                    >
                      <Plus className="w-4 h-4" /> Add Industry
                    </button>
                  </div>
                  <div className="space-y-4">
                     {sectors.map((sector, i) => (
                       <div key={i} className="flex flex-col gap-3 bg-black/20 border border-white/10 p-4 rounded-xl relative group">
                          <button
                            type="button"
                            onClick={() => setSectors(sectors.filter((_, idx) => idx !== i))}
                            className="absolute -top-3 right-2 text-red-500 bg-black border border-white/10 rounded-lg p-1.5 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500/20"
                          >
                             <Trash2 className="w-4 h-4" />
                          </button>
                          <input
                            type="text"
                            value={sector.name}
                            onChange={(e) => {
                              const newSectors = [...sectors];
                              newSectors[i].name = e.target.value;
                              setSectors(newSectors);
                            }}
                            className="w-full bg-transparent border-b border-white/10 focus:border-primary text-white font-semibold text-lg focus:outline-none pb-1"
                          />
                          <textarea
                            rows={2}
                            value={sector.description}
                            onChange={(e) => {
                              const newSectors = [...sectors];
                              newSectors[i].description = e.target.value;
                              setSectors(newSectors);
                            }}
                            className="w-full bg-transparent text-sm text-white/70 focus:outline-none resize-none pt-2 border-none"
                          />
                       </div>
                     ))}
                  </div>
                </div>
             )}

             {activeTab === "cases" && (
                <div className="py-8 text-center border-2 border-dashed border-white/10 rounded-xl">
                   <p className="text-muted-foreground text-sm font-medium">Use Case / Case Study linker component coming soon.</p>
                </div>
             )}

             <div className="pt-6 mt-6 border-t border-white/10 flex justify-end">
               <button type="submit" disabled={isSaving} className="px-6 py-2.5 bg-white text-black font-bold text-sm rounded-xl hover:bg-gray-200 transition-all">
                 {isSaving ? "Saving..." : "Save Changes"}
               </button>
             </div>
           </form>
        </div>
      </div>
    </div>
  );
}
