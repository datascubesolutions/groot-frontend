"use client";

import { HandThumbUpIcon, MagnifyingGlassIcon, MegaphoneIcon } from "@heroicons/react/24/outline";
import { Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function AdminCareersPage() {
  const [activeTab, setActiveTab] = useState("hero");
  const [isSaving, setIsSaving] = useState(false);
  const [isDynamic, setIsDynamic] = useState(false);

  // Data State
  const [hero, setHero] = useState({
    badge: "JOIN GROOT",
    title: "Build the Future of Data",
    subtitle: "We're always looking for brilliant data engineers, AI architects, and domain experts.",
  });

  const [roles, setRoles] = useState([
    { title: "Senior Data Engineer", department: "Engineering", location: "Remote US", status: "Open" },
    { title: "Power BI Architect", department: "Business Intelligence", location: "Hybrid", status: "Open" },
  ]);

  const [perks, setPerks] = useState([
    { name: "Fully Remote Work", desc: "Work from anywhere in the US." },
    { name: "Continuous Learning", desc: "Paid Microsoft certifications." },
  ]);

  const tabs = [
    { id: "hero", name: "Recruitment Hero", icon: MegaphoneIcon },
    { id: "roles", name: "Open Positions", icon: MagnifyingGlassIcon },
    { id: "perks", name: "Benefits & Perks", icon: HandThumbUpIcon },
  ];

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      toast.success("Careers page content updated!");
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Careers Page</h1>
          <p className="text-muted-foreground mt-1 text-sm">Manage job postings and company benefits.</p>
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

             {activeTab === "roles" && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                     <h2 className="text-lg font-semibold text-white">Job Postings</h2>
                     <button type="button" onClick={() => setRoles([...roles, { title: "New Job", department: "Dept", location: "Location", status: "Open" }])} className="text-sm text-primary flex items-center gap-1">
                        <Plus size={16} /> Add Role
                     </button>
                  </div>
                  <div className="space-y-4">
                     {roles.map((role, i) => (
                       <div key={i} className="flex gap-4 items-center bg-black/20 border border-white/10 p-4 rounded-xl group relative">
                          <button
                            type="button"
                            onClick={() => setRoles(roles.filter((_, idx) => idx !== i))}
                            className="absolute right-4 text-red-500 opacity-0 group-hover:opacity-100 hover:bg-red-500/20 p-1.5 rounded-lg transition-opacity"
                          >
                             <Trash2 size={16} />
                          </button>
                          <div className="flex-1 space-y-2 w-[85%]">
                             <input
                               value={role.title}
                               onChange={(e) => { const n=[...roles]; n[i].title=e.target.value; setRoles(n); }}
                               className="bg-transparent text-white font-bold text-lg border-b border-white/10 w-full pb-1 focus:outline-none focus:border-primary"
                               placeholder="Job Title"
                             />
                             <div className="flex gap-3">
                               <input
                                 value={role.department}
                                 onChange={(e) => { const n=[...roles]; n[i].department=e.target.value; setRoles(n); }}
                                 className="bg-transparent text-sm text-gray-400 w-1/3 focus:outline-none"
                                 placeholder="Department"
                               />
                               <span className="text-white/20">|</span>
                               <input
                                 value={role.location}
                                 onChange={(e) => { const n=[...roles]; n[i].location=e.target.value; setRoles(n); }}
                                 className="bg-transparent text-sm text-gray-400 w-1/3 focus:outline-none"
                                 placeholder="Location"
                               />
                             </div>
                          </div>
                          <div className="px-3 py-1 border border-primary/30 rounded-lg text-primary text-xs font-bold uppercase tracking-widest bg-primary/10">
                             {role.status}
                          </div>
                       </div>
                     ))}
                  </div>
                </div>
             )}

             {activeTab === "perks" && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                     <h2 className="text-lg font-semibold text-white">Benefits & Perks</h2>
                     <button type="button" onClick={() => setPerks([...perks, { name: "New Perk", desc: "" }])} className="text-sm text-primary flex items-center gap-1">
                        <Plus size={16} /> Add Perk
                     </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {perks.map((perk, i) => (
                       <div key={i} className="flex flex-col gap-2 bg-black/20 border border-white/10 p-3 rounded-xl group relative">
                          <button
                            type="button"
                            onClick={() => setPerks(perks.filter((_, idx) => idx !== i))}
                            className="absolute top-2 right-2 text-red-500 opacity-0 group-hover:opacity-100 p-1 rounded-lg"
                          >
                             <Trash2 size={14} />
                          </button>
                          <input 
                            type="text" 
                            value={perk.name} 
                            onChange={(e) => { const arr = [...perks]; arr[i].name = e.target.value; setPerks(arr); }}
                            className="w-[90%] bg-transparent text-white font-semibold focus:outline-none"
                            placeholder="Benefit Name"
                          />
                          <input 
                            type="text" 
                            value={perk.desc} 
                            onChange={(e) => { const arr = [...perks]; arr[i].desc = e.target.value; setPerks(arr); }}
                            className="w-[90%] bg-transparent text-sm text-muted-foreground focus:outline-none"
                            placeholder="Details"
                          />
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
