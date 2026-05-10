// @ts-nocheck
"use client";

import {
  BriefcaseIcon,
  ViewColumnsIcon,
  QueueListIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
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
    subtitle:
      "We engineer scalable data infrastructures and AI solutions that drive real business outcomes.",
  });

  const [categories, setCategories] = useState([
    {
      title: "Data Platform Engineering",
      description:
        "Modernizing legacy warehouses to cloud-native data platforms.",
    },
    {
      title: "Decision Intelligence",
      description: "Powering real-time dashboards.",
    },
    { title: "AI & Machine Learning", description: "Deploying generative AI." },
  ]);

  const [methodology, setMethodology] = useState([
    {
      step: "01",
      name: "Assessment & Planning",
      desc: "Evaluating current architecture.",
    },
    {
      step: "02",
      name: "Foundation & Setup",
      desc: "Building the core data layer.",
    },
    {
      step: "03",
      name: "Deployment & Scaling",
      desc: "Releasing production models.",
    },
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
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Services Page
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage dynamic service offerings and methodologies.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-white/70">
            Content Source
          </span>
          <div className="flex rounded-lg border border-white/10 bg-[#0a0a0a] p-1">
            <button
              type="button"
              onClick={() => setIsDynamic(false)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                !isDynamic
                  ? "bg-white/10 text-white shadow-sm ring-1 ring-white/5"
                  : "text-white/50 hover:text-white"
              }`}
            >
              Static
            </button>
            <button
              type="button"
              onClick={() => setIsDynamic(true)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                isDynamic
                  ? "bg-primary text-black shadow-sm ring-1 ring-primary/20"
                  : "text-white/50 hover:text-white"
              }`}
            >
              Dynamic
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Navigation Sidebar */}
        <div className="shrink-0 lg:w-64">
          <nav className="scrollbar-hide flex flex-row gap-1 overflow-x-auto pb-2 lg:flex-col lg:pb-0">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 whitespace-nowrap rounded-xl px-4 py-3 text-sm font-medium transition-all lg:whitespace-normal ${
                    isActive
                      ? "border border-primary/20 bg-primary/10 text-primary shadow-[0_0_15px_rgba(34,197,94,0.1)]"
                      : "text-muted-foreground hover:bg-white/5 hover:text-white"
                  } `}
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

        {/* Content Panel */}
        <div className="relative flex-1 overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-xl lg:p-8">
          <form
            onSubmit={handleSave}
            className="relative z-10 w-full max-w-4xl space-y-8"
          >
            {/* HERO TAB */}
            {activeTab === "hero" && (
              <div className="space-y-6 duration-500 animate-in fade-in slide-in-from-bottom-4">
                <div className="border-b border-border/40 pb-4">
                  <h2 className="text-lg font-semibold text-white">
                    Hero Header
                  </h2>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="admin-services-hero-badge"
                      className="text-sm font-medium text-white/80"
                    >
                      Badge Text
                    </label>
                    <input
                      id="admin-services-hero-badge"
                      type="text"
                      value={hero.badgeText}
                      onChange={(e) =>
                        setHero({ ...hero, badgeText: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white focus:border-primary/50 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="admin-services-hero-headline"
                      className="text-sm font-medium text-white/80"
                    >
                      Main Headline
                    </label>
                    <input
                      id="admin-services-hero-headline"
                      type="text"
                      value={hero.headline}
                      onChange={(e) =>
                        setHero({ ...hero, headline: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white focus:border-primary/50 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="admin-services-hero-subtitle"
                      className="text-sm font-medium text-white/80"
                    >
                      Subtitle Description
                    </label>
                    <textarea
                      id="admin-services-hero-subtitle"
                      rows={3}
                      value={hero.subtitle}
                      onChange={(e) =>
                        setHero({ ...hero, subtitle: e.target.value })
                      }
                      className="w-full resize-y rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white focus:border-primary/50 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* CATEGORIES TAB */}
            {activeTab === "categories" && (
              <div className="space-y-6 duration-500 animate-in fade-in slide-in-from-bottom-4">
                <div className="flex items-center justify-between border-b border-border/40 pb-4">
                  <h2 className="text-lg font-semibold text-white">
                    Service Offerings
                  </h2>
                  <button
                    type="button"
                    onClick={() =>
                      setCategories([
                        ...categories,
                        {
                          title: "New Core Service",
                          description: "Service details",
                        },
                      ])
                    }
                    className="flex items-center gap-2 rounded-lg bg-primary/20 px-3 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary/30"
                  >
                    <Plus className="h-4 w-4" /> Add Catalog Item
                  </button>
                </div>
                <div className="space-y-4">
                  {categories.map((cat, i) => (
                    <div
                      key={i}
                      className="group relative flex items-start gap-4 rounded-xl border border-white/10 bg-black/20 p-4"
                    >
                      <GripVertical className="mt-2 h-5 w-5 cursor-grab text-white/20" />
                      <div className="flex-1 space-y-3">
                        <input
                          type="text"
                          value={cat.title}
                          onChange={(e) => {
                            const newList = [...categories];
                            newList[i].title = e.target.value;
                            setCategories(newList);
                          }}
                          className="w-full border-b border-white/10 bg-transparent pb-1 font-medium text-white focus:border-primary focus:outline-none"
                        />
                        <textarea
                          rows={2}
                          value={cat.description}
                          onChange={(e) => {
                            const newList = [...categories];
                            newList[i].description = e.target.value;
                            setCategories(newList);
                          }}
                          className="w-full rounded-lg border border-white/10 bg-transparent p-2 text-sm text-white/80 focus:border-primary focus:outline-none"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setCategories(
                            categories.filter((_, idx) => idx !== i)
                          );
                        }}
                        className="rounded-lg p-2 text-red-400 opacity-0 transition-opacity hover:bg-red-400/10 group-hover:opacity-100"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* METHODOLOGY TAB */}
            {activeTab === "methodology" && (
              <div className="space-y-6 duration-500 animate-in fade-in slide-in-from-bottom-4">
                <div className="flex items-center justify-between border-b border-border/40 pb-4">
                  <h2 className="text-lg font-semibold text-white">
                    Delivery Methodology
                  </h2>
                  <button
                    type="button"
                    onClick={() =>
                      setMethodology([
                        ...methodology,
                        { step: "XX", name: "New Phase", desc: "" },
                      ])
                    }
                    className="flex items-center gap-2 rounded-lg bg-primary/20 px-3 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary/30"
                  >
                    <Plus className="h-4 w-4" /> Add Step
                  </button>
                </div>
                <div className="space-y-4">
                  {methodology.map((step, i) => (
                    <div
                      key={i}
                      className="group flex items-center gap-4 rounded-xl border border-white/10 bg-black/20 p-3"
                    >
                      <input
                        type="text"
                        value={step.step}
                        onChange={(e) => {
                          const arr = [...methodology];
                          arr[i].step = e.target.value;
                          setMethodology(arr);
                        }}
                        className="h-12 w-12 rounded-full border border-white/10 bg-black text-center font-bold text-primary focus:outline-none"
                      />
                      <div className="flex-1 space-y-2">
                        <input
                          type="text"
                          value={step.name}
                          onChange={(e) => {
                            const arr = [...methodology];
                            arr[i].name = e.target.value;
                            setMethodology(arr);
                          }}
                          className="w-full bg-transparent font-medium text-white focus:outline-none"
                        />
                        <input
                          type="text"
                          value={step.desc}
                          onChange={(e) => {
                            const arr = [...methodology];
                            arr[i].desc = e.target.value;
                            setMethodology(arr);
                          }}
                          className="w-full bg-transparent text-sm text-muted-foreground focus:outline-none"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          setMethodology(
                            methodology.filter((_, idx) => idx !== i)
                          )
                        }
                        className="rounded-lg border border-red-500/0 p-2 text-red-400 opacity-0 transition-opacity hover:bg-red-400/10 group-hover:opacity-100"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CERTIFICATION TAB */}
            {activeTab === "certification" && (
              <div className="rounded-xl border-2 border-dashed border-white/10 py-8 text-center">
                <p className="text-sm font-medium text-muted-foreground">
                  Partner Badge & Certification settings coming soon.
                </p>
              </div>
            )}

            <div className="mt-6 flex justify-end border-t border-white/10 pt-6">
              <button
                type="submit"
                disabled={isSaving}
                className="flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-2.5 text-sm font-bold text-black shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all hover:bg-gray-200 disabled:opacity-70"
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
