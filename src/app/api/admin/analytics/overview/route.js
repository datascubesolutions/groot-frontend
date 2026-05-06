// @ts-nocheck
import { NextRequest, NextResponse } from "next/server";
import { BetaAnalyticsDataClient } from "@google-analytics/data";

function getMissingGaEnvVars() {
  const missing = [];
  if (!process.env.GA_PROPERTY_ID?.trim()) missing.push("GA_PROPERTY_ID");
  if (!process.env.GA_CLIENT_EMAIL?.trim()) missing.push("GA_CLIENT_EMAIL");
  if (!process.env.GA_PRIVATE_KEY?.trim()) missing.push("GA_PRIVATE_KEY");
  if (!process.env.GA_PROJECT_ID?.trim()) missing.push("GA_PROJECT_ID");
  return missing;
}

let cachedAnalyticsClient;
function getAnalyticsClient() {
  if (!cachedAnalyticsClient) {
    cachedAnalyticsClient = new BetaAnalyticsDataClient({
      credentials: {
        client_email: process.env.GA_CLIENT_EMAIL,
        private_key: process.env.GA_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      projectId: process.env.GA_PROJECT_ID,
    });
  }
  return cachedAnalyticsClient;
}

export async function GET(req) {
  try {
    const missingEnv = getMissingGaEnvVars();
    if (missingEnv.length > 0) {
      return NextResponse.json(
        {
          error: "Analytics API not configured. Missing environment variables.",
          missing: missingEnv,
        },
        { status: 500 }
      );
    }

    const propertyId = process.env.GA_PROPERTY_ID;
    const analyticsDataClient = getAnalyticsClient();

    const searchParams = req.nextUrl.searchParams;
    const days = parseInt(searchParams.get("days") || "30", 10);
    const country = searchParams.get("country") || "all";
    const device = searchParams.get("device") || "all";
    const startDate = `${days}daysAgo`;
    const normalizedDays = [7, 30, 90, 365].includes(days) ? days : 30;

    const filters = [];
    if (country !== "all") {
      filters.push({
        filter: {
          fieldName: "country",
          stringFilter: { matchType: "EXACT", value: country },
        },
      });
    }
    if (device !== "all") {
      filters.push({
        filter: {
          fieldName: "deviceCategory",
          stringFilter: { matchType: "EXACT", value: device },
        },
      });
    }
    const dimensionFilter =
      filters.length === 0
        ? undefined
        : filters.length === 1
          ? filters[0]
          : { andGroup: { expressions: filters } };

    const reportBase = {
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate, endDate: "today" }],
      dimensionFilter,
    };

    const [
      [kpiResponse],
      [trendResponse],
      [pageResponse],
      [sourceResponse],
      [eventResponse],
      [regionResponse],
      [deviceResponse],
      [countryOptionsResponse],
    ] = await Promise.all([
      analyticsDataClient.runReport({
        ...reportBase,
        metrics: [
          { name: "activeUsers" },
          { name: "sessions" },
          { name: "engagementRate" },
          { name: "conversions" },
        ],
      }),
      analyticsDataClient.runReport({
        ...reportBase,
        dimensions: [{ name: "date" }],
        metrics: [{ name: "activeUsers" }, { name: "sessions" }],
        orderBys: [{ dimension: { dimensionName: "date" }, desc: false }],
      }),
      analyticsDataClient.runReport({
        ...reportBase,
        dimensions: [{ name: "pagePath" }],
        metrics: [{ name: "screenPageViews" }, { name: "sessions" }],
        orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
        limit: 12,
      }),
      analyticsDataClient.runReport({
        ...reportBase,
        dimensions: [{ name: "sessionSourceMedium" }],
        metrics: [{ name: "sessions" }],
        orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
        limit: 6,
      }),
      analyticsDataClient.runReport({
        ...reportBase,
        dimensions: [{ name: "eventName" }],
        metrics: [{ name: "eventCount" }],
        orderBys: [{ metric: { metricName: "eventCount" }, desc: true }],
        limit: 20,
      }),
      analyticsDataClient.runReport({
        ...reportBase,
        dimensions: [{ name: "country" }, { name: "region" }],
        metrics: [{ name: "sessions" }, { name: "activeUsers" }],
        orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
        limit: 15,
      }),
      analyticsDataClient.runReport({
        ...reportBase,
        dimensions: [{ name: "deviceCategory" }],
        metrics: [{ name: "sessions" }, { name: "activeUsers" }],
        orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
        limit: 10,
      }),
      analyticsDataClient.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate: `${normalizedDays}daysAgo`, endDate: "today" }],
        dimensions: [{ name: "country" }],
        metrics: [{ name: "sessions" }],
        orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
        limit: 50,
      }),
    ]);

    // Parsers
    const kpis = kpiResponse.rows?.[0]
      ? {
          activeUsers: parseInt(kpiResponse.rows[0].metricValues[0].value, 10),
          sessions: parseInt(kpiResponse.rows[0].metricValues[1].value, 10),
          engagementRate: parseFloat(kpiResponse.rows[0].metricValues[2].value),
          conversions: parseInt(kpiResponse.rows[0].metricValues[3].value, 10),
        }
      : { activeUsers: 0, sessions: 0, engagementRate: 0, conversions: 0 };

    const trends =
      trendResponse.rows?.map((row) => {
        // Date format returns YYYYMMDD, parse it for charts
        const rawDate = row.dimensionValues[0].value;
        const y = rawDate.substring(0, 4);
        const m = rawDate.substring(4, 6);
        const d = rawDate.substring(6, 8);

        return {
          date: `${y}-${m}-${d}`,
          displayDate: new Date(`${y}-${m}-${d}T00:00:00`).toLocaleDateString(
            "en-US",
            { month: "short", day: "numeric" }
          ),
          users: parseInt(row.metricValues[0].value, 10),
          sessions: parseInt(row.metricValues[1].value, 10),
        };
      }) || [];

    const topPages =
      pageResponse.rows?.map((row) => ({
        path: row.dimensionValues[0].value,
        views: parseInt(row.metricValues[0].value, 10),
        sessions: parseInt(row.metricValues[1].value, 10),
      })) || [];

    const trafficSources =
      sourceResponse.rows?.map((row) => ({
        name: row.dimensionValues[0].value.split(" / ")[0], // Base source
        value: parseInt(row.metricValues[0].value, 10),
      })) || [];

    // Filter out standard GA4 noise events (page_view, session_start, etc) to leave only valuable conversions
    const irrelevantEvents = [
      "page_view",
      "session_start",
      "user_engagement",
      "first_visit",
      "scroll",
      "click",
      "view_search_results",
    ];
    let events = [];
    if (eventResponse.rows) {
      events = eventResponse.rows
        .filter(
          (row) =>
            !irrelevantEvents.includes(row.dimensionValues[0].value) &&
            !row.dimensionValues[0].value.startsWith("scroll_")
        )
        .slice(0, 5)
        .map((row) => ({
          name: row.dimensionValues[0].value.replace(/_/g, " "),
          count: parseInt(row.metricValues[0].value, 10),
        }));
    }

    const regions =
      regionResponse.rows?.map((row) => ({
        country: row.dimensionValues[0].value || "Unknown",
        region: row.dimensionValues[1].value || "Unknown",
        sessions: parseInt(row.metricValues[0].value, 10),
        users: parseInt(row.metricValues[1].value, 10),
      })) || [];

    const devices =
      deviceResponse.rows?.map((row) => ({
        device: row.dimensionValues[0].value || "unknown",
        sessions: parseInt(row.metricValues[0].value, 10),
        users: parseInt(row.metricValues[1].value, 10),
      })) || [];

    const countryOptions = [
      "all",
      ...(countryOptionsResponse.rows?.map((row) => row.dimensionValues[0].value) ||
        []),
    ];

    return NextResponse.json(
      {
        kpis,
        trends,
        trafficSources,
        topPages,
        events,
        regions,
        devices,
        filters: {
          days: normalizedDays,
          country,
          device,
          countryOptions,
          deviceOptions: ["all", "desktop", "mobile", "tablet", "smart tv"],
        },
        updatedAt: new Date().toISOString(),
      },
      { headers: { "Cache-Control": "s-maxage=3600, stale-while-revalidate" } }
    );
  } catch (error) {
    console.error("Google Analytics API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
