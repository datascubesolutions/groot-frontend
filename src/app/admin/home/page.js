"use client";

import { BriefcaseIcon, DocumentTextIcon, HomeIcon, ShieldExclamationIcon, UserGroupIcon, VideoCameraIcon, ViewColumnsIcon } from "@heroicons/react/24/outline";
import { GripVertical, Image as ImageIcon, Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { homepageService } from "@/services/homepageService";

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
    subtitle: "No rip-and-replace. We leverage your existing Microsoft investment and build alongside you.",
    primaryButtonText: "Get Your Data Readiness Score",
    primaryButtonLink: "/assessment"
  });

  const [videoScroll, setVideoScroll] = useState({
    backgroundVideoUrl: "/video/homepage-hero.mp4",
    scrollingItems: [
      "Data Analytics",
      "Artificial Intelligence",
      "Machine Learning",
      "Cloud Engineering",
    ]
  });

  const [clientLogos, setClientLogos] = useState({
    sectionTitle: "Trusted By Industry Leaders",
    logos: [] // We'll represent logos abstractly
  });

  const [services, setServices] = useState({
    sectionBadge: "",
    sectionTitle: "Our Services",
    items: [
      { title: "FABRIC-READY FOUNDATION", description: "We deploy your modern data platform — or fix what's broken." },
      { title: "DECISION INTELLIGENCE ENGINE", description: "We build dashboards your leadership actually trusts." },
      { title: "PRODUCTION-GRADE AI FOUNDRY", description: "We architect AI on governed data so pilots actually ship." }
    ]
  });

  const [processTimeline, setProcessTimeline] = useState({
    steps: [
      { num: "01", title: "Discover & Assess", description: "We learn your world first." },
      { num: "02", title: "Build Foundation", description: "Governed from day one." },
      { num: "03", title: "Enable & Scale", description: "Insight that drives decisions." },
      { num: "04", title: "Protect Your Investment", description: "Built to last." }
    ]
  });

  const [painPoints, setPainPoints] = useState({
    sectionHeading: "Sound familiar?"
  });

  const [dataReadiness, setDataReadiness] = useState({
    heading: "Not sure where to start?",
    buttonText: "Data Readiness Score"
  });

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      setIsLoading(true);
      const content = await homepageService.getHomepage();
      if (content) {
        setIsDynamic(content.isDynamic || false);
        setHero(content.hero || hero);
        setVideoScroll(content.videoScroll || videoScroll);
        // Fallback checks for optional structure
        setClientLogos(content.clientLogos || clientLogos);
        setServices(content.services || services);
        setProcessTimeline(content.processTimeline || processTimeline);
        setPainPoints(content.painPoints || painPoints);
        setDataReadiness(content.dataReadiness || dataReadiness);
      }
    } catch (error) {
      toast.error("Failed to load homepage content");
    } finally {
      setIsLoading(false);
    }
  };

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
      dataReadiness
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
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Home Page Content</h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Manage the dynamic content displayed on the public home page.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-white/70 font-medium">Use Dynamic Content</span>
          <button
            type="button"
            onClick={() => setIsDynamic(!isDynamic)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isDynamic ? "bg-primary" : "bg-white/10"
              }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isDynamic ? "translate-x-6" : "translate-x-1"
                }`}
            />
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Vertical Tabs Sidebar */}
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

        {/* Content Area */}
        <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-2xl p-6 lg:p-8 relative overflow-hidden backdrop-blur-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -z-10 rounded-full" />

          <form onSubmit={handleSave} className="relative z-10 w-full max-w-4xl space-y-8">

            {/* Hero Section Tab */}
            {activeTab === "hero" && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="border-b border-border/40 pb-4">
                  <h2 className="text-lg font-semibold text-white">Hero Section</h2>
                  <p className="text-sm text-muted-foreground">The main banner at the top of the home page.</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Badge Text</label>
                    <input
                      type="text"
                      value={hero.badgeText}
                      onChange={(e) => setHero({ ...hero, badgeText: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-mono text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Headline (Line 1)</label>
                    <input
                      type="text"
                      value={hero.headlineLine1}
                      onChange={(e) => setHero({ ...hero, headlineLine1: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Headline Highlight</label>
                    <input
                      type="text"
                      value={hero.headlineHighlight}
                      onChange={(e) => setHero({ ...hero, headlineHighlight: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Subtitle / Description</label>
                    <textarea
                      rows={3}
                      value={hero.subtitle}
                      onChange={(e) => setHero({ ...hero, subtitle: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-y"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80">Primary Button Text</label>
                      <input
                        type="text"
                        value={hero.primaryButtonText}
                        onChange={(e) => setHero({ ...hero, primaryButtonText: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80">Primary Button Link</label>
                      <input
                        type="text"
                        value={hero.primaryButtonLink}
                        onChange={(e) => setHero({ ...hero, primaryButtonLink: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Video Scroll Section Tab */}
            {activeTab === "video_scroll" && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="border-b border-border/40 pb-4">
                  <h2 className="text-lg font-semibold text-white">Video Scroll Section</h2>
                  <p className="text-sm text-muted-foreground">Background video and scrolling text overlays.</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Background Video URL</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={videoScroll.backgroundVideoUrl}
                        onChange={(e) => setVideoScroll({ ...videoScroll, backgroundVideoUrl: e.target.value })}
                        className="flex-1 bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                      />
                      <button type="button" className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-colors flex items-center gap-2">
                        <ImageIcon className="w-4 h-4" />
                        Browse
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4 mt-6">
                    <label className="text-sm font-medium text-white/80 flex justify-between items-center">
                      Scrolling Text Items
                      <button
                        type="button"
                        className="text-xs text-primary hover:text-primary/80 flex items-center gap-1"
                        onClick={() => setVideoScroll({ ...videoScroll, scrollingItems: [...videoScroll.scrollingItems, "New Item"] })}
                      >
                        <Plus className="w-3 h-3" /> Add Item
                      </button>
                    </label>
                    {videoScroll.scrollingItems.map((item, i) => (
                      <div key={i} className="flex gap-3 items-center group bg-white/5 border border-white/5 rounded-xl p-3">
                        <GripVertical className="w-5 h-5 text-white/20 cursor-grab" />
                        <input
                          type="text"
                          value={item}
                          onChange={(e) => {
                            const newItems = [...videoScroll.scrollingItems];
                            newItems[i] = e.target.value;
                            setVideoScroll({ ...videoScroll, scrollingItems: newItems });
                          }}
                          className="flex-1 bg-transparent border-none text-white focus:outline-none text-sm"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const newItems = videoScroll.scrollingItems.filter((_, idx) => idx !== i);
                            setVideoScroll({ ...videoScroll, scrollingItems: newItems });
                          }}
                          className="text-red-400 opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-red-400/10 rounded-lg"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Client Logos Section Tab */}
            {activeTab === "logos" && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="border-b border-border/40 pb-4">
                  <h2 className="text-lg font-semibold text-white">Client Logos</h2>
                  <p className="text-sm text-muted-foreground">Manage the infinite scrolling logos of trusted clients.</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Section Title (Optional)</label>
                    <input
                      type="text"
                      value={clientLogos.sectionTitle}
                      onChange={(e) => setClientLogos({ ...clientLogos, sectionTitle: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                    />
                  </div>

                  <div className="space-y-2 mt-6">
                    <label className="text-sm font-medium text-white/80">Add Logo URL</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        id="new-logo-url"
                        placeholder="e.g. /images/logo1.png or https://..."
                        className="flex-1 bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-mono text-sm"
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            if (e.target.value) {
                              setClientLogos({ ...clientLogos, logos: [...(clientLogos.logos || []), e.target.value] });
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
                            setClientLogos({ ...clientLogos, logos: [...(clientLogos.logos || []), input.value] });
                            input.value = "";
                          }
                        }}
                        className="px-4 py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-xl font-medium transition-colors"
                      >
                        Add
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
                    {(clientLogos.logos || []).map((logoUrl, i) => (
                      <div key={i} className="relative aspect-video bg-white/5 border border-white/10 rounded-xl flex items-center justify-center group overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={logoUrl} alt={`Logo ${i}`} className="w-full h-full object-contain p-4" />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                          <button
                            type="button"
                            onClick={() => {
                              const newLogos = [...clientLogos.logos];
                              newLogos.splice(i, 1);
                              setClientLogos({ ...clientLogos, logos: newLogos });
                            }}
                            className="p-2 bg-red-500/20 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
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
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="border-b border-border/40 pb-4">
                  <h2 className="text-lg font-semibold text-white">Services Section</h2>
                  <p className="text-sm text-muted-foreground">Highlight key offerings with interactive cards.</p>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80">Section Badge</label>
                      <input
                        type="text"
                        value={services.sectionBadge || ""}
                        onChange={(e) => setServices({ ...services, sectionBadge: e.target.value })}
                        placeholder="Optional badge"
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-mono text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80">Section Title</label>
                      <input
                        type="text"
                        value={services.sectionTitle}
                        onChange={(e) => setServices({ ...services, sectionTitle: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-white font-medium">Service Cards</h3>
                    <button
                      type="button"
                      onClick={() => setServices({ ...services, items: [...services.items, { title: "New Service", description: "Desc" }] })}
                      className="px-3 py-1.5 bg-primary/20 text-primary hover:bg-primary/30 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                    >
                      <Plus className="w-4 h-4" /> Add Service
                    </button>
                  </div>

                  <div className="space-y-4">
                    {services.items.map((svc, i) => (
                      <div key={i} className="bg-black/20 border border-white/10 rounded-xl p-4 flex gap-4 items-start group relative">
                        <GripVertical className="w-5 h-5 text-white/20 cursor-grab mt-2 shrink-0" />
                        <div className="flex-1 space-y-3">
                          <input
                            type="text"
                            value={svc.title}
                            onChange={(e) => {
                              const newItems = [...services.items];
                              newItems[i].title = e.target.value;
                              setServices({ ...services, items: newItems });
                            }}
                            className="w-full bg-transparent border-b border-white/10 focus:border-primary pb-1 text-white font-medium focus:outline-none"
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
                            className="w-full bg-transparent border border-white/10 rounded-lg p-2 text-sm text-white/80 focus:border-primary focus:outline-none resize-none"
                            placeholder="Description"
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            const newItems = services.items.filter((_, idx) => idx !== i);
                            setServices({ ...services, items: newItems });
                          }}
                          className="text-red-400 opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-red-400/10 rounded-lg"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Process Timeline Section Tab */}
            {activeTab === "process" && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="border-b border-border/40 pb-4">
                  <h2 className="text-lg font-semibold text-white">Process Timeline</h2>
                  <p className="text-sm text-muted-foreground">Steps illustrating the engagement methodology.</p>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-white font-medium">Timeline Steps</h3>
                  <button
                    type="button"
                    onClick={() => setProcessTimeline({ ...processTimeline, steps: [...processTimeline.steps, { num: "XX", title: "New Step", description: "Desc" }] })}
                    className="px-3 py-1.5 bg-primary/20 text-primary hover:bg-primary/30 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" /> Add Step
                  </button>
                </div>
                <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                  {processTimeline.steps.map((step, i) => (
                    <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#0a0a0a] text-primary font-bold z-10 shrink-0">
                        {step.num}
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-white/10 bg-black/40 flex flex-col gap-2 relative">
                        <button
                          type="button"
                          onClick={() => {
                            const newSteps = processTimeline.steps.filter((_, idx) => idx !== i);
                            setProcessTimeline({ ...processTimeline, steps: newSteps });
                          }}
                          className="absolute -top-3 -right-3 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity p-1 bg-black/80 hover:bg-red-400/20 shadow-lg border border-white/10 rounded-full"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <input
                          type="text"
                          value={step.title}
                          onChange={(e) => {
                            const newSteps = [...processTimeline.steps];
                            newSteps[i].title = e.target.value;
                            setProcessTimeline({ ...processTimeline, steps: newSteps });
                          }}
                          className="bg-transparent border-none text-white font-medium focus:outline-none"
                        />
                        <textarea
                          rows="2"
                          value={step.description}
                          onChange={(e) => {
                            const newSteps = [...processTimeline.steps];
                            newSteps[i].description = e.target.value;
                            setProcessTimeline({ ...processTimeline, steps: newSteps });
                          }}
                          className="bg-transparent border border-white/5 rounded py-1 px-2 text-sm text-white/70 focus:outline-none focus:border-white/20 resize-none"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Pain Points Section Tab */}
            {activeTab === "pain_points" && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="border-b border-border/40 pb-4">
                  <h2 className="text-lg font-semibold text-white">Pain Points Section</h2>
                  <p className="text-sm text-muted-foreground">List common client problems and solutions.</p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Section Heading</label>
                    <input
                      type="text"
                      value={painPoints.sectionHeading}
                      onChange={(e) => setPainPoints({ ...painPoints, sectionHeading: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Data Readiness Section Tab */}
            {activeTab === "readiness" && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="border-b border-border/40 pb-4">
                  <h2 className="text-lg font-semibold text-white">Data Readiness Section</h2>
                  <p className="text-sm text-muted-foreground">Call to action area assessing data maturity.</p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Heading</label>
                    <input
                      type="text"
                      value={dataReadiness.heading}
                      onChange={(e) => setDataReadiness({ ...dataReadiness, heading: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Button Text</label>
                    <input
                      type="text"
                      value={dataReadiness.buttonText}
                      onChange={(e) => setDataReadiness({ ...dataReadiness, buttonText: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-6 mt-6 border-t border-white/10 flex justify-end">
              <button
                type="submit"
                disabled={isSaving}
                className="px-6 py-2.5 bg-white text-black font-bold text-sm rounded-xl hover:bg-gray-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed active:scale-[0.98]"
              >
                {isSaving ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
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
