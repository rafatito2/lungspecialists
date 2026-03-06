import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const ADMIN_EMAIL = "tito2rafael@gmail.com";
const FROM_ADDRESS = "onboarding@resend.dev"; // replace with your verified domain later

export async function POST(req: Request) {
  const body = await req.json();
  const {
    firstName,
    lastName,
    phone,
    email,
    insuranceType,
    insuranceProvider,
    visitReason,
    preferredDate,
    preferredTime,
    additionalNotes,
  } = body;

  const fullName = `${firstName} ${lastName}`;

  const visitReasonLabels: Record<string, string> = {
    "new-patient": "New Patient Consultation",
    "follow-up": "Follow-Up Visit",
    "sleep-study": "Sleep Study",
    "pulmonary-function": "Pulmonary Function Test",
    "second-opinion": "Second Opinion",
    "other": "Other",
  };

  const insuranceLabels: Record<string, string> = {
    ppo: "PPO",
    hmo: "HMO",
    medicare: "Medicare",
    medicaid: "Medicaid",
    other: "Other / Self-Pay",
  };

  const timeLabels: Record<string, string> = {
    morning: "Morning (9 AM – 12 PM)",
    afternoon: "Afternoon (1 PM – 5 PM)",
    "": "No preference",
  };

  try {
    // ── 1. Admin notification ───────────────────────────────────────────────
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: ADMIN_EMAIL,
      subject: `New Appointment Request — ${fullName}`,
      html: adminEmailHtml({
        fullName,
        phone,
        email,
        insuranceType: insuranceLabels[insuranceType] ?? insuranceType,
        insuranceProvider,
        visitReason: visitReasonLabels[visitReason] ?? visitReason,
        preferredDate,
        preferredTime: timeLabels[preferredTime] ?? preferredTime,
        additionalNotes,
      }),
    });

    // ── 2. Patient confirmation ─────────────────────────────────────────────
    // Disabled until practice domain is verified in Resend.
    // Re-enable by uncommenting the block below and updating FROM_ADDRESS.
    // await resend.emails.send({
    //   from: FROM_ADDRESS,
    //   to: email,
    //   subject: "We received your appointment request — Lung Disease Specialists",
    //   html: patientEmailHtml({ firstName }),
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}

