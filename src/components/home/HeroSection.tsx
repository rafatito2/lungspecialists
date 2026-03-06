'use client';

import { useEffect, useRef } from 'react';
import Container from "@/components/ui/Container";
import MedicalBackground from "@/components/ui/MedicalBackground";
import { useLungViewer } from "@/components/providers/LungViewerProvider";

export default function HeroSection() {
  const placeholderRef = useRef<HTMLDivElement>(null);
  const { registerPlaceholder } = useLungViewer();

  useEffect(() => {
    registerPlaceholder(placeholderRef.current);
    return () => registerPlaceholder(null);
  }, [registerPlaceholder]);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(140deg, #0d1f52 0%, #1a3888 32%, #2B56C5 68%, #29C4BF 100%)",
      }}
    >
      <MedicalBackground variant="dark" />

      <Container className="relative">
        <div className="hero-grid grid items-center py-16 sm:py-20 md:py-24 lg:py-32">

          {/* ── Left: text ─────────────────────────────── */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 flex-shrink-0" style={{ background: "#29C4BF" }} />
              <span
                className="text-xs font-semibold tracking-[0.2em] uppercase"
                style={{ color: "#29C4BF" }}
              >
                Fort Lauderdale, Florida
              </span>
            </div>

            {/* Headline */}
            <h1
              className="home-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] text-white mb-6"
            >
              Expert Pulmonary<br />
              <em>&amp; Sleep Medicine</em><br />
              Care
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg max-w-lg"
              style={{ color: "rgba(255,255,255,0.72)", lineHeight: "1.8" }}
            >
              Board-certified physicians providing comprehensive care for respiratory
              conditions and sleep disorders throughout Fort Lauderdale and South Florida.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href="/appointment"
                className="hero-btn-primary inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-semibold"
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
                className="hero-btn-outline inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-semibold"
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
                (954) 771-6047
              </a>
            </div>

            {/* Trust badge pills */}
            <div className="flex flex-wrap gap-3 mt-10">
              {[
                "Board Certified Physicians",
                "On-Site Sleep Studies",
                "Accepting New Patients",
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.85)",
                    border: "1px solid rgba(255,255,255,0.18)",
                  }}
                >
                  <svg
                    className="w-3.5 h-3.5 flex-shrink-0"
                    fill="#29C4BF"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: 3D lung model ────────────────────── */}
          <div className="hero-anim-col relative items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-xl aspect-square">

              {/* Outer soft halo */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(41,196,191,0.14) 0%, transparent 70%)",
                }}
              />

              {/* Circle backdrop — white center fading to soft teal at the rim */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  top: "-3%", left: "4%", right: "-10%", bottom: "0%",
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.82) 20%, rgba(200,238,248,0.72) 52%, rgba(120,210,228,0.45) 76%, rgba(41,196,191,0.12) 95%, transparent 100%)",
                  boxShadow:
                    "0 0 48px rgba(41,196,191,0.25), 0 0 96px rgba(41,196,191,0.10)",
                }}
              />

              {/* Placeholder — the persistent iframe from LungViewerProvider is
                  positioned over this div so it never reloads on navigation */}
              <div ref={placeholderRef} className="absolute inset-0" />

            </div>
          </div>

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
  );
}
