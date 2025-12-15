// app/api/contact/route.js
import { NextResponse } from "next/server";

export async function POST(req){
  try{
    const body = await req.json();
    const { name, email, phone, message } = body;
    if (!name || !email) return NextResponse.json({ error: "name/email required" }, { status: 400 });

    // basic rate-limit using simple in-memory (DEV only)
    if (!global._cf) global._cf = {};
    const ip = req.headers.get('x-forwarded-for') || 'unknown';
    const key = `c_${ip}`;
    const now = Date.now();
    if (!global._cf[key]) global._cf[key] = { ts: now, count: 1 };
    else {
      const rec = global._cf[key];
      if (now - rec.ts < 60000) {
        rec.count += 1;
        if (rec.count > 10) return NextResponse.json({ error: "too many requests" }, { status: 429 });
      } else { rec.ts = now; rec.count = 1; }
    }

    // TODO: send to email/whatsapp/webhook. Example: fetch Zapier webhook (env var)
    if (process.env.ZAPIER_WEBHOOK_URL) {
      await fetch(process.env.ZAPIER_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify({ name, email, phone, message })
      });
    }

    return NextResponse.json({ ok: true });
  } catch(err){
    console.error(err);
    return NextResponse.json({ error: "server" }, { status: 500 });
  }
}
