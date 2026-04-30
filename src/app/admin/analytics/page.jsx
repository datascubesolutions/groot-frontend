// @ts-nocheck
"use client";

import { useEffect, useState } from "react";
import { AdminSkeleton } from "@/components/admin/AdminSkeleton";
import {
  Activity,
  AlertCircle,
  Filter,
  Globe2,
  Monitor,
  MousePointerClick,
  RefreshCw,
  Search,
  TrendingUp,
  Users,
  Zap,
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
  const [country, setCountry] = useState("all");
  const [device, setDevice] = useState("all");
  const [pageSearch, setPageSearch] = useState("");

  useEffect(() => {
    async function fetchAnalytics() {
      setLoading(true);
      setError(null);
      try {
        const params = new URLSearchParams({
          days: String(days),
          country,
          device,
        });
        const response = await fetch(`/api/admin/analytics/overview?${params}`);
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
  }, [days, country, device]);

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
      </div>
    );
  }

  const formatNumber = (num) => new Intl.NumberFormat("en-US").format(num || 0);
  const formatPercent = (num) =>
    new Intl.NumberFormat("en-US", {
      style: "percent",
      maximumFractionDigits: 1,
    }).format(num || 0);
  const filteredTopPages =
    data?.topPages?.filter((page) =>
      page.path.toLowerCase().includes(pageSearch.trim().toLowerCase())
    ) || [];

  return (
    <div className="space-y-8 pb-12 font-sans">
      <div className="space-y-5 border-b border-border/50 pb-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="space-y-1.5">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">
              Analytics Command Center
            </h1>
            <p className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
              <Zap className="h-3.5 w-3.5 fill-primary text-primary" />
              Manage traffic by region, device, and source
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <RefreshCw className="h-3.5 w-3.5" />
            Last sync:
            <span className="font-medium text-foreground/90">
              {data?.updatedAt
                ? new Date(data.updatedAt).toLocaleString()
                : "Loading..."}
            </span>
          </div>
        </div>

        <div className="grid gap-3 lg:grid-cols-4">
          <div className="flex items-center rounded-xl border border-border/60 bg-muted/40 p-1 backdrop-blur-sm lg:col-span-2">
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
          <label className="flex items-center gap-2 rounded-xl border border-border/60 bg-card/50 px-3 py-2">
            <Globe2 className="h-4 w-4 text-muted-foreground" />
            <select
              className="w-full bg-transparent text-sm text-foreground outline-none"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              {(data?.filters?.countryOptions || ["all"]).map((option) => (
                <option key={option} value={option} className="bg-[#141414]">
                  {option === "all" ? "All Countries" : option}
                </option>
              ))}
            </select>
          </label>
          <label className="flex items-center gap-2 rounded-xl border border-border/60 bg-card/50 px-3 py-2">
            <Monitor className="h-4 w-4 text-muted-foreground" />
            <select
              className="w-full bg-transparent text-sm capitalize text-foreground outline-none"
              value={device}
              onChange={(e) => setDevice(e.target.value)}
            >
              {(data?.filters?.deviceOptions || ["all"]).map((option) => (
                <option key={option} value={option} className="bg-[#141414]">
                  {option === "all" ? "All Devices" : option}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      {loading && !data ? (
        <AdminSkeleton type="analytics" />
      ) : (
        <>
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
                className="relative rounded-2xl border border-border/60 bg-card/50 p-5 shadow-sm backdrop-blur-xl"
              >
                <div className="flex items-center gap-4">
                  <div className={`rounded-xl border p-2.5 ${kpi.bg} ${kpi.border}`}>
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

          <div className="grid gap-6 xl:grid-cols-5">
            <div className="rounded-2xl border border-border/60 bg-card/50 p-6 shadow-sm backdrop-blur-xl xl:col-span-3">
              <h3 className="mb-4 text-base font-semibold tracking-tight text-foreground">
                Traffic Trends
              </h3>
              <div className="h-[320px] w-full">
                <TrafficChart trends={data?.trends} />
              </div>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card/50 p-6 shadow-sm backdrop-blur-xl xl:col-span-2">
              <div className="mb-5 flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <h3 className="text-base font-semibold tracking-tight">
                  Device Distribution
                </h3>
              </div>
              <div className="space-y-3">
                {data?.devices?.length ? (
                  data.devices.map((row) => (
                    <div
                      key={row.device}
                      className="rounded-lg border border-border/50 bg-background/40 p-3"
                    >
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <span className="capitalize text-foreground">
                          {row.device}
                        </span>
                        <span className="text-muted-foreground">
                          {formatNumber(row.sessions)} sessions
                        </span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {formatNumber(row.users)} users
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex h-36 items-center justify-center rounded-lg border border-dashed border-border/60 text-sm text-muted-foreground">
                    No device data
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-5">
            <div className="rounded-2xl border border-border/60 bg-card/50 p-6 shadow-sm backdrop-blur-xl xl:col-span-2">
              <h3 className="mb-6 text-base font-semibold tracking-tight">
                Region Management View
              </h3>
              <div className="space-y-2">
                {data?.regions?.length ? (
                  data.regions.map((row, idx) => (
                    <div
                      key={`${row.country}-${row.region}-${idx}`}
                      className="grid grid-cols-12 items-center gap-2 rounded-lg border border-border/40 bg-background/40 px-3 py-2.5 text-sm"
                    >
                      <div className="col-span-7 min-w-0">
                        <p className="truncate text-foreground">{row.region}</p>
                        <p className="truncate text-xs text-muted-foreground">
                          {row.country}
                        </p>
                      </div>
                      <div className="col-span-3 text-right text-xs text-muted-foreground">
                        {formatNumber(row.users)} users
                      </div>
                      <div className="col-span-2 text-right text-xs font-medium text-foreground">
                        {formatNumber(row.sessions)}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex h-48 items-center justify-center rounded-xl border border-dashed border-border/60 text-sm text-muted-foreground">
                    No region data
                  </div>
                )}
              </div>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card/50 p-6 shadow-sm backdrop-blur-xl xl:col-span-3">
              <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <h3 className="text-base font-semibold tracking-tight">
                  Top Pages Management
                </h3>
                <label className="flex items-center gap-2 rounded-lg border border-border/60 bg-background/40 px-3 py-2">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <input
                    value={pageSearch}
                    onChange={(e) => setPageSearch(e.target.value)}
                    placeholder="Search page path"
                    className="w-56 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                  />
                </label>
              </div>
              <div className="space-y-2">
                {filteredTopPages.length ? (
                  filteredTopPages.map((page, idx) => (
                    <div
                      key={`${page.path}-${idx}`}
                      className="grid grid-cols-12 items-center gap-2 rounded-lg border border-border/40 bg-background/40 px-3 py-2.5 text-sm"
                    >
                      <div className="col-span-8 min-w-0 truncate text-foreground">
                        {page.path === "/" ? "/ (Home)" : page.path}
                      </div>
                      <div className="col-span-2 text-right text-xs text-muted-foreground">
                        {formatNumber(page.sessions)}
                      </div>
                      <div className="col-span-2 text-right text-xs font-medium text-foreground">
                        {formatNumber(page.views)}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex h-48 items-center justify-center rounded-xl border border-dashed border-border/60 text-sm text-muted-foreground">
                    No page data for this filter
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="flex flex-col rounded-2xl border border-border/60 bg-card/50 p-6 shadow-sm backdrop-blur-xl">
              <h3 className="mb-6 text-base font-semibold tracking-tight">
                Conversion Intent
              </h3>
              <div className="flex-1 space-y-5">
                {data?.events?.length > 0 ? (
                  data.events.map((event, idx) => (
                    <div key={idx} className="flex flex-col gap-2.5">
                      <div className="flex w-full items-center justify-between">
                        <span className="text-sm font-medium capitalize text-foreground">
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

            <div className="flex flex-col rounded-2xl border border-border/60 bg-card/50 p-6 shadow-sm backdrop-blur-xl">
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

            <div className="flex flex-col rounded-2xl border border-border/60 bg-card/50 p-6 shadow-sm backdrop-blur-xl">
              <h3 className="mb-6 text-base font-semibold tracking-tight">
                Filter Snapshot
              </h3>
              <div className="space-y-4 text-sm">
                <SnapshotCard label="Date range" value={`Last ${days} days`} />
                <SnapshotCard
                  label="Country"
                  value={country === "all" ? "All Countries" : country}
                />
                <SnapshotCard
                  label="Device"
                  value={device === "all" ? "All Devices" : device}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function SnapshotCard({ label, value }) {
  return (
    <div className="rounded-lg border border-border/40 bg-background/40 p-3">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="font-medium text-foreground">{value}</p>
    </div>
  );
}
