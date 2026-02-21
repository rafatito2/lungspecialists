import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import MedicalBackground from "@/components/ui/MedicalBackground";
import { doctors } from "@/data/doctors";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Dr. David Romero Fischmann and Dr. Eric Palma, board-certified pulmonologists at Lung Disease Specialists in Fort Lauderdale, FL. Learn about our practice and commitment to patient care.",
};

const values = [
  {
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Evidence-Based Care",
    desc: "Our physicians stay at the forefront of pulmonary medicine, applying the latest clinical research to deliver effective, proven treatments.",
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Patient-Centered",
    desc: "We take the time to listen, understand your concerns, and develop personalized care plans that address your unique needs and lifestyle.",
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.798-1.414 2.798H4.212c-1.444 0-2.414-1.798-1.414-2.798L4.2 15.3" />
      </svg>
    ),
    title: "Comprehensive Diagnostics",
    desc: "From pulmonary function testing to sleep studies, we offer on-site diagnostics for a complete and convenient continuum of care.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap"
        rel="stylesheet"
      />

      {/* Page-scoped styles */}
      <style>{`
        .about-page { font-family: 'DM Sans', sans-serif; }
        .about-serif { font-family: 'DM Serif Display', serif; }

        /* Value cards */
        .value-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .value-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 40px -8px rgba(43, 86, 197, 0.13);
        }
        .value-card .card-icon {
          transition: background 0.3s ease, color 0.3s ease;
        }
        .value-card:hover .card-icon {
          background: #d8f5f4 !important;
          color: #29C4BF !important;
        }
        .value-card .accent-line {
          width: 0;
          transition: width 0.5s ease;
        }
        .value-card:hover .accent-line {
          width: 100%;
        }

        /* Doctor cards */
        .doctor-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .doctor-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 48px -8px rgba(43, 86, 197, 0.16);
        }
        .doctor-photo-ring {
          transition: box-shadow 0.35s ease;
        }
        .doctor-card:hover .doctor-photo-ring {
          box-shadow: 0 0 0 3px white, 0 0 0 6px #29C4BF;
        }

        /* Stat hover */
        .stat-block { transition: color 0.3s ease; }
        .stat-block .stat-num { transition: color 0.3s ease; }
        .stat-block:hover .stat-num { color: #29C4BF; }

        /* CTA button */
        .cta-btn {
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, color 0.2s ease;
        }
        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(0,0,0,0.22);
          background: #eef9f9 !important;
          color: #2B56C5 !important;
        }
      `}</style>

      <div className="about-page">

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
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 flex-shrink-0" style={{ background: "#29C4BF" }} />
                <span
                  className="text-xs font-semibold tracking-[0.2em] uppercase"
                  style={{ color: "#29C4BF" }}
                >
                  About Our Practice
                </span>
              </div>
              {/* Headline */}
              <h1
                className="about-serif text-5xl md:text-6xl leading-[1.1] text-white mb-6"
              >
                Exceptional Care<br />
                <em>for Every Breath</em>
              </h1>
              <p
                className="text-lg max-w-lg"
                style={{ color: "rgba(255,255,255,0.72)", lineHeight: "1.8" }}
              >
                Board-certified pulmonologists dedicated to compassionate,
                evidence-based treatment for respiratory conditions and sleep
                disorders throughout Fort Lauderdale and South Florida.
              </p>
            </div>
          </Container>
          {/* Wave */}
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

        {/* ── Stats strip ──────────────────────────────────── */}
        <section className="bg-white py-10">
          <Container>
            <div
              className="grid grid-cols-2 md:grid-cols-4 max-w-3xl mx-auto rounded-2xl overflow-hidden"
              style={{ border: "1px solid #f0f0f0" }}
            >
              {[
                { value: "FCCP", label: "Fellow, American College\nof Chest Physicians" },
                { value: "ABIM", label: "American Board of\nInternal Medicine" },
                { value: "On-site", label: "Pulmonary &\nSleep Diagnostics" },
                { value: "South FL", label: "Fort Lauderdale\n& Broward County" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="stat-block text-center py-7 px-4"
                  style={{
                    borderRight: i < 3 ? "1px solid #f0f0f0" : undefined,
                  }}
                >
                  <div
                    className="about-serif text-3xl stat-num"
                    style={{ color: "#2B56C5" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs mt-2 whitespace-pre-line leading-relaxed"
                    style={{ color: "#737373" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Mission ──────────────────────────────────────── */}
        <section
          className="py-20 md:py-28"
          style={{
            background: "linear-gradient(160deg, #f6f9ff 0%, #f0fafa 100%)",
          }}
        >
          <Container>
            <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
              {/* Quote block */}
              <div className="relative">
                <div
                  className="rounded-2xl p-8 md:p-10"
                  style={{
                    background: "white",
                    borderLeft: "4px solid #29C4BF",
                    boxShadow: "0 4px 32px -8px rgba(43, 86, 197, 0.10)",
                  }}
                >
                  <svg
                    className="mb-5"
                    width="36"
                    height="27"
                    viewBox="0 0 36 27"
                    fill="none"
                  >
                    <path
                      d="M0 27V16.2C0 11.7 1.24 8 3.71 5.07 6.19 1.69 9.9 0 14.85 0v5.4c-2.7 0-4.73.79-6.08 2.36-1.35 1.58-2.02 3.49-2.02 5.74V15h7.43V27H0zm20.7 0V16.2c0-4.5 1.24-8.2 3.71-11.13C26.89 1.69 30.6 0 35.55 0v5.4c-2.7 0-4.73.79-6.08 2.36-1.35 1.58-2.02 3.49-2.02 5.74V15h7.43V27H20.7z"
                      fill="#d5e1f7"
                    />
                  </svg>
                  <blockquote
                    className="about-serif text-xl md:text-2xl leading-snug"
                    style={{ color: "#1a3888", fontStyle: "italic" }}
                  >
                    Providing comprehensive, compassionate care — where every patient
                    receives the time and attention they deserve.
                  </blockquote>
                  <p
                    className="mt-6 pt-5 text-sm font-medium"
                    style={{
                      color: "#29C4BF",
                      borderTop: "1px solid #eef9f9",
                    }}
                  >
                    — Our Guiding Principle
                  </p>
                </div>
                {/* Decorative blobs */}
                <div
                  className="absolute -bottom-5 -right-5 w-24 h-24 rounded-full pointer-events-none -z-10"
                  style={{ background: "radial-gradient(circle, #d5e1f7 0%, transparent 72%)" }}
                />
                <div
                  className="absolute -top-4 -left-4 w-16 h-16 rounded-full pointer-events-none -z-10"
                  style={{ background: "radial-gradient(circle, #d8f5f4 0%, transparent 72%)" }}
                />
              </div>

              {/* Text */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-10 flex-shrink-0" style={{ background: "#29C4BF" }} />
                  <span
                    className="text-xs font-semibold tracking-[0.2em] uppercase"
                    style={{ color: "#29C4BF" }}
                  >
                    Our Mission
                  </span>
                </div>
                <h2
                  className="about-serif text-3xl md:text-4xl mb-6"
                  style={{ color: "#122868" }}
                >
                  Dedicated to Your Respiratory Health
                </h2>
                <div
                  className="space-y-4 text-base"
                  style={{ color: "#525252", lineHeight: "1.85" }}
                >
                  <p>
                    At Lung Disease Specialists Corporation, we are committed to
                    providing comprehensive, compassionate care for patients with
                    respiratory conditions and sleep disorders. Our board-certified
                    physicians combine years of experience with the latest medical
                    advances to deliver personalized treatment plans.
                  </p>
                  <p>
                    Located in Fort Lauderdale, Florida, our practice serves patients
                    throughout Broward County and the greater South Florida area. We
                    offer on-site pulmonary function testing and sleep studies for
                    your convenience.
                  </p>
                  <p>
                    We believe in building lasting relationships with our patients —
                    taking the time to listen, educate, and develop treatment plans
                    that address each patient&apos;s unique needs and goals.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ── Values / Approach ────────────────────────────── */}
        <section className="py-20 md:py-28 bg-white">
          <Container>
            {/* Section label */}
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="h-px w-10" style={{ background: "#29C4BF" }} />
                <span
                  className="text-xs font-semibold tracking-[0.2em] uppercase"
                  style={{ color: "#29C4BF" }}
                >
                  Our Approach
                </span>
                <div className="h-px w-10" style={{ background: "#29C4BF" }} />
              </div>
              <h2
                className="about-serif text-3xl md:text-4xl"
                style={{ color: "#122868" }}
              >
                How We Care for You
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {values.map((val) => (
                <div
                  key={val.title}
                  className="value-card rounded-2xl p-8"
                  style={{
                    border: "1px solid #f0f0f0",
                    background: "white",
                  }}
                >
                  <div
                    className="card-icon w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "#eef2fb", color: "#2B56C5" }}
                  >
                    {val.icon}
                  </div>
                  <h3
                    className="font-semibold text-lg mb-3"
                    style={{ color: "#122868" }}
                  >
                    {val.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#737373" }}>
                    {val.desc}
                  </p>
                  {/* Animated accent line */}
                  <div
                    className="mt-6 h-0.5 rounded-full overflow-hidden"
                    style={{ background: "#f5f5f5" }}
                  >
                    <div
                      className="accent-line h-full rounded-full"
                      style={{
                        background: "linear-gradient(to right, #2B56C5, #29C4BF)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Doctors ──────────────────────────────────────── */}
        <section
          className="relative py-20 md:py-28 overflow-hidden"
          style={{
            background: "linear-gradient(160deg, #f0f4ff 0%, #eef9f9 100%)",
          }}
        >
          <MedicalBackground variant="light" />
          <Container className="relative">
            {/* Section label */}
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="h-px w-10" style={{ background: "#29C4BF" }} />
                <span
                  className="text-xs font-semibold tracking-[0.2em] uppercase"
                  style={{ color: "#29C4BF" }}
                >
                  Our Team
                </span>
                <div className="h-px w-10" style={{ background: "#29C4BF" }} />
              </div>
              <h2
                className="about-serif text-3xl md:text-4xl"
                style={{ color: "#122868" }}
              >
                Meet Our Physicians
              </h2>
              <p className="mt-3 text-sm" style={{ color: "#737373" }}>
                Board-certified specialists committed to your respiratory health
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              {doctors.map((doctor) => (
                <article
                  key={doctor.id}
                  className="doctor-card bg-white rounded-2xl overflow-hidden"
                  style={{
                    boxShadow: "0 2px 16px -4px rgba(43, 86, 197, 0.08)",
                  }}
                >
                  {/* Gradient top bar */}
                  <div
                    className="h-1.5"
                    style={{
                      background: "linear-gradient(to right, #2B56C5, #29C4BF)",
                    }}
                  />

                  <div className="p-7 md:p-8">
                    {/* Photo + name row */}
                    <div className="flex items-center gap-5 mb-6">
                      <div className="relative flex-shrink-0">
                        <div
                          className="doctor-photo-ring w-20 h-20 rounded-full overflow-hidden"
                          style={{
                            boxShadow: "0 0 0 3px white, 0 0 0 5px #d5e1f7",
                          }}
                        >
                          {doctor.image ? (
                            <Image
                              src={doctor.image}
                              alt={`Photo of ${doctor.name}`}
                              width={80}
                              height={80}
                              className="w-full h-full object-cover object-top"
                            />
                          ) : (
                            <div
                              className="w-full h-full flex items-center justify-center"
                              style={{
                                background:
                                  "linear-gradient(135deg, #d5e1f7 0%, #eef9f9 100%)",
                              }}
                            >
                              <svg
                                className="w-9 h-9"
                                fill="none"
                                stroke="#2B56C5"
                                strokeWidth={1.5}
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                              </svg>
                            </div>
                          )}
                        </div>
                      </div>
                      <div>
                        <h3
                          className="font-semibold text-lg leading-snug"
                          style={{ color: "#122868" }}
                        >
                          {doctor.name}, {doctor.title}
                        </h3>
                        <p
                          className="text-sm font-medium mt-0.5"
                          style={{ color: "#29C4BF" }}
                        >
                          {doctor.role}
                        </p>
                      </div>
                    </div>

                    {/* Bio */}
                    <p
                      className="text-sm leading-relaxed mb-7"
                      style={{ color: "#525252" }}
                    >
                      {doctor.bio}
                    </p>

                    {/* Credentials */}
                    <div
                      className="pt-5"
                      style={{ borderTop: "1px solid #f0f0f0" }}
                    >
                      <p
                        className="text-xs font-semibold tracking-widest uppercase mb-4"
                        style={{ color: "#a3a3a3" }}
                      >
                        Credentials
                      </p>
                      <ul className="space-y-2.5">
                        {doctor.credentials.map((credential, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span
                              className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                              style={{ background: "#eef9f9" }}
                            >
                              <svg
                                width="10"
                                height="10"
                                fill="none"
                                stroke="#29C4BF"
                                strokeWidth="2.5"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 12.75l6 6 9-13.5"
                                />
                              </svg>
                            </span>
                            <span className="text-sm" style={{ color: "#525252" }}>
                              {credential}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
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
                className="about-serif text-4xl md:text-5xl text-white mb-5 leading-tight"
              >
                Ready to Breathe<br />
                <em>Better?</em>
              </h2>
              <p
                className="text-lg mb-10"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                We&apos;re accepting new patients and look forward to providing you
                with exceptional pulmonary and sleep medicine care.
              </p>
              <a
                href="/appointment"
                className="cta-btn inline-flex items-center gap-3 px-8 py-4 rounded-xl text-base font-semibold"
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
            </div>
          </Container>
        </section>

      </div>
    </>
  );
}
