// @ts-ignore: Deno global provided by Supabase Edge runtime
// @ts-ignore: Deno.serve is available in Supabase Edge Functions
// @ts-ignore: Deno.env is available in Supabase Edge Functions
// @ts-ignore: Deno global provided by Supabase Edge runtime
// @ts-ignore: Deno.serve is available in Supabase Edge Functions
// @ts-ignore: Deno.env is available in Supabase Edge Functions
// Supabase Edge Runtime provides Deno globals
Deno.serve(async (req: Request) => {
  try {
    const body = await req.json();
    const type = body?.type || "generic";
    // @ts-ignore: Deno.env is available in Supabase Edge Functions
    const to = body?.email || Deno.env.get("FALLBACK_EMAIL");
    const fullName = body?.fullName || body?.full_name || "User";
    const subject =
      type === "seeker_registered"
        ? `Welcome ${fullName} — Registration Received`
        : "Notification";
    const html =
      type === "seeker_registered"
        ? `<h1>Thank you, ${fullName}</h1><p>Your registration has been received.</p>`
        : `<p>${JSON.stringify(body)}</p>`;

    // Resend API integration if available
    // @ts-ignore: Deno.env is available in Supabase Edge Functions
    const resend = Deno.env.get("RESEND_API_KEY");
    // @ts-ignore: Deno.env is available in Supabase Edge Functions
    const fromAddr = Deno.env.get("FROM_EMAIL") || "Fast Job Career <no-reply@fastjobcareer.com>";
    if (resend && to) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resend}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromAddr,
          to: [to],
          subject,
          html,
        }),
      });
      if (!res.ok) {
        const errText = await res.text();
        console.error("Resend error:", errText);
      }
    } else {
      // Fallback: forward to configured EMAIL_WEBHOOK
      // @ts-ignore: Deno.env is available in Supabase Edge Functions
      const url = Deno.env.get("EMAIL_WEBHOOK");
      if (url) {
        await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ subject, html, to, body }),
        });
      }
    }
    return new Response(JSON.stringify({ ok: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("Email function error:", e);
    return new Response(JSON.stringify({ ok: false }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});
