// @ts-nocheck
import { NextResponse } from "next/server";

const AUTH_LOGIN_URL =
  "https://us-central1-datascube-2b74e.cloudfunctions.net/auth_login";

export async function POST(request) {
  let payload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid JSON body" },
      { status: 400 },
    );
  }

  try {
    const upstreamResponse = await fetch(AUTH_LOGIN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    const raw = await upstreamResponse.text();
    let parsed = null;

    try {
      parsed = raw ? JSON.parse(raw) : null;
    } catch {
      parsed = null;
    }

    const responseBody = parsed ?? { message: raw || "No response body" };

    return NextResponse.json(responseBody, {
      status: upstreamResponse.status,
    });
  } catch {
    return NextResponse.json(
      { message: "Unable to reach auth service" },
      { status: 502 },
    );
  }
}
