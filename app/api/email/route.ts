import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, email, fullName, companyName, contactPerson, phone, website, businessType } = body;

    // Send email to admin
    if (type === "vendor_registration") {
      const { error } = await resend.emails.send({
        from: "noreply@fastjobcareer.com",
        to: "fastexp786@gmail.com",
        subject: "New Vendor Registration - Fast Job Career",
        html: `
          <h2>New Vendor Registration</h2>
          <p><strong>Company:</strong> ${companyName}</p>
          <p><strong>Contact Person:</strong> ${contactPerson}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Website:</strong> ${website || "N/A"}</p>
          <p><strong>Business Type:</strong> ${businessType || "N/A"}</p>
          <hr>
          <p>Please review and approve this vendor registration in the admin dashboard.</p>
          <a href="https://fastjobcareer.com/dashboard">Go to Dashboard</a>
        `,
      });

      if (error) {
        console.error("Email send error:", error);
        return NextResponse.json({ ok: false, error: error.message });
      }
    }

    // Send email to seeker
    if (type === "seeker_registered") {
      const { error } = await resend.emails.send({
        from: "noreply@fastjobcareer.com",
        to: "fastexp786@gmail.com",
        subject: "New Seeker Registration - Fast Job Career",
        html: `
          <h2>New Seeker Registration</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <hr>
          <p>A new seeker has registered on Fast Job Career.</p>
          <a href="https://fastjobcareer.com/dashboard">Go to Dashboard</a>
        `,
      });

      if (error) {
        console.error("Email send error:", error);
        return NextResponse.json({ ok: false, error: error.message });
      }
    }

    return NextResponse.json({ ok: true, message: "Email sent successfully" });
  } catch (e) {
    return NextResponse.json({ ok: false, error: (e as Error).message }, { status: 500 });
  }
}

