import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import MedicalBackground from "@/components/ui/MedicalBackground";
import AppointmentForm from "@/components/forms/AppointmentForm";
import ReviewQRCode from "@/components/ui/ReviewQRCode";

// TODO: Replace with the practice's actual CureMD patient portal URL once provided
const CUREMD_URL = "https://app4.curemd.net/PatientPortal/";

export const metadata: Metadata = {
  title: "Request an Appointment",
  description:
    "Request an appointment with Lung Disease Specialists in Fort Lauderdale, FL. Our team will contact you to confirm your pulmonary or sleep medicine consultation.",
};

const steps = [
  {
    num: "01",
    title: "Fill Out the Form",
    desc: "Provide your contact details, insurance type, and preferred date.",
  },
  {
    num: "02",
    title: "We'll Call You",
    desc: "Our staff will review your request and reach out within 1–2 business days.",
  },
  {
    num: "03",
    title: "Confirm Your Visit",
    desc: "We'll agree on an appointment time that works for both parties.",
  },
];

export default function AppointmentPage() {
  return (
    <>
      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap"
        rel="stylesheet"
      />

      <style>{`
        .appt-page  { font-family: 'DM Sans', sans-serif; }
        .appt-serif { font-family: 'DM Serif Display', serif; }
        .call-link {
          transition: color 0.2s ease, gap 0.2s ease;
        }
        .call-link:hover { color: #29C4BF !important; }
      `}</style>

      <div className="appt-page">

        {/* ── Hero ─────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{
            background: "linear-gradient(140deg, #0d1f52 0%, #1a3888 32%, #2B56C5 68%, #29C4BF 100%)",
          }}
        >
          <MedicalBackground variant="dark" />
          <Container className="relative py-20 md:py-28">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 flex-shrink-0" style={{ background: "#29C4BF" }} />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "#29C4BF" }}>
                  New Patients Welcome
                </span>
              </div>
              <h1 className="appt-serif text-5xl md:text-6xl leading-[1.1] text-white mb-5">
                Request an<br /><em>Appointment</em>
              </h1>
              <p className="text-lg max-w-lg" style={{ color: "rgba(255,255,255,0.72)", lineHeight: "1.8" }}>
                Complete the form below and our staff will contact you to confirm
                a convenient appointment time.
              </p>
            </div>
          </Container>
          <div className="absolute bottom-0 left-0 right-0 leading-none">
            <svg viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
              <path d="M0,56 L1440,56 L1440,20 C1200,52 960,4 720,20 C480,36 240,4 0,28 Z" fill="white" />
            </svg>
          </div>
        </section>

        {/* ── Main content ──────────────────────────────────── */}
        <section
          className="py-16 md:py-24"
          style={{ background: "linear-gradient(160deg, #f6f9ff 0%, #f0fafa 100%)" }}
        >
          <Container>
            <div className="grid lg:grid-cols-[1fr_380px] gap-10 max-w-5xl mx-auto items-start">

              {/* ── Left: form ─────────────────────────────── */}
              <div>

                {/* CureMD Online Booking card */}
                <div
                  className="rounded-xl p-5 mb-7 flex flex-col sm:flex-row gap-4 items-start sm:items-center"
                  style={{
                    background: "linear-gradient(135deg, #eef2fb 0%, #eef9f9 100%)",
                    border: "1px solid #acc2ef",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #2B56C5, #1aaead)" }}
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="white" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-0.5" style={{ color: "#1aaead" }}>
                      Fastest Option
                    </p>
                    <p className="text-sm font-bold mb-0.5" style={{ color: "#122868" }}>
                      Book Online via CureMD Patient Portal
                    </p>
                    <p className="text-xs mb-3" style={{ color: "#525252" }}>
                      Schedule directly — no phone call needed, available 24/7.
                    </p>
                    <a
                      href={CUREMD_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white"
                      style={{ background: "#2B56C5" }}
                    >
                      Open Patient Portal
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex-1 h-px" style={{ background: "#e5e5e5" }} />
                  <span className="text-xs font-medium" style={{ color: "#a3a3a3" }}>or fill out the request form</span>
                  <div className="flex-1 h-px" style={{ background: "#e5e5e5" }} />
                </div>

                {/* Section label */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-10 flex-shrink-0" style={{ background: "#29C4BF" }} />
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "#29C4BF" }}>
                    Appointment Request
                  </span>
                </div>

                {/* Notice banner */}
                <div
                  className="rounded-xl p-4 mb-7 flex gap-3"
                  style={{ background: "#eef2fb", border: "1px solid #d5e1f7" }}
                >
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="#2B56C5" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <div className="text-sm" style={{ color: "#1a3888" }}>
                    <p className="font-semibold mb-0.5">This is a request, not a confirmed appointment.</p>
                    <p style={{ color: "#2B56C5" }}>
                      Our staff will review your request and call you to schedule a
                      confirmed time that works for both parties.
                    </p>
                  </div>
                </div>

                {/* Form card */}
                <div
                  className="bg-white rounded-2xl p-7 md:p-8"
                  style={{ boxShadow: "0 2px 24px -4px rgba(43, 86, 197, 0.10)" }}
                >
                  <AppointmentForm />
                </div>

                {/* Alternative contact */}
                <div
                  className="mt-7 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                  style={{ background: "white", border: "1px solid #f0f0f0" }}
                >
                  <p className="text-sm" style={{ color: "#737373" }}>
                    Prefer to speak with someone directly?
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <a
                      href="tel:+19547716047"
                      className="call-link inline-flex items-center gap-2 text-sm font-semibold whitespace-nowrap"
                      style={{ color: "#2B56C5" }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                      (954) 771-6047
                    </a>
                    <span className="hidden sm:inline text-xs" style={{ color: "#d4d4d4" }}>|</span>
                    <span className="text-xs whitespace-nowrap" style={{ color: "#a3a3a3" }}>Mon – Fri: 9:00 AM – 5:00 PM</span>
                  </div>
                </div>
              </div>

              {/* ── Right: sidebar ─────────────────────────── */}
              <div className="space-y-5 lg:sticky lg:top-8">

                {/* What to expect */}
                <div
                  className="bg-white rounded-2xl p-6"
                  style={{ boxShadow: "0 2px 16px -4px rgba(43, 86, 197, 0.08)" }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-8 flex-shrink-0" style={{ background: "#29C4BF" }} />
                    <p className="text-xs font-semibold tracking-[0.15em] uppercase" style={{ color: "#29C4BF" }}>
                      What to Expect
                    </p>
                  </div>
                  <div className="space-y-5">
                    {steps.map((step, i) => (
                      <div key={step.num} className="flex gap-4">
                        <div
                          className="appt-serif text-lg flex-shrink-0 w-8 leading-none pt-0.5"
                          style={{ color: i === 0 ? "#2B56C5" : "#d5e1f7" }}
                        >
                          {step.num}
                        </div>
                        <div>
                          <p className="text-sm font-semibold mb-0.5" style={{ color: "#122868" }}>
                            {step.title}
                          </p>
                          <p className="text-xs leading-relaxed" style={{ color: "#737373" }}>
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Office hours */}
                <div
                  className="bg-white rounded-2xl p-6"
                  style={{ boxShadow: "0 2px 16px -4px rgba(43, 86, 197, 0.08)" }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "#eef9f9" }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="#29C4BF" strokeWidth={1.75} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold" style={{ color: "#122868" }}>Office Hours</p>
                  </div>
                  <div className="space-y-2.5">
                    {[
                      { day: "Monday – Friday", hours: "9:00 AM – 5:00 PM", open: true },
                      { day: "Saturday", hours: "Closed", open: false },
                      { day: "Sunday", hours: "Closed", open: false },
                    ].map((row) => (
                      <div key={row.day} className="flex items-center justify-between">
                        <span className="text-xs" style={{ color: "#737373" }}>{row.day}</span>
                        <span
                          className="text-xs font-semibold"
                          style={{ color: row.open ? "#122868" : "#a3a3a3" }}
                        >
                          {row.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div
                    className="mt-5 pt-5"
                    style={{ borderTop: "1px solid #f5f5f5" }}
                  >
                    <a
                      href="tel:+19547716047"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold"
                      style={{ background: "#eef2fb", color: "#2B56C5" }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                      (954) 771-6047
                    </a>
                  </div>
                </div>

                {/* Location quick card */}
                <div
                  className="rounded-2xl p-5 flex items-start gap-3"
                  style={{ background: "linear-gradient(135deg, #eef2fb 0%, #eef9f9 100%)", border: "1px solid #e8f0fe" }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "white" }}
                  >
                    <svg className="w-4 h-4" fill="#29C4BF" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold mb-0.5" style={{ color: "#122868" }}>
                      6405 N Federal Hwy, Suite 405
                    </p>
                    <p className="text-xs" style={{ color: "#737373" }}>Fort Lauderdale, FL 33308</p>
                  </div>
                </div>

                {/* Leave a Review card */}
                <div
                  className="bg-white rounded-2xl p-6 text-center"
                  style={{ boxShadow: "0 2px 16px -4px rgba(43, 86, 197, 0.08)" }}
                >
                  <div className="flex items-center gap-3 mb-5 justify-center">
                    <div className="h-px w-8 flex-shrink-0" style={{ background: "#29C4BF" }} />
                    <p className="text-xs font-semibold tracking-[0.15em] uppercase" style={{ color: "#29C4BF" }}>
                      Leave a Review
                    </p>
                    <div className="h-px w-8 flex-shrink-0" style={{ background: "#29C4BF" }} />
                  </div>
                  <p className="text-xs mb-5" style={{ color: "#737373" }}>
                    Had a great experience? Scan the QR code with your phone camera to leave us a Google review.
                  </p>
                  <div className="flex justify-center mb-4 p-3 rounded-xl inline-block" style={{ background: "#f6f9ff" }}>
                    <ReviewQRCode size={130} />
                  </div>
                  <p className="text-xs font-medium mb-3" style={{ color: "#a3a3a3" }}>
                    Scan with your phone camera
                  </p>
                  <a
                    href="https://www.google.com/maps?cid=15905943121519007762"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold"
                    style={{ color: "#2B56C5" }}
                  >
                    Or click here on desktop
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </div>

              </div>
            </div>
          </Container>
        </section>

      </div>
    </>
  );
}
