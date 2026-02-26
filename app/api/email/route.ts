import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const webhook = process.env.EMAIL_WEBHOOK;
    if (!webhook) {
      return NextResponse.json({ ok: true, message: "EMAIL_WEBHOOK missing; skipped" });
    }
    await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: (e as Error).message }, { status: 500 });
    }
}

