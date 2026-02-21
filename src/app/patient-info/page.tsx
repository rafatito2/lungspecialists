import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import MedicalBackground from "@/components/ui/MedicalBackground";
import { insuranceProviders, insuranceNote } from "@/data/insurance";

export const metadata: Metadata = {
  title: "Patient Information",
  description:
    "Find important patient information including accepted insurance plans, office location in Fort Lauderdale, contact details, fax number, and office hours.",
};

const policies = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Bring Your Medication List",
    desc: "You must bring a complete list of all your medications (prescribed and over the counter) to every visit. This is required to prevent medication errors and adverse interactions. If you do not have your medication list, you will need to reschedule your appointment.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "24-Hour Cancellation Policy",
    desc: "Please provide at least 24 hours\u2019 notice if you need to cancel or reschedule. A $25.00 fee will be charged for missed appointments (\u201cno shows\u201d) without proper notice. This fee is not covered by insurance and must be paid before your next visit.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Insurance Authorization",
    desc: "If your insurance plan requires a referral or prior authorization, it is your responsibility to obtain it before your appointment. Please contact your primary care physician and insurance company to verify your requirements. Failure to obtain authorization may result in a claim denial.",
  },
];

export default function PatientInfoPage() {
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
        .pi-page  { font-family: 'DM Sans', sans-serif; }
        .pi-serif { font-family: 'DM Serif Display', serif; }

        .policy-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .policy-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px -8px rgba(43, 86, 197, 0.12);
        }
        .policy-card .card-icon { transition: background 0.3s ease, color 0.3s ease; }
        .policy-card:hover .card-icon { background: #d8f5f4 !important; color: #29C4BF !important; }

        .insurance-pill { transition: border-color 0.2s ease, background 0.2s ease; }
        .insurance-pill:hover { border-color: #29C4BF !important; background: #eef9f9 !important; }

        .cta-btn {
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, color 0.2s ease;
        }
        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(0,0,0,0.22);
          background: #eef9f9 !important; color: #2B56C5 !important;
        }
        .phone-btn {
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .phone-btn:hover {
          transform: translateY(-2px);
          background: rgba(255,255,255,0.18) !important;
        }
        .verify-btn {
          transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;
        }
        .verify-btn:hover {
          transform: translateY(-1px);
          background: #d8f5f4 !important;
          color: #118885 !important;
        }
        .contact-link { transition: color 0.2s ease; }
        .contact-link:hover { color: #29C4BF !important; }
        .directions-btn { transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease; }
        .directions-btn:hover {
          transform: translateY(-1px);
          background: #d8f5f4 !important; color: #118885 !important;
        }
      `}</style>

      <div className="pi-page">

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
                  Before Your Visit
                </span>
              </div>
              <h1 className="pi-serif text-5xl md:text-6xl leading-[1.1] text-white mb-5">
                Patient<br /><em>Information</em>
              </h1>
              <p className="text-lg max-w-lg" style={{ color: "rgba(255,255,255,0.72)", lineHeight: "1.8" }}>
                Everything you need to know before your visit — office location,
                contact details, insurance, and important policies.
              </p>
            </div>
          </Container>
          <div className="absolute bottom-0 left-0 right-0 leading-none">
            <svg viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
              <path d="M0,56 L1440,56 L1440,20 C1200,52 960,4 720,20 C480,36 240,4 0,28 Z" fill="white" />
            </svg>
          </div>
        </section>

        {/* ── Contact & Location ────────────────────────────── */}
        <section className="py-16 md:py-24 bg-white">
          <Container>
            {/* Section heading */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="h-px w-10" style={{ background: "#29C4BF" }} />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "#29C4BF" }}>
                  Contact &amp; Location
                </span>
                <div className="h-px w-10" style={{ background: "#29C4BF" }} />
              </div>
              <h2 className="pi-serif text-3xl md:text-4xl" style={{ color: "#122868" }}>
                Find &amp; Reach Us
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 max-w-5xl mx-auto">

              {/* Location card */}
              <div
                className="bg-white rounded-2xl overflow-hidden"
                style={{ boxShadow: "0 2px 16px -4px rgba(43, 86, 197, 0.08)", border: "1px solid #f0f0f0" }}
              >
                <div className="h-1.5" style={{ background: "linear-gradient(to right, #2B56C5, #29C4BF)" }} />
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#eef9f9" }}>
                      <svg className="w-5 h-5" fill="#29C4BF" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h2 className="text-base font-semibold" style={{ color: "#122868" }}>Office Location</h2>
                  </div>

                  <address className="not-italic mb-5">
                    <p className="font-semibold text-base mb-1" style={{ color: "#122868" }}>Lung Disease Specialists</p>
                    <p className="text-sm" style={{ color: "#737373" }}>6405 N Federal Hwy, Suite 405</p>
                    <p className="text-sm" style={{ color: "#737373" }}>Fort Lauderdale, FL 33308</p>
                  </address>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=6405+N+Federal+Hwy+Suite+405+Fort+Lauderdale+FL+33308"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="directions-btn inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold mb-5"
                    style={{ background: "#eef2fb", color: "#2B56C5" }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Get Directions
                  </a>

                  {/* Embedded map */}
                  <div className="h-48 rounded-xl overflow-hidden" style={{ border: "1px solid #f0f0f0" }}>
                    <iframe
                      title="Office Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.5!2d-80.1199!3d26.1765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s6405+N+Federal+Hwy+Fort+Lauderdale+FL+33308!5e0!3m2!1sen!2sus!4v1"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>

              {/* Contact card */}
              <div
                className="bg-white rounded-2xl overflow-hidden"
                style={{ boxShadow: "0 2px 16px -4px rgba(43, 86, 197, 0.08)", border: "1px solid #f0f0f0" }}
              >
                <div className="h-1.5" style={{ background: "linear-gradient(to right, #2B56C5, #29C4BF)" }} />
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#eef2fb" }}>
                      <svg className="w-5 h-5" fill="none" stroke="#2B56C5" strokeWidth={1.75} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <h2 className="text-base font-semibold" style={{ color: "#122868" }}>Contact Us</h2>
                  </div>

                  <div className="space-y-5">
                    {/* Phone */}
                    <div className="flex items-center justify-between pb-4" style={{ borderBottom: "1px solid #f5f5f5" }}>
                      <div>
                        <p className="text-xs font-semibold tracking-[0.1em] uppercase mb-1" style={{ color: "#a3a3a3" }}>Phone</p>
                        <a href="tel:+19547716047" className="contact-link text-lg font-semibold" style={{ color: "#122868" }}>
                          (954) 771-6047
                        </a>
                      </div>
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "#eef2fb" }}>
                        <svg className="w-4 h-4" fill="none" stroke="#2B56C5" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                      </div>
                    </div>

                    {/* Fax — prominent */}
                    <div
                      className="rounded-xl p-4"
                      style={{ background: "linear-gradient(135deg, #eef9f9 0%, #f0f4ff 100%)", border: "1px solid #d8f5f4" }}
                    >
                      <p className="text-xs font-semibold tracking-[0.1em] uppercase mb-1" style={{ color: "#29C4BF" }}>
                        Fax — Referrals &amp; Medical Records
                      </p>
                      <p className="text-2xl font-semibold" style={{ color: "#122868" }}>(954) 771-2927</p>
                    </div>

                    {/* Email */}
                    <div className="flex items-center justify-between pb-4" style={{ borderBottom: "1px solid #f5f5f5" }}>
                      <div>
                        <p className="text-xs font-semibold tracking-[0.1em] uppercase mb-1" style={{ color: "#a3a3a3" }}>Email</p>
                        <a href="mailto:lungdr123@gmail.com" className="contact-link text-sm font-semibold" style={{ color: "#122868" }}>
                          lungdr123@gmail.com
                        </a>
                      </div>
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "#eef2fb" }}>
                        <svg className="w-4 h-4" fill="none" stroke="#2B56C5" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                      </div>
                    </div>

                    {/* Office hours */}
                    <div>
                      <p className="text-xs font-semibold tracking-[0.1em] uppercase mb-3" style={{ color: "#a3a3a3" }}>Office Hours</p>
                      <div className="space-y-2">
                        {[
                          { day: "Monday – Friday", hours: "9:00 AM – 5:00 PM", open: true },
                          { day: "Saturday", hours: "Closed", open: false },
                          { day: "Sunday", hours: "Closed", open: false },
                        ].map((row) => (
                          <div key={row.day} className="flex items-center justify-between">
                            <span className="text-sm" style={{ color: "#525252" }}>{row.day}</span>
                            <span
                              className="text-sm font-semibold"
                              style={{ color: row.open ? "#122868" : "#a3a3a3" }}
                            >
                              {row.hours}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* ── Patient Policies ──────────────────────────────── */}
        <section
          className="py-16 md:py-24"
          style={{ background: "linear-gradient(160deg, #f6f9ff 0%, #f0fafa 100%)" }}
        >
          <Container>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="h-px w-10" style={{ background: "#29C4BF" }} />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "#29C4BF" }}>
                  Before You Visit
                </span>
                <div className="h-px w-10" style={{ background: "#29C4BF" }} />
              </div>
              <h2 className="pi-serif text-3xl md:text-4xl" style={{ color: "#122868" }}>
                Important Patient Policies
              </h2>
              <p className="mt-3 text-base max-w-xl mx-auto" style={{ color: "#737373" }}>
                Please review these policies before your visit
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
              {policies.map((policy) => (
                <div
                  key={policy.title}
                  className="policy-card bg-white rounded-2xl p-7"
                  style={{ boxShadow: "0 2px 16px -4px rgba(43, 86, 197, 0.07)", border: "1px solid #f0f0f0" }}
                >
                  <div
                    className="card-icon w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "#eef2fb", color: "#2B56C5" }}
                  >
                    {policy.icon}
                  </div>
                  <h3 className="font-semibold text-base mb-3" style={{ color: "#122868" }}>
                    {policy.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#737373" }}>
                    {policy.desc}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Insurance ─────────────────────────────────────── */}
        <section className="relative py-16 md:py-24 overflow-hidden bg-white">
          <MedicalBackground variant="light" />
          <Container className="relative">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="h-px w-10" style={{ background: "#29C4BF" }} />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "#29C4BF" }}>
                  Coverage
                </span>
                <div className="h-px w-10" style={{ background: "#29C4BF" }} />
              </div>
              <h2 className="pi-serif text-3xl md:text-4xl" style={{ color: "#122868" }}>
                Accepted Insurance Plans
              </h2>
              <p className="mt-3 text-base max-w-xl mx-auto" style={{ color: "#737373" }}>
                We accept most major insurance plans
              </p>
            </div>

            {/* Insurance grid */}
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-5xl mx-auto mb-8">
              {insuranceProviders.map((provider) => (
                <div
                  key={provider.name}
                  className="insurance-pill bg-white rounded-xl px-4 py-3 flex items-center gap-2.5"
                  style={{ border: "1px solid #f0f0f0", boxShadow: "0 1px 4px rgba(43,86,197,0.04)" }}
                >
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "#eef9f9" }}
                  >
                    <svg width="10" height="10" fill="none" stroke="#29C4BF" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium" style={{ color: "#404040" }}>
                    {provider.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Insurance note */}
            <div className="max-w-3xl mx-auto mb-8">
              <div
                className="rounded-xl p-5 flex gap-3"
                style={{ background: "#fffbeb", border: "1px solid #fde68a" }}
              >
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="#d97706" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <p className="text-sm leading-relaxed" style={{ color: "#92400e" }}>
                  {insuranceNote}
                </p>
              </div>
            </div>

            {/* Verify insurance CTA */}
            <div className="text-center">
              <p className="text-sm mb-4" style={{ color: "#737373" }}>
                Don&apos;t see your insurance listed? Contact us to verify coverage.
              </p>
              <a
                href="tel:+19547716047"
                className="verify-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold"
                style={{ background: "#eef2fb", color: "#2B56C5", border: "1px solid #d5e1f7" }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call to Verify Insurance
              </a>
            </div>
          </Container>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden py-24"
          style={{
            background: "linear-gradient(140deg, #0d1f52 0%, #1a3888 35%, #2B56C5 68%, #1aaead 100%)",
          }}
        >
          <MedicalBackground variant="dark" />
          <Container className="relative text-center">
            <div className="max-w-xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-10" style={{ background: "rgba(255,255,255,0.25)" }} />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "#29C4BF" }}>
                  New Patients Welcome
                </span>
                <div className="h-px w-10" style={{ background: "rgba(255,255,255,0.25)" }} />
              </div>
              <h2 className="pi-serif text-4xl md:text-5xl text-white mb-5 leading-tight">
                Ready to Schedule?<br />
                <em>We&apos;re Here to Help.</em>
              </h2>
              <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.65)" }}>
                Request an appointment online and our team will contact you to confirm.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/appointment"
                  className="cta-btn inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-semibold"
                  style={{ background: "white", color: "#1a3888", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}
                >
                  Request an Appointment
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a
                  href="tel:+19547716047"
                  className="phone-btn inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-semibold"
                  style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.25)" }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Call (954) 771-6047
                </a>
              </div>
            </div>
          </Container>
        </section>

      </div>
    </>
  );
}
