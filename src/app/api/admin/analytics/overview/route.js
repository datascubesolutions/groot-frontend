// @ts-nocheck
import { NextRequest, NextResponse } from "next/server";
import { BetaAnalyticsDataClient } from "@google-analytics/data";

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: process.env.GA_CLIENT_EMAIL,
    private_key: process.env.GA_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
  projectId: process.env.GA_PROJECT_ID,
});

export async function GET(req) {
  try {
    const propertyId = process.env.GA_PROPERTY_ID;

    if (
      !propertyId ||
      !process.env.GA_CLIENT_EMAIL ||
      !process.env.GA_PRIVATE_KEY
    ) {
      return NextResponse.json(
        {
          error: "Analytics API not configured. Missing environment variables.",
        },
        { status: 500 }
      );
    }

    const searchParams = req.nextUrl.searchParams;
    const days = parseInt(searchParams.get("days") || "30", 10);
    const startDate = `${days}daysAgo`;

    // 1. Fetch Global KPIs
    const [kpiResponse] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate, endDate: "today" }],
      metrics: [
        { name: "activeUsers" },
        { name: "sessions" },
        { name: "engagementRate" },
        { name: "conversions" },
      ],
    });

    // 2. Fetch Time-Series Data (Trends)
    const [trendResponse] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate, endDate: "today" }],
      dimensions: [{ name: "date" }],
      metrics: [{ name: "activeUsers" }, { name: "sessions" }],
      orderBys: [
        { dimension: { dimensionName: "date" }, desc: false }, // Chronological
      ],
    });

    // 3. Fetch Top Pages
    const [pageResponse] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate, endDate: "today" }],
      dimensions: [{ name: "pagePath" }],
      metrics: [{ name: "screenPageViews" }],
      orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
      limit: 7,
    });

    // 4. Fetch Traffic Sources
    const [sourceResponse] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate, endDate: "today" }],
      dimensions: [{ name: "sessionSourceMedium" }],
      metrics: [{ name: "sessions" }],
      orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
      limit: 5,
    });

    // 5. Fetch Key Event Interactions
    const [eventResponse] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate, endDate: "today" }],
      dimensions: [{ name: "eventName" }],
      metrics: [{ name: "eventCount" }],
      orderBys: [{ metric: { metricName: "eventCount" }, desc: true }],
      limit: 20,
    });

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

    return NextResponse.json(
      { kpis, trends, trafficSources, topPages, events },
      { headers: { "Cache-Control": "s-maxage=3600, stale-while-revalidate" } }
    );
  } catch (error) {
    console.error("Google Analytics API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
