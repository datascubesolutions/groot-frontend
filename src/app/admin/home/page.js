// @ts-nocheck
"use client";

import { homepageService } from "@/services/homepageService";
import {
  BriefcaseIcon,
  DocumentTextIcon,
  HomeIcon,
  ShieldExclamationIcon,
  UserGroupIcon,
  VideoCameraIcon,
  ViewColumnsIcon,
} from "@heroicons/react/24/outline";
import { AdminSkeleton } from "@/components/admin/AdminSkeleton";
import { GripVertical, Image as ImageIcon, Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function AdminHomePage() {
  const [activeTab, setActiveTab] = useState("hero");
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isDynamic, setIsDynamic] = useState(false);

  // Data State
  const [hero, setHero] = useState({
    badgeText: "MICROSOFT FABRIC & AI FOUNDRY SPECIALISTS",
    headlineLine1: "Your data wasn't built for",
    headlineHighlight: "what's coming.",
    subtitle:
      "No rip-and-replace. We leverage your existing Microsoft investment and build alongside you.",
    primaryButtonText: "Get Your Data Readiness Score",
    primaryButtonLink: "/assessment",
  });

  const [videoScroll, setVideoScroll] = useState({
    backgroundVideoUrl: "/video/homepage-hero.mp4",
    scrollingItems: [
      "Data Analytics",
      "Artificial Intelligence",
      "Machine Learning",
      "Cloud Engineering",
    ],
  });

  const [clientLogos, setClientLogos] = useState({
    sectionTitle: "Trusted By Industry Leaders",
    logos: [], // We'll represent logos abstractly
  });

  const [services, setServices] = useState({
    sectionBadge: "",
    sectionTitle: "Our Services",
    items: [
      {
        title: "FABRIC-READY FOUNDATION",
        description:
          "We deploy your modern data platform — or fix what's broken.",
      },
      {
        title: "DECISION INTELLIGENCE ENGINE",
        description: "We build dashboards your leadership actually trusts.",
      },
      {
        title: "PRODUCTION-GRADE AI FOUNDRY",
        description:
          "We architect AI on governed data so pilots actually ship.",
      },
      {
        title: "COPILOT DEPLOYMENT & AGENTS",
        description:
          "We deploy Copilot for adoption, not shelfware — with custom agents that work.",
      },
    ],
  });

  const [processTimeline, setProcessTimeline] = useState({
    steps: [
      {
        num: "01",
        title: "Discover & Assess",
        description: "We learn your world first.",
      },
      {
        num: "02",
        title: "Build Foundation",
        description: "Governed from day one.",
      },
      {
        num: "03",
        title: "Enable & Scale",
        description: "Insight that drives decisions.",
      },
      {
        num: "04",
        title: "Protect Your Investment",
        description: "Built to last.",
      },
    ],
  });

  const [painPoints, setPainPoints] = useState({
    sectionHeading: "Sound familiar?",
  });

  const [dataReadiness, setDataReadiness] = useState({
    heading: "Not sure where to start?",
    buttonText: "Data Readiness Score",
  });

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setIsLoading(true);
        const content = await homepageService.getHomepage();
        if (cancelled || !content) return;
        setIsDynamic(content.isDynamic || false);
        setHero((prev) => content.hero || prev);
        setVideoScroll((prev) => content.videoScroll || prev);
        setClientLogos((prev) => content.clientLogos || prev);
        setServices((prev) => content.services || prev);
        setProcessTimeline((prev) => content.processTimeline || prev);
        setPainPoints((prev) => content.painPoints || prev);
        setDataReadiness((prev) => content.dataReadiness || prev);
      } catch {
        toast.error("Failed to load homepage content");
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // Tabs Configuration
  const tabs = [
    { id: "hero", name: "Hero Section", icon: HomeIcon },
    { id: "video_scroll", name: "Video Scroll", icon: VideoCameraIcon },
    { id: "logos", name: "Client Logos", icon: UserGroupIcon },
    { id: "services", name: "Services", icon: BriefcaseIcon },
    { id: "process", name: "Process Timeline", icon: ViewColumnsIcon },
    { id: "pain_points", name: "Pain Points", icon: ShieldExclamationIcon },
    { id: "readiness", name: "Data Readiness", icon: DocumentTextIcon },
  ];

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);

    const payload = {
      isDynamic,
      hero,
      videoScroll,
      clientLogos,
      services,
      processTimeline,
      painPoints,
      dataReadiness,
    };

    try {
      await homepageService.updateHomepage(payload);
      toast.success("Changes saved successfully!");
    } catch (error) {
      toast.error(error.message || "Failed to save changes");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return <AdminSkeleton type="builder" />;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Home Page Content
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage the dynamic content displayed on the public home page.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-white/70">
            Use Dynamic Content
          </span>
          <button
            type="button"
            onClick={() => setIsDynamic(!isDynamic)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              isDynamic ? "bg-primary" : "bg-white/10"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                isDynamic ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Vertical Tabs Sidebar */}
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

        {/* Content Area */}
        <div className="relative flex-1 overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-xl lg:p-8">
          <div className="absolute right-0 top-0 -z-10 h-64 w-64 rounded-full bg-primary/5 blur-[100px]" />

          <form
            onSubmit={handleSave}
            className="relative z-10 w-full max-w-4xl space-y-8"
          >
            {/* Hero Section Tab */}
            {activeTab === "hero" && (
              <div className="space-y-6 duration-500 animate-in fade-in slide-in-from-bottom-4">
                <div className="border-b border-border/40 pb-4">
                  <h2 className="text-lg font-semibold text-white">
                    Hero Section
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    The main banner at the top of the home page.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="admin-home-hero-badge"
                      className="text-sm font-medium text-white/80"
                    >
                      Badge Text
                    </label>
                    <input
                      id="admin-home-hero-badge"
                      type="text"
                      value={hero.badgeText}
                      onChange={(e) =>
                        setHero({ ...hero, badgeText: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 font-mono text-sm text-white transition-all placeholder:text-white/20 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="admin-home-hero-headline-1"
                      className="text-sm font-medium text-white/80"
                    >
                      Headline (Line 1)
                    </label>
                    <input
                      id="admin-home-hero-headline-1"
                      type="text"
                      value={hero.headlineLine1}
                      onChange={(e) =>
                        setHero({ ...hero, headlineLine1: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white transition-all placeholder:text-white/20 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="admin-home-hero-headline-highlight"
                      className="text-sm font-medium text-white/80"
                    >
                      Headline Highlight
                    </label>
                    <input
                      id="admin-home-hero-headline-highlight"
                      type="text"
                      value={hero.headlineHighlight}
                      onChange={(e) =>
                        setHero({ ...hero, headlineHighlight: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white transition-all placeholder:text-white/20 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="admin-home-hero-subtitle"
                      className="text-sm font-medium text-white/80"
                    >
                      Subtitle / Description
                    </label>
                    <textarea
                      id="admin-home-hero-subtitle"
                      rows={3}
                      value={hero.subtitle}
                      onChange={(e) =>
                        setHero({ ...hero, subtitle: e.target.value })
                      }
                      className="w-full resize-y rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white transition-all placeholder:text-white/20 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="admin-home-hero-primary-text"
                        className="text-sm font-medium text-white/80"
                      >
                        Primary Button Text
                      </label>
                      <input
                        id="admin-home-hero-primary-text"
                        type="text"
                        value={hero.primaryButtonText}
                        onChange={(e) =>
                          setHero({
                            ...hero,
                            primaryButtonText: e.target.value,
                          })
                        }
                        className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white transition-all placeholder:text-white/20 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="admin-home-hero-primary-link"
                        className="text-sm font-medium text-white/80"
                      >
                        Primary Button Link
                      </label>
                      <input
                        id="admin-home-hero-primary-link"
                        type="text"
                        value={hero.primaryButtonLink}
                        onChange={(e) =>
                          setHero({
                            ...hero,
                            primaryButtonLink: e.target.value,
                          })
                        }
                        className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white transition-all placeholder:text-white/20 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Video Scroll Section Tab */}
            {activeTab === "video_scroll" && (
              <div className="space-y-6 duration-500 animate-in fade-in slide-in-from-bottom-4">
                <div className="border-b border-border/40 pb-4">
                  <h2 className="text-lg font-semibold text-white">
                    Video Scroll Section
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Background video and scrolling text overlays.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="admin-home-video-bg-url"
                      className="text-sm font-medium text-white/80"
                    >
                      Background Video URL
                    </label>
                    <div className="flex gap-2">
                      <input
                        id="admin-home-video-bg-url"
                        type="text"
                        value={videoScroll.backgroundVideoUrl}
                        onChange={(e) =>
                          setVideoScroll({
                            ...videoScroll,
                            backgroundVideoUrl: e.target.value,
                          })
                        }
                        className="flex-1 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white transition-all placeholder:text-white/20 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                      <button
                        type="button"
                        className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white transition-colors hover:bg-white/10"
                      >
                        <ImageIcon className="h-4 w-4" />
                        Browse
                      </button>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-between text-sm font-medium text-white/80">
                      <span id="admin-home-scroll-items-heading">
                        Scrolling Text Items
                      </span>
                      <button
                        type="button"
                        className="flex items-center gap-1 text-xs text-primary hover:text-primary/80"
                        onClick={() =>
                          setVideoScroll({
                            ...videoScroll,
                            scrollingItems: [
                              ...videoScroll.scrollingItems,
                              "New Item",
                            ],
                          })
                        }
                      >
                        <Plus className="h-3 w-3" /> Add Item
                      </button>
                    </div>
                    {videoScroll.scrollingItems.map((item, i) => (
                      <div
                        key={i}
                        className="group flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-3"
                      >
                        <GripVertical className="h-5 w-5 cursor-grab text-white/20" />
                        <input
                          type="text"
                          aria-labelledby="admin-home-scroll-items-heading"
                          aria-label={`Scrolling text item ${i + 1}`}
                          value={item}
                          onChange={(e) => {
                            const newItems = [...videoScroll.scrollingItems];
                            newItems[i] = e.target.value;
                            setVideoScroll({
                              ...videoScroll,
                              scrollingItems: newItems,
                            });
                          }}
                          className="flex-1 border-none bg-transparent text-sm text-white focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const newItems = videoScroll.scrollingItems.filter(
                              (_, idx) => idx !== i
                            );
                            setVideoScroll({
                              ...videoScroll,
                              scrollingItems: newItems,
                            });
                          }}
                          className="rounded-lg p-2 text-red-400 opacity-0 transition-opacity hover:bg-red-400/10 group-hover:opacity-100"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Client Logos Section Tab */}
            {activeTab === "logos" && (
              <div className="space-y-6 duration-500 animate-in fade-in slide-in-from-bottom-4">
                <div className="border-b border-border/40 pb-4">
                  <h2 className="text-lg font-semibold text-white">
                    Client Logos
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Manage the infinite scrolling logos of trusted clients.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="admin-home-logos-section-title"
                      className="text-sm font-medium text-white/80"
                    >
                      Section Title (Optional)
                    </label>
                    <input
                      id="admin-home-logos-section-title"
                      type="text"
                      value={clientLogos.sectionTitle}
                      onChange={(e) =>
                        setClientLogos({
                          ...clientLogos,
                          sectionTitle: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white transition-all placeholder:text-white/20 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>

                  <div className="mt-6 space-y-2">
                    <label
                      htmlFor="new-logo-url"
                      className="text-sm font-medium text-white/80"
                    >
                      Add Logo URL
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        id="new-logo-url"
                        placeholder="e.g. /images/logo1.png or https://..."
                        className="flex-1 rounded-xl border border-white/10 bg-black/40 px-4 py-3 font-mono text-sm text-white transition-all placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            if (e.target.value) {
                              setClientLogos({
                                ...clientLogos,
                                logos: [
                                  ...(clientLogos.logos || []),
                                  e.target.value,
                                ],
                              });
                              e.target.value = "";
                            }
                          }
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const input = document.getElementById("new-logo-url");
                          if (input && input.value) {
                            setClientLogos({
                              ...clientLogos,
                              logos: [
                                ...(clientLogos.logos || []),
                                input.value,
                              ],
                            });
                            input.value = "";
                          }
                        }}
                        className="rounded-xl bg-primary/20 px-4 py-2 font-medium text-primary transition-colors hover:bg-primary/30"
                      >
                        Add
                      </button>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                    {(clientLogos.logos || []).map((logoUrl, i) => (
                      <div
                        key={i}
                        className="group relative flex aspect-video items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={logoUrl}
                          alt={`Logo ${i}`}
                          className="h-full w-full object-contain p-4"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                          <button
                            type="button"
                            onClick={() => {
                              const newLogos = [...clientLogos.logos];
                              newLogos.splice(i, 1);
                              setClientLogos({
                                ...clientLogos,
                                logos: newLogos,
                              });
                            }}
                            className="rounded-lg bg-red-500/20 p-2 text-red-500 transition-colors hover:bg-red-500 hover:text-white"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Services Section Tab */}
            {activeTab === "services" && (
              <div className="space-y-6 duration-500 animate-in fade-in slide-in-from-bottom-4">
                <div className="border-b border-border/40 pb-4">
                  <h2 className="text-lg font-semibold text-white">
                    Services Section
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Highlight key offerings with interactive cards.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="admin-home-services-badge"
                        className="text-sm font-medium text-white/80"
                      >
                        Section Badge
                      </label>
                      <input
                        id="admin-home-services-badge"
                        type="text"
                        value={services.sectionBadge || ""}
                        onChange={(e) =>
                          setServices({
                            ...services,
                            sectionBadge: e.target.value,
                          })
                        }
                        placeholder="Optional badge"
                        className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 font-mono text-sm text-white transition-all focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="admin-home-services-title"
                        className="text-sm font-medium text-white/80"
                      >
                        Section Title
                      </label>
                      <input
                        id="admin-home-services-title"
                        type="text"
                        value={services.sectionTitle}
                        onChange={(e) =>
                          setServices({
                            ...services,
                            sectionTitle: e.target.value,
                          })
                        }
                        className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white transition-all focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>

                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-medium text-white">Service Cards</h3>
                    <button
                      type="button"
                      onClick={() =>
                        setServices({
                          ...services,
                          items: [
                            ...services.items,
                            { title: "New Service", description: "Desc" },
                          ],
                        })
                      }
                      className="flex items-center gap-2 rounded-lg bg-primary/20 px-3 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary/30"
                    >
                      <Plus className="h-4 w-4" /> Add Service
                    </button>
                  </div>

                  <div className="space-y-4">
                    {services.items.map((svc, i) => (
                      <div
                        key={i}
                        className="group relative flex items-start gap-4 rounded-xl border border-white/10 bg-black/20 p-4"
                      >
                        <GripVertical className="mt-2 h-5 w-5 shrink-0 cursor-grab text-white/20" />
                        <div className="flex-1 space-y-3">
                          <input
                            type="text"
                            value={svc.title}
                            onChange={(e) => {
                              const newItems = [...services.items];
                              newItems[i].title = e.target.value;
                              setServices({ ...services, items: newItems });
                            }}
                            className="w-full border-b border-white/10 bg-transparent pb-1 font-medium text-white focus:border-primary focus:outline-none"
                            placeholder="Service Title"
                          />
                          <textarea
                            rows="2"
                            value={svc.description}
                            onChange={(e) => {
                              const newItems = [...services.items];
                              newItems[i].description = e.target.value;
                              setServices({ ...services, items: newItems });
                            }}
                            className="w-full resize-none rounded-lg border border-white/10 bg-transparent p-2 text-sm text-white/80 focus:border-primary focus:outline-none"
                            placeholder="Description"
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            const newItems = services.items.filter(
                              (_, idx) => idx !== i
                            );
                            setServices({ ...services, items: newItems });
                          }}
                          className="rounded-lg p-2 text-red-400 opacity-0 transition-opacity hover:bg-red-400/10 group-hover:opacity-100"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Process Timeline Section Tab */}
            {activeTab === "process" && (
              <div className="space-y-6 duration-500 animate-in fade-in slide-in-from-bottom-4">
                <div className="border-b border-border/40 pb-4">
                  <h2 className="text-lg font-semibold text-white">
                    Process Timeline
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Steps illustrating the engagement methodology.
                  </p>
                </div>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-medium text-white">Timeline Steps</h3>
                  <button
                    type="button"
                    onClick={() =>
                      setProcessTimeline({
                        ...processTimeline,
                        steps: [
                          ...processTimeline.steps,
                          { num: "XX", title: "New Step", description: "Desc" },
                        ],
                      })
                    }
                    className="flex items-center gap-2 rounded-lg bg-primary/20 px-3 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary/30"
                  >
                    <Plus className="h-4 w-4" /> Add Step
                  </button>
                </div>
                <div className="relative space-y-4 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent md:before:mx-auto md:before:translate-x-0">
                  {processTimeline.steps.map((step, i) => (
                    <div
                      key={i}
                      className="group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse"
                    >
                      <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-[#0a0a0a] font-bold text-primary">
                        {step.num}
                      </div>
                      <div className="relative flex w-[calc(100%-4rem)] flex-col gap-2 rounded-xl border border-white/10 bg-black/40 p-4 md:w-[calc(50%-2.5rem)]">
                        <button
                          type="button"
                          onClick={() => {
                            const newSteps = processTimeline.steps.filter(
                              (_, idx) => idx !== i
                            );
                            setProcessTimeline({
                              ...processTimeline,
                              steps: newSteps,
                            });
                          }}
                          className="absolute -right-3 -top-3 rounded-full border border-white/10 bg-black/80 p-1 text-red-400 opacity-0 shadow-lg transition-opacity hover:bg-red-400/20 group-hover:opacity-100"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                        <input
                          type="text"
                          value={step.title}
                          onChange={(e) => {
                            const newSteps = [...processTimeline.steps];
                            newSteps[i].title = e.target.value;
                            setProcessTimeline({
                              ...processTimeline,
                              steps: newSteps,
                            });
                          }}
                          className="border-none bg-transparent font-medium text-white focus:outline-none"
                        />
                        <textarea
                          rows="2"
                          value={step.description}
                          onChange={(e) => {
                            const newSteps = [...processTimeline.steps];
                            newSteps[i].description = e.target.value;
                            setProcessTimeline({
                              ...processTimeline,
                              steps: newSteps,
                            });
                          }}
                          className="resize-none rounded border border-white/5 bg-transparent px-2 py-1 text-sm text-white/70 focus:border-white/20 focus:outline-none"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Pain Points Section Tab */}
            {activeTab === "pain_points" && (
              <div className="space-y-6 duration-500 animate-in fade-in slide-in-from-bottom-4">
                <div className="border-b border-border/40 pb-4">
                  <h2 className="text-lg font-semibold text-white">
                    Pain Points Section
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    List common client problems and solutions.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="admin-home-pain-heading"
                      className="text-sm font-medium text-white/80"
                    >
                      Section Heading
                    </label>
                    <input
                      id="admin-home-pain-heading"
                      type="text"
                      value={painPoints.sectionHeading}
                      onChange={(e) =>
                        setPainPoints({
                          ...painPoints,
                          sectionHeading: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white transition-all focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Data Readiness Section Tab */}
            {activeTab === "readiness" && (
              <div className="space-y-6 duration-500 animate-in fade-in slide-in-from-bottom-4">
                <div className="border-b border-border/40 pb-4">
                  <h2 className="text-lg font-semibold text-white">
                    Data Readiness Section
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Call to action area assessing data maturity.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="admin-home-readiness-heading"
                      className="text-sm font-medium text-white/80"
                    >
                      Heading
                    </label>
                    <input
                      id="admin-home-readiness-heading"
                      type="text"
                      value={dataReadiness.heading}
                      onChange={(e) =>
                        setDataReadiness({
                          ...dataReadiness,
                          heading: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white transition-all focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="admin-home-readiness-button"
                      className="text-sm font-medium text-white/80"
                    >
                      Button Text
                    </label>
                    <input
                      id="admin-home-readiness-button"
                      type="text"
                      value={dataReadiness.buttonText}
                      onChange={(e) =>
                        setDataReadiness({
                          ...dataReadiness,
                          buttonText: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white transition-all focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="mt-6 flex justify-end border-t border-white/10 pt-6">
              <button
                type="submit"
                disabled={isSaving}
                className="flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-2.5 text-sm font-bold text-black shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 hover:bg-gray-200 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSaving ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-black/20 border-t-black" />
                    <span>Saving Changes...</span>
                  </>
                ) : (
                  <span>Save Changes</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
