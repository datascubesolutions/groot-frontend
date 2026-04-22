// @ts-nocheck
"use client";

import { useEffect, useState } from "react";
import { AdminSkeleton } from "@/components/admin/AdminSkeleton";
import {
  Users,
  Activity,
  MousePointerClick,
  TrendingUp,
  Calendar,
  Zap,
  AlertCircle,
} from "lucide-react";
import dynamic from "next/dynamic";

const TrafficChart = dynamic(() => import("@/components/admin/TrafficChart"), {
  ssr: false,
});
const SourceChart = dynamic(() => import("@/components/admin/SourceChart"), {
  ssr: false,
});

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
        const response = await fetch(
          `/api/admin/analytics/overview?days=${days}`
        );
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
      <div className="flex flex-col gap-4 rounded-2xl border border-red-500/20 bg-red-500/5 p-8">
        <div className="flex items-center gap-3 text-red-500">
          <AlertCircle className="h-6 w-6" />
          <h2 className="text-lg font-medium tracking-tight">
            Configuration Error
          </h2>
        </div>
        <p className="text-sm text-foreground/80">{error}</p>
        <div className="mt-2 space-y-1 border-t border-red-500/20 pt-4 font-mono text-xs text-muted-foreground">
          <p>
            1. Check if GA_PROPERTY_ID is replaced with your real ID in
            .env.local
          </p>
          <p>
            2. Check if groot-analytics-viewer@... is added as a Viewer in GA4
            Property configuration.
          </p>
        </div>
      </div>
    );
  }

  const formatNumber = (num) => new Intl.NumberFormat("en-US").format(num || 0);
  const formatPercent = (num) =>
    new Intl.NumberFormat("en-US", {
      style: "percent",
      maximumFractionDigits: 1,
    }).format(num || 0);

  return (
    <div className="space-y-8 pb-12 font-sans">
      {/* Header & Controls */}
      <div className="flex flex-col gap-5 border-b border-border/50 pb-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-1.5">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Analytics Overview
          </h1>
          <p className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
            <Zap className="h-3.5 w-3.5 fill-primary text-primary" /> Live
            platform telemetry
          </p>
        </div>

        <div className="flex items-center rounded-xl border border-border/60 bg-muted/40 p-1 backdrop-blur-sm">
          {[7, 30, 90, 365].map((d) => (
            <button
              key={d}
              onClick={() => setDays(d)}
              className={`rounded-lg px-4 py-1.5 text-xs font-medium transition-all duration-200 ${
                days === d
                  ? "border border-border/50 bg-background text-foreground shadow-sm ring-1 ring-border"
                  : "bg-transparent text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              }`}
            >
              {d === 365 ? "1 Year" : `${d} Days`}
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
              {
                label: "Active Users",
                value: formatNumber(data?.kpis?.activeUsers),
                icon: Users,
                color: "text-emerald-500",
                bg: "bg-emerald-500/10",
                border: "border-emerald-500/20",
              },
              {
                label: "Total Sessions",
                value: formatNumber(data?.kpis?.sessions),
                icon: Activity,
                color: "text-blue-500",
                bg: "bg-blue-500/10",
                border: "border-blue-500/20",
              },
              {
                label: "Engagement",
                value: formatPercent(data?.kpis?.engagementRate),
                icon: TrendingUp,
                color: "text-amber-500",
                bg: "bg-amber-500/10",
                border: "border-amber-500/20",
              },
              {
                label: "Conversions",
                value: formatNumber(data?.kpis?.conversions),
                icon: MousePointerClick,
                color: "text-purple-500",
                bg: "bg-purple-500/10",
                border: "border-purple-500/20",
              },
            ].map((kpi, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl border border-border/60 bg-card/50 p-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-border hover:bg-card hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`rounded-xl border p-2.5 ${kpi.bg} ${kpi.border}`}
                  >
                    <kpi.icon className={`h-5 w-5 ${kpi.color}`} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-2xl font-semibold leading-none tracking-tight">
                      {kpi.value}
                    </h3>
                    <p className="text-xs font-medium text-muted-foreground">
                      {kpi.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Time Series Area Chart */}
          <div className="rounded-2xl border border-border/60 bg-card/50 p-6 shadow-sm backdrop-blur-xl">
            <div className="mb-8 flex items-center justify-between">
              <h3 className="flex items-center gap-2 text-base font-semibold tracking-tight text-foreground">
                Traffic Trends
              </h3>
              <div className="flex items-center gap-4 text-xs font-medium">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80"></div>{" "}
                  Users
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <div className="h-2.5 w-2.5 rounded-full bg-blue-500/80"></div>{" "}
                  Sessions
                </div>
              </div>
            </div>

            <div className="h-[320px] w-full">
              <TrafficChart trends={data?.trends} />
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Value Events interactions */}
            <div className="flex flex-col rounded-2xl border border-border/60 bg-card/50 p-6 shadow-sm backdrop-blur-xl lg:col-span-1">
              <h3 className="mb-6 text-base font-semibold tracking-tight">
                Conversion Intent
              </h3>
              <div className="flex-1 space-y-5">
                {data?.events?.length > 0 ? (
                  data.events.map((event, idx) => (
                    <div key={idx} className="flex flex-col gap-2.5">
                      <div className="flex w-full items-center justify-between">
                        <span className="text-sm font-medium lowercase capitalize text-foreground first-letter:uppercase">
                          {event.name}
                        </span>
                        <span className="rounded-md bg-muted px-2 py-0.5 text-xs font-semibold text-muted-foreground">
                          {formatNumber(event.count)}
                        </span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-primary/70"
                          style={{
                            width: `${Math.min(100, (event.count / data.events[0].count) * 100)}%`,
                          }}
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
            <div className="flex flex-col rounded-2xl border border-border/60 bg-card/50 p-6 shadow-sm backdrop-blur-xl lg:col-span-1">
              <h3 className="mb-1 text-base font-semibold tracking-tight">
                Traffic Breakdown
              </h3>
              <p className="mb-6 text-xs text-muted-foreground">
                Top acquisition sources
              </p>
              <div className="h-[200px] w-full">
                <SourceChart trafficSources={data?.trafficSources} />
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-3">
                {data?.trafficSources?.map((source, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <div
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: COLORS[idx % COLORS.length] }}
                    />
                    <span className="max-w-[90px] truncate text-xs font-medium text-muted-foreground">
                      {source.name === "(direct)" ? "Direct" : source.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Pages */}
            <div className="flex flex-col rounded-2xl border border-border/60 bg-card/50 p-6 shadow-sm backdrop-blur-xl lg:col-span-1">
              <h3 className="mb-6 text-base font-semibold tracking-tight">
                Top Generating Paths
              </h3>
              <div className="flex-1 space-y-1">
                {data?.topPages?.length > 0 ? (
                  data.topPages.map((page, idx) => (
                    <div
                      key={idx}
                      className="-mx-2 flex items-center justify-between rounded-lg p-2.5 transition-colors hover:bg-muted/40"
                    >
                      <span className="w-[75%] truncate pr-4 text-sm text-muted-foreground">
                        {page.path === "/" ? "/ (Home)" : page.path}
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
