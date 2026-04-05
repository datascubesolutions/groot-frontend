"use client";

import { useEffect, useState } from "react";
import { AdminSkeleton } from "@/components/admin/AdminSkeleton";
import { Users, Activity, MousePointerClick, TrendingUp, Calendar, Zap, AlertCircle } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

const COLORS = ["#10b981", "#3b82f6", "#f59e0b", "#ef4444", "#8b5cf6"];

export default function AnalyticsDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [days, setDays] = useState(30);

  useEffect(() => {
    async function fetchAnalytics() {
      setLoading(true);
      try {
        const response = await fetch(`/api/admin/analytics/overview?days=${days}`);
        if (!response.ok) {
          throw new Error("Failed to fetch analytics data");
        }
        const result = await response.json();
        if (result.error) {
          throw new Error(result.error);
        }
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchAnalytics();
  }, [days]);

  if (error) {
    return (
      <div className="flex flex-col gap-4 p-8 border border-red-500/20 bg-red-500/5 rounded-2xl">
        <div className="flex items-center gap-3 text-red-500">
          <AlertCircle className="w-6 h-6" />
          <h2 className="text-lg font-medium tracking-tight">Configuration Error</h2>
        </div>
        <p className="text-sm text-foreground/80">{error}</p>
        <div className="text-xs border-t border-red-500/20 pt-4 mt-2 font-mono text-muted-foreground space-y-1">
          <p>1. Check if GA_PROPERTY_ID is replaced with your real ID in .env.local</p>
          <p>2. Check if groot-analytics-viewer@... is added as a Viewer in GA4 Property configuration.</p>
        </div>
      </div>
    );
  }

  const formatNumber = (num) => new Intl.NumberFormat("en-US").format(num || 0);
  const formatPercent = (num) => new Intl.NumberFormat("en-US", { style: "percent", maximumFractionDigits: 1 }).format(num || 0);

  return (
    <div className="space-y-8 pb-12 font-sans">
      {/* Header & Controls */}
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between pb-6 border-b border-border/50">
        <div className="space-y-1.5">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">Analytics Overview</h1>
          <p className="text-sm font-medium text-muted-foreground flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 fill-primary text-primary" /> Live platform telemetry
          </p>
        </div>
        
        <div className="flex items-center bg-muted/40 p-1 rounded-xl border border-border/60 backdrop-blur-sm">
          {[7, 30, 90, 365].map((d) => (
            <button
              key={d}
              onClick={() => setDays(d)}
              className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 ${
                days === d 
                  ? "bg-background text-foreground shadow-sm ring-1 ring-border border border-border/50" 
                  : "bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {d === 365 ? '1 Year' : `${d} Days`}
            </button>
          ))}
        </div>
      </div>

      {loading && !data ? (
        <AdminSkeleton type="analytics" />
      ) : (
        <>
          {/* Refined KPI Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Active Users", value: formatNumber(data?.kpis?.activeUsers), icon: Users, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
              { label: "Total Sessions", value: formatNumber(data?.kpis?.sessions), icon: Activity, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
              { label: "Engagement", value: formatPercent(data?.kpis?.engagementRate), icon: TrendingUp, color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/20" },
              { label: "Conversions", value: formatNumber(data?.kpis?.conversions), icon: MousePointerClick, color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20" }
            ].map((kpi, idx) => (
              <div key={idx} className="relative rounded-2xl border border-border/60 bg-card/50 backdrop-blur-xl p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-border hover:bg-card">
                <div className="flex items-center gap-4">
                  <div className={`p-2.5 rounded-xl border ${kpi.bg} ${kpi.border}`}>
                    <kpi.icon className={`w-5 h-5 ${kpi.color}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight leading-none mb-1">{kpi.value}</h3>
                    <p className="text-xs font-medium text-muted-foreground">{kpi.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Time Series Area Chart */}
          <div className="rounded-2xl border border-border/60 bg-card/50 backdrop-blur-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-8">
               <h3 className="text-base font-semibold tracking-tight text-foreground flex items-center gap-2">
                 Traffic Trends
               </h3>
               <div className="flex items-center gap-4 text-xs font-medium">
                  <div className="flex items-center gap-1.5 text-muted-foreground"><div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div> Users</div>
                  <div className="flex items-center gap-1.5 text-muted-foreground"><div className="w-2.5 h-2.5 rounded-full bg-blue-500/80"></div> Sessions</div>
               </div>
            </div>
            
            <div className="h-[320px] w-full">
              {data?.trends?.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data.trends} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.15}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorSessions" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.15}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="hsl(var(--border) / 0.5)" />
                    <XAxis 
                      dataKey="displayDate" 
                      tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
                      tickLine={false}
                      axisLine={false}
                      minTickGap={40}
                      dy={10}
                    />
                    <YAxis 
                      tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
                      tickLine={false}
                      axisLine={false}
                      dx={-10}
                    />
                    <RechartsTooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--card))", 
                        border: "1px solid hsl(var(--border))", 
                        borderRadius: "12px",
                        boxShadow: "0 4px 20px -2px rgba(0,0,0,0.1)",
                        fontSize: "12px"
                      }}
                      itemStyle={{ color: "hsl(var(--foreground))", paddingTop: "4px" }}
                      labelStyle={{ color: "hsl(var(--muted-foreground))", paddingBottom: "4px", borderBottom: "1px solid hsl(var(--border))" }}
                    />
                    <Area type="monotone" dataKey="sessions" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorSessions)" />
                    <Area type="monotone" dataKey="users" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorUsers)" />
                  </AreaChart>
                </ResponsiveContainer>
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-muted-foreground">Insufficient data points</div>
              )}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Value Events interactions */}
            <div className="lg:col-span-1 rounded-2xl border border-border/60 bg-card/50 backdrop-blur-xl p-6 shadow-sm flex flex-col">
              <h3 className="mb-6 text-base font-semibold tracking-tight">Conversion Intent</h3>
              <div className="flex-1 space-y-5">
                {data?.events?.length > 0 ? (
                  data.events.map((event, idx) => (
                    <div key={idx} className="flex flex-col gap-2.5">
                      <div className="flex justify-between items-center w-full">
                        <span className="text-sm font-medium text-foreground lowercase capitalize first-letter:uppercase">{event.name}</span>
                        <span className="text-xs font-semibold px-2 py-0.5 bg-muted rounded-md text-muted-foreground">{formatNumber(event.count)}</span>
                      </div>
                      <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary/70 rounded-full" 
                          style={{ width: `${Math.min(100, (event.count / data.events[0].count) * 100)}%` }} 
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex h-full min-h-[150px] items-center justify-center rounded-xl border border-dashed border-border/60 text-sm text-muted-foreground">
                    No custom intents logged
                  </div>
                )}
              </div>
            </div>

            {/* Top Traffic Distribution */}
            <div className="lg:col-span-1 rounded-2xl border border-border/60 bg-card/50 backdrop-blur-xl p-6 shadow-sm flex flex-col">
              <h3 className="mb-1 text-base font-semibold tracking-tight">Traffic Breakdown</h3>
              <p className="text-xs text-muted-foreground mb-6">Top acquisition sources</p>
              <div className="h-[200px] w-full">
                {data?.trafficSources?.length > 0 ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={data.trafficSources}
                        cx="50%"
                        cy="50%"
                        innerRadius={55}
                        outerRadius={80}
                        stroke="hsl(var(--card))"
                        strokeWidth={4}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {data.trafficSources.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} className="opacity-90 hover:opacity-100 transition-opacity" />
                        ))}
                      </Pie>
                      <RechartsTooltip 
                        contentStyle={{ 
                          backgroundColor: "hsl(var(--card))", 
                          border: "1px solid hsl(var(--border))", 
                          borderRadius: "10px",
                          boxShadow: "0 4px 15px -2px rgba(0,0,0,0.1)",
                          fontSize: "12px",
                          color: "hsl(var(--foreground))"
                        }}
                        itemStyle={{ color: "hsl(var(--foreground))" }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="flex h-full min-h-[150px] items-center justify-center text-sm text-muted-foreground">No source data</div>
                )}
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-3">
                {data?.trafficSources?.map((source, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                     <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[idx % COLORS.length] }} />
                     <span className="text-xs font-medium text-muted-foreground truncate max-w-[90px]">
                        {source.name === '(direct)' ? 'Direct' : source.name}
                     </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Pages */}
            <div className="lg:col-span-1 rounded-2xl border border-border/60 bg-card/50 backdrop-blur-xl p-6 shadow-sm flex flex-col">
              <h3 className="mb-6 text-base font-semibold tracking-tight">Top Generating Paths</h3>
              <div className="flex-1 space-y-1">
                {data?.topPages?.length > 0 ? (
                  data.topPages.map((page, idx) => (
                     <div key={idx} className="flex justify-between items-center p-2.5 -mx-2 rounded-lg hover:bg-muted/40 transition-colors">
                        <span className="text-sm text-muted-foreground truncate pr-4 w-[75%]">
                           {page.path === '/' ? '/ (Home)' : page.path}
                        </span>
                        <div className="flex items-center text-xs font-medium text-foreground">
                           {formatNumber(page.views)}
                        </div>
                     </div>
                  ))
                ) : (
                  <div className="flex h-full min-h-[150px] items-center justify-center rounded-xl border border-dashed border-border/60 text-sm text-muted-foreground">
                    No page data
                  </div>
                )}
              </div>
            </div>

          </div>
        </>
      )}
    </div>
  );
}
