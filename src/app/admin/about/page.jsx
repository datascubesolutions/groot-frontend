"use client";

import { IdentificationIcon, ViewColumnsIcon, FlagIcon } from "@heroicons/react/24/outline";
import { Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { AdminSkeleton } from "@/components/admin/AdminSkeleton";
import { toast } from "sonner";

export default function AdminAboutPage() {
  const [activeTab, setActiveTab] = useState("hero");
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isDynamic, setIsDynamic] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 700);
  }, []);

  // Data State
  const [hero, setHero] = useState({
    badge: "ABOUT US",
    title: "We Build What Works",
    subtitle: "A team of data platform engineers obsessed with shipping reliable infrastructure.",
  });

  const [team, setTeam] = useState([
    { name: "Alex Mercer", role: "Principal Data Engineer", linkedin: "linkedin.com/in/alex", photo: "/team/alex.jpg" },
    { name: "Sarah Chen", role: "AI Foundry Lead", linkedin: "linkedin.com/in/sarah", photo: "/team/sarah.jpg" },
  ]);

  const [milestones, setMilestones] = useState([
    { year: "2020", title: "Founded", desc: "Started as a dedicated data consultancy." },
    { year: "2023", title: "Microsoft Partner", desc: "Achieved Data & AI designation." }
  ]);

  const tabs = [
    { id: "hero", name: "Company Intro", icon: ViewColumnsIcon },
    { id: "team", name: "Team Roster", icon: IdentificationIcon },
    { id: "milestones", name: "Timeline", icon: FlagIcon },
  ];

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      toast.success("About page content saved!");
    }, 1000);
  };

  if (isLoading) {
    return <AdminSkeleton type="builder" />;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">About Page</h1>
          <p className="text-muted-foreground mt-1 text-sm">Manage team, history, and company messaging.</p>
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
                       <label className="text-sm font-medium text-white/80">Mission Statement</label>
                       <textarea
                         rows={3}
                         value={hero.subtitle}
                         onChange={(e) => setHero({...hero, subtitle: e.target.value})}
                         className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50"
                       />
                    </div>
                  </div>
                </div>
             )}

             {activeTab === "team" && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                     <h2 className="text-lg font-semibold text-white">Leadership Team</h2>
                     <button type="button" onClick={() => setTeam([...team, { name: "New Name", role: "Role", linkedin: "", photo: "" }])} className="text-sm text-primary flex items-center gap-1">
                        <Plus size={16} /> Add Member
                     </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {team.map((member, i) => (
                       <div key={i} className="bg-black/20 p-4 rounded-xl border border-white/10 flex flex-col gap-2 relative group">
                          <button
                            type="button"
                            onClick={() => setTeam(team.filter((_, idx) => idx !== i))}
                            className="absolute top-4 right-4 text-red-500 opacity-0 group-hover:opacity-100 hover:bg-red-500/20 p-1.5 rounded-lg transition-opacity"
                          >
                             <Trash2 size={16} />
                          </button>
                          <input
                            value={member.name}
                            onChange={(e) => { const n=[...team]; n[i].name=e.target.value; setTeam(n); }}
                            className="bg-transparent text-white font-bold text-lg border-b border-white/10 w-[85%] pb-1 focus:outline-none focus:border-primary"
                            placeholder="Name"
                          />
                          <input
                            value={member.role}
                            onChange={(e) => { const n=[...team]; n[i].role=e.target.value; setTeam(n); }}
                            className="bg-transparent text-sm text-primary font-medium w-full focus:outline-none mt-1"
                            placeholder="Role / Title"
                          />
                          <input
                            value={member.linkedin}
                            onChange={(e) => { const n=[...team]; n[i].linkedin=e.target.value; setTeam(n); }}
                            className="bg-transparent text-white/50 text-xs w-full focus:outline-none mt-1"
                            placeholder="LinkedIn URL"
                          />
                       </div>
                     ))}
                  </div>
                </div>
             )}

             {activeTab === "milestones" && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                     <h2 className="text-lg font-semibold text-white">Company History</h2>
                     <button type="button" onClick={() => setMilestones([...milestones, { year: "YYYY", title: "Milestone", desc: "" }])} className="text-sm text-emerald-500 flex items-center gap-1">
                        <Plus size={16} /> Add Year
                     </button>
                  </div>
                  <div className="space-y-4">
                     {milestones.map((ms, i) => (
                       <div key={i} className="flex gap-4 items-center bg-black/20 border border-white/10 p-3 rounded-xl group">
                          <input 
                            type="text" 
                            value={ms.year} 
                            onChange={(e) => { const arr = [...milestones]; arr[i].year = e.target.value; setMilestones(arr); }}
                            className="w-16 h-12 text-center bg-black border border-white/10 rounded-lg text-emerald-500 font-mono font-bold focus:outline-none" 
                          />
                          <div className="flex-1 space-y-1">
                             <input 
                               type="text" 
                               value={ms.title} 
                               onChange={(e) => { const arr = [...milestones]; arr[i].title = e.target.value; setMilestones(arr); }}
                               className="w-full bg-transparent text-white font-semibold focus:outline-none"
                             />
                             <input 
                               type="text" 
                               value={ms.desc} 
                               onChange={(e) => { const arr = [...milestones]; arr[i].desc = e.target.value; setMilestones(arr); }}
                               className="w-full bg-transparent text-sm text-muted-foreground focus:outline-none"
                             />
                          </div>
                          <button
                            type="button"
                            onClick={() => setMilestones(milestones.filter((_, idx) => idx !== i))}
                            className="text-red-400 opacity-0 group-hover:opacity-100 p-2 hover:bg-red-400/10 rounded-lg"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                       </div>
                     ))}
                  </div>
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
