// @ts-nocheck
"use client";

import {
  CloudIcon,
  ServerStackIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
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
    {
      name: "Fabric Migration",
      tech: "Microsoft Fabric, Synapse",
      desc: "End-to-end cloud migration strategy.",
    },
    {
      name: "Power BI Governance",
      tech: "Power BI Premium",
      desc: "Setting up secure, scaleable PBI tenants.",
    },
  ]);

  const tabs = [
    { id: "hero", name: "Microsoft Hero", icon: CloudIcon },
    { id: "solutions", name: "Tech Solutions", icon: ServerStackIcon },
    {
      id: "certifications",
      name: "Microsoft Accolades",
      icon: ShieldCheckIcon,
    },
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
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Microsoft Tech Page
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage Microsoft-specific service offerings and stack info.
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
                      htmlFor="admin-microsoft-hero-badge"
                      className="text-sm font-medium text-white/80"
                    >
                      Badge Text
                    </label>
                    <input
                      id="admin-microsoft-hero-badge"
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
                      htmlFor="admin-microsoft-hero-title"
                      className="text-sm font-medium text-white/80"
                    >
                      Main Headline
                    </label>
                    <input
                      id="admin-microsoft-hero-title"
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
                      htmlFor="admin-microsoft-hero-subtitle"
                      className="text-sm font-medium text-white/80"
                    >
                      Subtitle Description
                    </label>
                    <textarea
                      id="admin-microsoft-hero-subtitle"
                      rows={2}
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

            {activeTab === "solutions" && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <h2 className="text-lg font-semibold text-white">
                    Cloud & Data Solutions
                  </h2>
                  <button
                    type="button"
                    onClick={() =>
                      setSolutions([
                        ...solutions,
                        { name: "New Solution", tech: "Tools", desc: "" },
                      ])
                    }
                    className="flex items-center gap-1 text-sm text-primary"
                  >
                    <Plus size={16} /> Add Stack
                  </button>
                </div>
                <div className="space-y-4">
                  {solutions.map((sol, i) => (
                    <div
                      key={i}
                      className="group relative flex flex-col gap-2 rounded-xl border border-white/10 bg-black/20 p-4"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setSolutions(solutions.filter((_, idx) => idx !== i))
                        }
                        className="absolute right-4 top-4 rounded-lg p-1.5 text-red-500 opacity-0 transition-opacity hover:bg-red-500/20 group-hover:opacity-100"
                      >
                        <Trash2 size={16} />
                      </button>
                      <input
                        value={sol.name}
                        onChange={(e) => {
                          const n = [...solutions];
                          n[i].name = e.target.value;
                          setSolutions(n);
                        }}
                        className="w-[90%] border-b border-white/10 bg-transparent pb-1 text-lg font-bold text-white focus:border-primary focus:outline-none"
                      />
                      <input
                        value={sol.tech}
                        onChange={(e) => {
                          const n = [...solutions];
                          n[i].tech = e.target.value;
                          setSolutions(n);
                        }}
                        className="mt-1 w-[90%] bg-transparent font-mono text-sm text-primary focus:outline-none"
                      />
                      <textarea
                        value={sol.desc}
                        onChange={(e) => {
                          const n = [...solutions];
                          n[i].desc = e.target.value;
                          setSolutions(n);
                        }}
                        className="mt-2 resize-none bg-transparent text-sm text-white/70 focus:outline-none"
                        rows={2}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "certifications" && (
              <div className="rounded-xl border-2 border-dashed border-white/10 py-8 text-center text-muted-foreground">
                Microsoft Partner Badges Upload coming soon.
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
