"use client";

import { CloudIcon, ServerStackIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import { Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { AdminSkeleton } from "@/components/admin/AdminSkeleton";
import { toast } from "sonner";

export default function AdminMicrosoftPage() {
  const [activeTab, setActiveTab] = useState("hero");
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isDynamic, setIsDynamic] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 700);
  }, []);

  // Data State
  const [hero, setHero] = useState({
    badge: "MICROSOFT FABRIC & ON-PREM",
    title: "Engineering the Data Foundation",
    subtitle: "From legacy migrations to AI-ready Fabric deployments.",
  });

  const [solutions, setSolutions] = useState([
    { name: "Fabric Migration", tech: "Microsoft Fabric, Synapse", desc: "End-to-end cloud migration strategy." },
    { name: "Power BI Governance", tech: "Power BI Premium", desc: "Setting up secure, scaleable PBI tenants." },
  ]);

  const tabs = [
    { id: "hero", name: "Microsoft Hero", icon: CloudIcon },
    { id: "solutions", name: "Tech Solutions", icon: ServerStackIcon },
    { id: "certifications", name: "Microsoft Accolades", icon: ShieldCheckIcon },
  ];

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      toast.success("Microsoft tech content saved!");
    }, 1000);
  };

  if (isLoading) {
    return <AdminSkeleton type="builder" />;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Microsoft Tech Page</h1>
          <p className="text-muted-foreground mt-1 text-sm">Manage Microsoft-specific service offerings and stack info.</p>
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
                  className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all
                    ${isActive ? "bg-primary/10 text-primary border border-primary/20" : "text-muted-foreground hover:bg-white/5 hover:text-white"}
                  `}
                >
                  <tab.icon className={`w-5 h-5 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                  {tab.name}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-2xl p-6 relative overflow-hidden backdrop-blur-xl">
           <form onSubmit={handleSave} className="relative z-10 space-y-8">
             
             {activeTab === "hero" && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
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
                         className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50"
                       />
                    </div>
                  </div>
                </div>
             )}

             {activeTab === "solutions" && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                     <h2 className="text-lg font-semibold text-white">Cloud & Data Solutions</h2>
                     <button type="button" onClick={() => setSolutions([...solutions, { name: "New Solution", tech: "Tools", desc: "" }])} className="text-sm text-primary flex items-center gap-1">
                        <Plus size={16} /> Add Stack
                     </button>
                  </div>
                  <div className="space-y-4">
                     {solutions.map((sol, i) => (
                       <div key={i} className="bg-black/20 p-4 rounded-xl border border-white/10 flex flex-col gap-2 relative group">
                          <button
                            type="button"
                            onClick={() => setSolutions(solutions.filter((_, idx) => idx !== i))}
                            className="absolute top-4 right-4 text-red-500 opacity-0 group-hover:opacity-100 hover:bg-red-500/20 p-1.5 rounded-lg transition-opacity"
                          >
                             <Trash2 size={16} />
                          </button>
                          <input
                            value={sol.name}
                            onChange={(e) => { const n=[...solutions]; n[i].name=e.target.value; setSolutions(n); }}
                            className="bg-transparent text-white font-bold text-lg border-b border-white/10 w-[90%] pb-1 focus:outline-none focus:border-primary"
                          />
                          <input
                            value={sol.tech}
                            onChange={(e) => { const n=[...solutions]; n[i].tech=e.target.value; setSolutions(n); }}
                            className="bg-transparent text-sm text-primary font-mono w-[90%] focus:outline-none mt-1"
                          />
                          <textarea
                            value={sol.desc}
                            onChange={(e) => { const n=[...solutions]; n[i].desc=e.target.value; setSolutions(n); }}
                            className="bg-transparent text-white/70 text-sm mt-2 focus:outline-none resize-none"
                            rows={2}
                          />
                       </div>
                     ))}
                  </div>
                </div>
             )}

             {activeTab === "certifications" && (
                 <div className="py-8 text-center text-muted-foreground border-2 border-dashed border-white/10 rounded-xl">
                   Microsoft Partner Badges Upload coming soon.
                 </div>
             )}

             <div className="pt-6 mt-6 border-t border-white/10 flex justify-end">
               <button type="submit" disabled={isSaving} className="px-6 py-2.5 bg-white text-black font-bold text-sm rounded-xl">
                 {isSaving ? "Saving..." : "Save Changes"}
               </button>
             </div>
           </form>
        </div>
      </div>
    </div>
  );
}
