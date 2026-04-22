// @ts-nocheck
"use client";

import {
  HandThumbUpIcon,
  MagnifyingGlassIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/outline";
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
    subtitle:
      "We're always looking for brilliant data engineers, AI architects, and domain experts.",
  });

  const [roles, setRoles] = useState([
    {
      title: "Senior Data Engineer",
      department: "Engineering",
      location: "Remote US",
      status: "Open",
    },
    {
      title: "Power BI Architect",
      department: "Business Intelligence",
      location: "Hybrid",
      status: "Open",
    },
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
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Careers Page
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage job postings and company benefits.
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
                      htmlFor="admin-careers-hero-badge"
                      className="text-sm font-medium text-white/80"
                    >
                      Badge Text
                    </label>
                    <input
                      id="admin-careers-hero-badge"
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
                      htmlFor="admin-careers-hero-title"
                      className="text-sm font-medium text-white/80"
                    >
                      Main Headline
                    </label>
                    <input
                      id="admin-careers-hero-title"
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
                      htmlFor="admin-careers-hero-subtitle"
                      className="text-sm font-medium text-white/80"
                    >
                      Subtitle Description
                    </label>
                    <textarea
                      id="admin-careers-hero-subtitle"
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

            {activeTab === "roles" && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <h2 className="text-lg font-semibold text-white">
                    Job Postings
                  </h2>
                  <button
                    type="button"
                    onClick={() =>
                      setRoles([
                        ...roles,
                        {
                          title: "New Job",
                          department: "Dept",
                          location: "Location",
                          status: "Open",
                        },
                      ])
                    }
                    className="flex items-center gap-1 text-sm text-primary"
                  >
                    <Plus size={16} /> Add Role
                  </button>
                </div>
                <div className="space-y-4">
                  {roles.map((role, i) => (
                    <div
                      key={i}
                      className="group relative flex items-center gap-4 rounded-xl border border-white/10 bg-black/20 p-4"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setRoles(roles.filter((_, idx) => idx !== i))
                        }
                        className="absolute right-4 rounded-lg p-1.5 text-red-500 opacity-0 transition-opacity hover:bg-red-500/20 group-hover:opacity-100"
                      >
                        <Trash2 size={16} />
                      </button>
                      <div className="w-[85%] flex-1 space-y-2">
                        <input
                          value={role.title}
                          onChange={(e) => {
                            const n = [...roles];
                            n[i].title = e.target.value;
                            setRoles(n);
                          }}
                          className="w-full border-b border-white/10 bg-transparent pb-1 text-lg font-bold text-white focus:border-primary focus:outline-none"
                          placeholder="Job Title"
                        />
                        <div className="flex gap-3">
                          <input
                            value={role.department}
                            onChange={(e) => {
                              const n = [...roles];
                              n[i].department = e.target.value;
                              setRoles(n);
                            }}
                            className="w-1/3 bg-transparent text-sm text-gray-400 focus:outline-none"
                            placeholder="Department"
                          />
                          <span className="text-white/20">|</span>
                          <input
                            value={role.location}
                            onChange={(e) => {
                              const n = [...roles];
                              n[i].location = e.target.value;
                              setRoles(n);
                            }}
                            className="w-1/3 bg-transparent text-sm text-gray-400 focus:outline-none"
                            placeholder="Location"
                          />
                        </div>
                      </div>
                      <div className="rounded-lg border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                        {role.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "perks" && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <h2 className="text-lg font-semibold text-white">
                    Benefits & Perks
                  </h2>
                  <button
                    type="button"
                    onClick={() =>
                      setPerks([...perks, { name: "New Perk", desc: "" }])
                    }
                    className="flex items-center gap-1 text-sm text-primary"
                  >
                    <Plus size={16} /> Add Perk
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {perks.map((perk, i) => (
                    <div
                      key={i}
                      className="group relative flex flex-col gap-2 rounded-xl border border-white/10 bg-black/20 p-3"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setPerks(perks.filter((_, idx) => idx !== i))
                        }
                        className="absolute right-2 top-2 rounded-lg p-1 text-red-500 opacity-0 group-hover:opacity-100"
                      >
                        <Trash2 size={14} />
                      </button>
                      <input
                        type="text"
                        value={perk.name}
                        onChange={(e) => {
                          const arr = [...perks];
                          arr[i].name = e.target.value;
                          setPerks(arr);
                        }}
                        className="w-[90%] bg-transparent font-semibold text-white focus:outline-none"
                        placeholder="Benefit Name"
                      />
                      <input
                        type="text"
                        value={perk.desc}
                        onChange={(e) => {
                          const arr = [...perks];
                          arr[i].desc = e.target.value;
                          setPerks(arr);
                        }}
                        className="w-[90%] bg-transparent text-sm text-muted-foreground focus:outline-none"
                        placeholder="Details"
                      />
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
