// @ts-nocheck
"use client";

import {
  BuildingOffice2Icon,
  DocumentChartBarIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
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
    subtitle:
      "Bringing deep sector knowledge to accelerate your data transformation journey.",
  });

  const [sectors, setSectors] = useState([
    {
      name: "Financial Services",
      description: "Risk modeling and regulatory reporting automation.",
    },
    {
      name: "Healthcare & Life Sciences",
      description: "Secure patient analytics and operational efficiency.",
    },
    {
      name: "Retail & E-commerce",
      description: "Supply chain intelligence and customer 360 views.",
    },
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
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Industries Page
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage industry verticals and specific use-cases.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-white/70">
            Use Dynamic Content
          </span>
          <button
            type="button"
            onClick={() => setIsDynamic(!isDynamic)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isDynamic ? "bg-primary" : "bg-white/10"}`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isDynamic ? "translate-x-6" : "translate-x-1"}`}
            />
          </button>
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

        <div className="relative flex-1 overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-xl lg:p-8">
          <form
            onSubmit={handleSave}
            className="relative z-10 w-full max-w-4xl space-y-8"
          >
            {activeTab === "hero" && (
              <div className="space-y-6 duration-500 animate-in fade-in slide-in-from-bottom-4">
                <div className="border-b border-border/40 pb-4">
                  <h2 className="text-lg font-semibold text-white">
                    Header Section
                  </h2>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="admin-industries-hero-badge"
                      className="text-sm font-medium text-white/80"
                    >
                      Badge Text
                    </label>
                    <input
                      id="admin-industries-hero-badge"
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
                      htmlFor="admin-industries-hero-title"
                      className="text-sm font-medium text-white/80"
                    >
                      Main Headline
                    </label>
                    <input
                      id="admin-industries-hero-title"
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
                      htmlFor="admin-industries-hero-subtitle"
                      className="text-sm font-medium text-white/80"
                    >
                      Subtitle Description
                    </label>
                    <textarea
                      id="admin-industries-hero-subtitle"
                      rows={2}
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

            {activeTab === "sectors" && (
              <div className="space-y-6 duration-500 animate-in fade-in slide-in-from-bottom-4">
                <div className="flex items-center justify-between border-b border-border/40 pb-4">
                  <h2 className="text-lg font-semibold text-white">
                    Industry Verticals
                  </h2>
                  <button
                    type="button"
                    onClick={() =>
                      setSectors([
                        ...sectors,
                        {
                          name: "New Industry",
                          description: "Details and value prop.",
                        },
                      ])
                    }
                    className="flex items-center gap-2 rounded-lg bg-primary/20 px-3 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary/30"
                  >
                    <Plus className="h-4 w-4" /> Add Industry
                  </button>
                </div>
                <div className="space-y-4">
                  {sectors.map((sector, i) => (
                    <div
                      key={i}
                      className="group relative flex flex-col gap-3 rounded-xl border border-white/10 bg-black/20 p-4"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setSectors(sectors.filter((_, idx) => idx !== i))
                        }
                        className="absolute -top-3 right-2 rounded-lg border border-white/10 bg-black p-1.5 text-red-500 opacity-0 transition-opacity hover:bg-red-500/20 group-hover:opacity-100"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                      <input
                        type="text"
                        value={sector.name}
                        onChange={(e) => {
                          const newSectors = [...sectors];
                          newSectors[i].name = e.target.value;
                          setSectors(newSectors);
                        }}
                        className="w-full border-b border-white/10 bg-transparent pb-1 text-lg font-semibold text-white focus:border-primary focus:outline-none"
                      />
                      <textarea
                        rows={2}
                        value={sector.description}
                        onChange={(e) => {
                          const newSectors = [...sectors];
                          newSectors[i].description = e.target.value;
                          setSectors(newSectors);
                        }}
                        className="w-full resize-none border-none bg-transparent pt-2 text-sm text-white/70 focus:outline-none"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "cases" && (
              <div className="rounded-xl border-2 border-dashed border-white/10 py-8 text-center">
                <p className="text-sm font-medium text-muted-foreground">
                  Use Case / Case Study linker component coming soon.
                </p>
              </div>
            )}

            <div className="mt-6 flex justify-end border-t border-white/10 pt-6">
              <button
                type="submit"
                disabled={isSaving}
                className="rounded-xl bg-white px-6 py-2.5 text-sm font-bold text-black transition-all hover:bg-gray-200"
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
