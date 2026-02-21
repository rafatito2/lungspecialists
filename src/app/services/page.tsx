import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import MedicalBackground from "@/components/ui/MedicalBackground";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive pulmonary care, sleep medicine, sleep studies, and pulmonary function testing in Fort Lauderdale, FL. Expert diagnosis and treatment for lung conditions and sleep disorders.",
};

// Condition/feature tags per service
const extras: Record<string, { tags: string[] }> = {
  "pulmonary-care": {
    tags: ["Asthma", "COPD", "Emphysema", "Bronchitis", "Lung Infections", "Interstitial Lung Disease"],
  },
  "sleep-medicine": {
    tags: ["Sleep Apnea", "Insomnia", "Restless Leg Syndrome", "Narcolepsy"],
  },
  "pulmonary-function-testing": {
    tags: ["Spirometry", "Lung Volume Testing", "Diffusion Capacity", "On-site Testing"],
  },
};

const iconMap = {
  lungs: (
    <svg
      className="w-12 h-12"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 32 32"
    >
      <path d="M14,18c0,1.2,0,0.5,0,2c0,6.8-2,7.3-5,7.3c-2.8,0-6,5.8-6-3.8S8.2,6,11.3,6c0.8,0,1.5,0.3,1.9,1.9" />
      <path d="M18,18c0,1.2,0,0.5,0,2c0,6.8,2,7.3,5,7.3c2.8,0,6,5.8,6-3.8S23.8,6,20.8,6c-0.8,0-1.5,0.3-1.9,1.9" />
      <path d="M16,2v6.6c0,1.5-0.7,3-1.9,4L10,16" />
      <path d="M16,8.6c0,1.5,0.7,3,1.9,4L22,16" />
    </svg>
  ),
  moon: (
    <svg
      className="w-12 h-12"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
    >
      <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  ),
  chart: (
    <svg
      className="w-12 h-12"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
    >
      <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
};

export default function ServicesPage() {
  return (
    <>
      {/* Google Fonts — same as About page */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap"
        rel="stylesheet"
      />

      <style>{`
        .services-page { font-family: 'DM Sans', sans-serif; }
        .services-serif { font-family: 'DM Serif Display', serif; }

        /* Service cards */
        .service-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 48px -8px rgba(43, 86, 197, 0.14);
        }
        .service-card .service-sidebar {
          transition: filter 0.3s ease;
        }
        .service-card:hover .service-sidebar {
          filter: brightness(1.1);
        }
        .service-card .card-btn {
          transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .service-card .card-btn:hover {
          background: #1a3888 !important;
          transform: translateY(-1px);
          box-shadow: 0 4px 14px rgba(26, 56, 136, 0.3);
        }

        /* CTA buttons */
        .cta-btn {
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, color 0.2s ease;
        }
        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(0,0,0,0.22);
          background: #eef9f9 !important;
          color: #2B56C5 !important;
        }
        .phone-btn {
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .phone-btn:hover {
          transform: translateY(-2px);
          background: rgba(255,255,255,0.15) !important;
        }
      `}</style>

      <div className="services-page">

        {/* ── Hero ─────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{
            background: "linear-gradient(140deg, #0d1f52 0%, #1a3888 32%, #2B56C5 68%, #29C4BF 100%)",
          }}
        >
          <MedicalBackground variant="dark" />
          <Container className="relative py-24 md:py-32">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 flex-shrink-0" style={{ background: "#29C4BF" }} />
                <span
                  className="text-xs font-semibold tracking-[0.2em] uppercase"
                  style={{ color: "#29C4BF" }}
                >
                  What We Treat
                </span>
              </div>
              <h1
                className="services-serif text-5xl md:text-6xl leading-[1.1] text-white mb-6"
              >
                Comprehensive<br />
                <em>Pulmonary & Sleep</em><br />
                Medicine
              </h1>
              <p
                className="text-lg max-w-lg"
                style={{ color: "rgba(255,255,255,0.72)", lineHeight: "1.8" }}
              >
                From diagnosis to ongoing treatment, we offer expert care for lung
                conditions and sleep disorders — all under one roof in Fort Lauderdale.
              </p>
            </div>
          </Container>
          {/* Wave divider */}
          <div className="absolute bottom-0 left-0 right-0 leading-none">
            <svg
              viewBox="0 0 1440 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "block", width: "100%" }}
            >
              <path
                d="M0,56 L1440,56 L1440,20 C1200,52 960,4 720,20 C480,36 240,4 0,28 Z"
                fill="white"
              />
            </svg>
          </div>
        </section>

        {/* ── Services list ─────────────────────────────────── */}
        <section
          className="py-20 md:py-28"
          style={{ background: "linear-gradient(160deg, #f6f9ff 0%, #f0fafa 100%)" }}
        >
          <Container>
            {/* Section heading */}
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="h-px w-10" style={{ background: "#29C4BF" }} />
                <span
                  className="text-xs font-semibold tracking-[0.2em] uppercase"
                  style={{ color: "#29C4BF" }}
                >
                  Our Services
                </span>
                <div className="h-px w-10" style={{ background: "#29C4BF" }} />
              </div>
              <h2
                className="services-serif text-3xl md:text-4xl"
                style={{ color: "#122868" }}
              >
                Expert Care, All in One Place
              </h2>
              <p
                className="mt-3 text-base max-w-xl mx-auto"
                style={{ color: "#737373" }}
              >
                Our board-certified specialists provide a full continuum of pulmonary
                and sleep medicine services at our Fort Lauderdale office.
              </p>
            </div>

            {/* Cards */}
            <div className="space-y-6 max-w-5xl mx-auto">
              {services.map((service, index) => {
                const extra = extras[service.id] ?? { tags: [] };
                return (
                  <article
                    key={service.id}
                    className="service-card flex flex-col lg:flex-row rounded-2xl overflow-hidden bg-white"
                    style={{ boxShadow: "0 2px 16px -4px rgba(43, 86, 197, 0.08)" }}
                  >
                    {/* Gradient icon sidebar */}
                    <div
                      className="service-sidebar lg:w-52 flex-shrink-0 px-10 py-10 lg:py-0 flex flex-row lg:flex-col items-center justify-center gap-6 relative overflow-hidden"
                      style={{
                        background: "linear-gradient(160deg, #122868 0%, #2B56C5 100%)",
                      }}
                    >
                      {/* Large faded number watermark */}
                      <span
                        className="services-serif absolute bottom-2 right-3 leading-none select-none pointer-events-none"
                        style={{
                          fontSize: "6rem",
                          color: "rgba(255,255,255,0.07)",
                          lineHeight: 1,
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {/* Icon */}
                      <div style={{ color: "rgba(255,255,255,0.90)" }}>
                        {iconMap[service.icon]}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-10 flex flex-col justify-center flex-1">
                      {/* Eyebrow number */}
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className="text-xs font-semibold tracking-[0.2em] uppercase"
                          style={{ color: "#29C4BF" }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="h-px w-6" style={{ background: "#29C4BF" }} />
                      </div>

                      {/* Title */}
                      <h2
                        className="services-serif text-2xl md:text-3xl mb-1"
                        style={{ color: "#122868" }}
                      >
                        {service.title}
                      </h2>

                      {/* Short description */}
                      <p
                        className="text-sm font-medium mb-5"
                        style={{ color: "#2B56C5" }}
                      >
                        {service.shortDescription}
                      </p>

                      {/* Gradient divider */}
                      <div
                        className="mb-5 h-px w-12 rounded-full"
                        style={{
                          background: "linear-gradient(to right, #2B56C5, #29C4BF)",
                        }}
                      />

                      {/* Full description */}
                      <p
                        className="text-sm leading-relaxed mb-6"
                        style={{ color: "#525252" }}
                      >
                        {service.fullDescription}
                      </p>

                      {/* Condition / feature tags */}
                      {extra.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-7">
                          {extra.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs font-medium px-3 py-1 rounded-full"
                              style={{
                                background: "#eef9f9",
                                color: "#118885",
                                border: "1px solid #d8f5f4",
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Button */}
                      <div>
                        <a
                          href="/appointment"
                          className="card-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold"
                          style={{
                            background: "#2B56C5",
                            color: "white",
                          }}
                        >
                          Schedule a Consultation
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden py-24"
          style={{
            background:
              "linear-gradient(140deg, #0d1f52 0%, #1a3888 35%, #2B56C5 68%, #1aaead 100%)",
          }}
        >
          <MedicalBackground variant="dark" />
          <Container className="relative text-center">
            <div className="max-w-xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div
                  className="h-px w-10"
                  style={{ background: "rgba(255,255,255,0.25)" }}
                />
                <span
                  className="text-xs font-semibold tracking-[0.2em] uppercase"
                  style={{ color: "#29C4BF" }}
                >
                  New Patients Welcome
                </span>
                <div
                  className="h-px w-10"
                  style={{ background: "rgba(255,255,255,0.25)" }}
                />
              </div>
              <h2
                className="services-serif text-4xl md:text-5xl text-white mb-5 leading-tight"
              >
                Ready to Schedule<br />
                <em>Your Appointment?</em>
              </h2>
              <p
                className="text-lg mb-10"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                Request an appointment online or call our office directly. We look
                forward to caring for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/appointment"
                  className="cta-btn inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-semibold"
                  style={{
                    background: "white",
                    color: "#1a3888",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                  }}
                >
                  Request an Appointment
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>
                <a
                  href="tel:+19547716047"
                  className="phone-btn inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-semibold"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.25)",
                  }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  Call Us
                </a>
              </div>
            </div>
          </Container>
        </section>

      </div>
    </>
  );
}