// ── Admin email template ────────────────────────────────────────────────────
function adminEmailHtml(d: {
  fullName: string;
  phone: string;
  email: string;
  insuranceType: string;
  insuranceProvider: string;
  visitReason: string;
  preferredDate: string;
  preferredTime: string;
  additionalNotes: string;
}) {
  const row = (label: string, value: string) =>
    value
      ? `<tr>
          <td style="padding:10px 16px;font-size:13px;color:#64748b;font-weight:600;white-space:nowrap;width:170px;vertical-align:top;">${label}</td>
          <td style="padding:10px 16px;font-size:13px;color:#1e293b;vertical-align:top;">${value}</td>
        </tr>`
      : "";

  return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="background:linear-gradient(135deg,#0d1f52 0%,#2B56C5 60%,#29C4BF 100%);border-radius:16px 16px 0 0;padding:32px 36px;">
          <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,255,255,0.6);">Lung Disease Specialists</p>
          <h1 style="margin:0;font-size:22px;font-weight:700;color:#ffffff;line-height:1.3;">New Appointment Request</h1>
          <p style="margin:8px 0 0;font-size:13px;color:rgba(255,255,255,0.7);">Submitted on ${new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
        </td></tr>

        <!-- Body -->
        <tr><td style="background:#ffffff;padding:32px 36px;">

          <!-- Patient info -->
          <p style="margin:0 0 16px;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#29C4BF;">Patient Information</p>
          <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;margin-bottom:28px;">
            ${row("Full Name", d.fullName)}
            <tr><td colspan="2" style="height:1px;background:#f1f5f9;padding:0;"></td></tr>
            ${row("Phone", d.phone)}
            <tr><td colspan="2" style="height:1px;background:#f1f5f9;padding:0;"></td></tr>
            ${row("Email", d.email)}
          </table>

          <!-- Insurance -->
          <p style="margin:0 0 16px;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#29C4BF;">Insurance</p>
          <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;margin-bottom:28px;">
            ${row("Type", d.insuranceType)}
            ${d.insuranceProvider ? `<tr><td colspan="2" style="height:1px;background:#f1f5f9;padding:0;"></td></tr>${row("Provider", d.insuranceProvider)}` : ""}
          </table>

          <!-- Appointment details -->
          <p style="margin:0 0 16px;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#29C4BF;">Appointment Preferences</p>
          <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;margin-bottom:28px;">
            ${row("Reason for Visit", d.visitReason)}
            ${d.preferredDate ? `<tr><td colspan="2" style="height:1px;background:#f1f5f9;padding:0;"></td></tr>${row("Preferred Date", new Date(d.preferredDate + "T00:00:00").toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }))}` : ""}
            <tr><td colspan="2" style="height:1px;background:#f1f5f9;padding:0;"></td></tr>
            ${row("Preferred Time", d.preferredTime)}
          </table>

          ${d.additionalNotes ? `
          <!-- Notes -->
          <p style="margin:0 0 12px;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#29C4BF;">Additional Notes</p>
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:16px;font-size:13px;color:#334155;line-height:1.6;">${d.additionalNotes}</div>
          ` : ""}

        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#f8fafc;border-radius:0 0 16px 16px;padding:20px 36px;border-top:1px solid #e2e8f0;">
          <p style="margin:0;font-size:12px;color:#94a3b8;text-align:center;">Lung Disease Specialists · 6405 N Federal Hwy, Suite 405, Fort Lauderdale, FL 33308 · (954) 771-6047</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ── Patient confirmation email template ─────────────────────────────────────
function patientEmailHtml({ firstName }: { firstName: string }) {
  return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="background:linear-gradient(135deg,#0d1f52 0%,#2B56C5 60%,#29C4BF 100%);border-radius:16px 16px 0 0;padding:36px 36px 32px;">
          <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.6);">Lung Disease Specialists</p>
          <h1 style="margin:0;font-size:26px;font-weight:700;color:#ffffff;line-height:1.25;">We received your request!</h1>
        </td></tr>

        <!-- Body -->
        <tr><td style="background:#ffffff;padding:36px;">

          <p style="margin:0 0 18px;font-size:15px;color:#1e293b;line-height:1.7;">Hi <strong>${firstName}</strong>,</p>
          <p style="margin:0 0 18px;font-size:15px;color:#334155;line-height:1.7;">
            Thank you for reaching out to <strong>Lung Disease Specialists</strong>. We have received your appointment request and our staff will review it shortly.
          </p>

          <!-- Steps box -->
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4ff;border:1px solid #d5e1f7;border-radius:12px;margin:24px 0;">
            <tr><td style="padding:24px;">
              <p style="margin:0 0 18px;font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#2B56C5;">What happens next</p>

              <!-- Step 1 -->
              <table cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                <tr>
                  <td style="width:32px;vertical-align:top;padding-top:2px;">
                    <div style="width:24px;height:24px;border-radius:50%;background:#2B56C5;color:white;font-size:12px;font-weight:700;text-align:center;line-height:24px;">1</div>
                  </td>
                  <td style="padding-left:12px;">
                    <p style="margin:0 0 2px;font-size:13px;font-weight:700;color:#1e293b;">Staff Review</p>
                    <p style="margin:0;font-size:13px;color:#64748b;line-height:1.5;">Our team will review your request and check availability based on your preferences.</p>
                  </td>
                </tr>
              </table>

              <!-- Step 2 -->
              <table cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                <tr>
                  <td style="width:32px;vertical-align:top;padding-top:2px;">
                    <div style="width:24px;height:24px;border-radius:50%;background:#2B56C5;color:white;font-size:12px;font-weight:700;text-align:center;line-height:24px;">2</div>
                  </td>
                  <td style="padding-left:12px;">
                    <p style="margin:0 0 2px;font-size:13px;font-weight:700;color:#1e293b;">We'll Call You</p>
                    <p style="margin:0;font-size:13px;color:#64748b;line-height:1.5;">Expect a call within <strong>1–2 business days</strong> at the phone number you provided.</p>
                  </td>
                </tr>
              </table>

              <!-- Step 3 -->
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="width:32px;vertical-align:top;padding-top:2px;">
                    <div style="width:24px;height:24px;border-radius:50%;background:#29C4BF;color:white;font-size:12px;font-weight:700;text-align:center;line-height:24px;">3</div>
                  </td>
                  <td style="padding-left:12px;">
                    <p style="margin:0 0 2px;font-size:13px;font-weight:700;color:#1e293b;">Confirm Your Visit</p>
                    <p style="margin:0;font-size:13px;color:#64748b;line-height:1.5;">We'll agree on a date and time that works best for you.</p>
                  </td>
                </tr>
              </table>

            </td></tr>
          </table>

          <p style="margin:0 0 8px;font-size:15px;color:#334155;line-height:1.7;">
            If you have any urgent questions, feel free to call us directly:
          </p>
          <p style="margin:0 0 28px;">
            <a href="tel:+19547716047" style="display:inline-block;font-size:18px;font-weight:700;color:#2B56C5;text-decoration:none;">(954) 771-6047</a>
            <span style="font-size:13px;color:#94a3b8;margin-left:10px;">Mon – Fri · 9 AM – 5 PM</span>
          </p>

          <p style="margin:0;font-size:15px;color:#334155;line-height:1.7;">
            We look forward to seeing you soon,<br>
            <strong style="color:#1e293b;">The Lung Disease Specialists Team</strong>
          </p>

        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#f8fafc;border-radius:0 0 16px 16px;padding:20px 36px;border-top:1px solid #e2e8f0;">
          <p style="margin:0 0 4px;font-size:12px;color:#94a3b8;text-align:center;">Lung Disease Specialists</p>
          <p style="margin:0;font-size:12px;color:#94a3b8;text-align:center;">6405 N Federal Hwy, Suite 405 · Fort Lauderdale, FL 33308</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
