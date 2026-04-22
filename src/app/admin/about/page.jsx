// @ts-nocheck
"use client";

import {
  IdentificationIcon,
  ViewColumnsIcon,
  FlagIcon,
} from "@heroicons/react/24/outline";
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
    subtitle:
      "A team of data platform engineers obsessed with shipping reliable infrastructure.",
  });

  const [team, setTeam] = useState([
    {
      name: "Alex Mercer",
      role: "Principal Data Engineer",
      linkedin: "linkedin.com/in/alex",
      photo: "/team/alex.jpg",
    },
    {
      name: "Sarah Chen",
      role: "AI Foundry Lead",
      linkedin: "linkedin.com/in/sarah",
      photo: "/team/sarah.jpg",
    },
  ]);

  const [milestones, setMilestones] = useState([
    {
      year: "2020",
      title: "Founded",
      desc: "Started as a dedicated data consultancy.",
    },
    {
      year: "2023",
      title: "Microsoft Partner",
      desc: "Achieved Data & AI designation.",
    },
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
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            About Page
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage team, history, and company messaging.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="shrink-0 lg:w-64">
          <nav className="scrollbar-hide flex flex-row gap-1 overflow-x-auto pb-2 lg:flex-col lg:pb-0">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${isActive ? "border border-primary/20 bg-primary/10 text-primary" : "text-muted-foreground hover:bg-white/5 hover:text-white"} `}
                >
                  <tab.icon
                    className={`h-5 w-5 ${isActive ? "text-primary" : "text-muted-foreground"}`}
                  />
                  {tab.name}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="relative flex-1 overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-xl">
          <form onSubmit={handleSave} className="relative z-10 space-y-8">
            {activeTab === "hero" && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="hero-badge"
                      className="text-sm font-medium text-white/80"
                    >
                      Badge Text
                    </label>
                    <input
                      id="hero-badge"
                      type="text"
                      value={hero.badge}
                      onChange={(e) =>
                        setHero({ ...hero, badge: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white focus:border-primary/50 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="hero-title"
                      className="text-sm font-medium text-white/80"
                    >
                      Main Headline
                    </label>
                    <input
                      id="hero-title"
                      type="text"
                      value={hero.title}
                      onChange={(e) =>
                        setHero({ ...hero, title: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white focus:border-primary/50 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="hero-subtitle"
                      className="text-sm font-medium text-white/80"
                    >
                      Mission Statement
                    </label>
                    <textarea
                      id="hero-subtitle"
                      rows={3}
                      value={hero.subtitle}
                      onChange={(e) =>
                        setHero({ ...hero, subtitle: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white focus:border-primary/50 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "team" && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <h2 className="text-lg font-semibold text-white">
                    Leadership Team
                  </h2>
                  <button
                    type="button"
                    onClick={() =>
                      setTeam([
                        ...team,
                        {
                          name: "New Name",
                          role: "Role",
                          linkedin: "",
                          photo: "",
                        },
                      ])
                    }
                    className="flex items-center gap-1 text-sm text-primary"
                  >
                    <Plus size={16} /> Add Member
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {team.map((member, i) => (
                    <div
                      key={i}
                      className="group relative flex flex-col gap-2 rounded-xl border border-white/10 bg-black/20 p-4"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setTeam(team.filter((_, idx) => idx !== i))
                        }
                        className="absolute right-4 top-4 rounded-lg p-1.5 text-red-500 opacity-0 transition-opacity hover:bg-red-500/20 group-hover:opacity-100"
                      >
                        <Trash2 size={16} />
                      </button>
                      <input
                        value={member.name}
                        onChange={(e) => {
                          const n = [...team];
                          n[i].name = e.target.value;
                          setTeam(n);
                        }}
                        className="w-[85%] border-b border-white/10 bg-transparent pb-1 text-lg font-bold text-white focus:border-primary focus:outline-none"
                        placeholder="Name"
                      />
                      <input
                        value={member.role}
                        onChange={(e) => {
                          const n = [...team];
                          n[i].role = e.target.value;
                          setTeam(n);
                        }}
                        className="mt-1 w-full bg-transparent text-sm font-medium text-primary focus:outline-none"
                        placeholder="Role / Title"
                      />
                      <input
                        value={member.linkedin}
                        onChange={(e) => {
                          const n = [...team];
                          n[i].linkedin = e.target.value;
                          setTeam(n);
                        }}
                        className="mt-1 w-full bg-transparent text-xs text-white/50 focus:outline-none"
                        placeholder="LinkedIn URL"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "milestones" && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <h2 className="text-lg font-semibold text-white">
                    Company History
                  </h2>
                  <button
                    type="button"
                    onClick={() =>
                      setMilestones([
                        ...milestones,
                        { year: "YYYY", title: "Milestone", desc: "" },
                      ])
                    }
                    className="flex items-center gap-1 text-sm text-emerald-500"
                  >
                    <Plus size={16} /> Add Year
                  </button>
                </div>
                <div className="space-y-4">
                  {milestones.map((ms, i) => (
                    <div
                      key={i}
                      className="group flex items-center gap-4 rounded-xl border border-white/10 bg-black/20 p-3"
                    >
                      <input
                        type="text"
                        value={ms.year}
                        onChange={(e) => {
                          const arr = [...milestones];
                          arr[i].year = e.target.value;
                          setMilestones(arr);
                        }}
                        className="h-12 w-16 rounded-lg border border-white/10 bg-black text-center font-mono font-bold text-emerald-500 focus:outline-none"
                      />
                      <div className="flex-1 space-y-1">
                        <input
                          type="text"
                          value={ms.title}
                          onChange={(e) => {
                            const arr = [...milestones];
                            arr[i].title = e.target.value;
                            setMilestones(arr);
                          }}
                          className="w-full bg-transparent font-semibold text-white focus:outline-none"
                        />
                        <input
                          type="text"
                          value={ms.desc}
                          onChange={(e) => {
                            const arr = [...milestones];
                            arr[i].desc = e.target.value;
                            setMilestones(arr);
                          }}
                          className="w-full bg-transparent text-sm text-muted-foreground focus:outline-none"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          setMilestones(
                            milestones.filter((_, idx) => idx !== i)
                          )
                        }
                        className="rounded-lg p-2 text-red-400 opacity-0 hover:bg-red-400/10 group-hover:opacity-100"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 flex justify-end border-t border-white/10 pt-6">
              <button
                type="submit"
                disabled={isSaving}
                className="rounded-xl bg-white px-6 py-2.5 text-sm font-bold text-black"
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
