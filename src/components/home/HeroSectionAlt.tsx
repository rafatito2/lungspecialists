'use client';

import Image from 'next/image';
import Container from "@/components/ui/Container";
import MedicalBackground from "@/components/ui/MedicalBackground";

export default function HeroSectionAlt() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(140deg, #0d1f52 0%, #1a3888 32%, #2B56C5 68%, #29C4BF 100%)",
      }}
    >
      <style>{`
        @keyframes pulseRing {
          0%   { transform: scale(0.92); opacity: 0.50; }
          50%  { transform: scale(1.06); opacity: 0.15; }
          100% { transform: scale(0.92); opacity: 0.50; }
        }
        @keyframes pulseRing2 {
          0%   { transform: scale(1.0);  opacity: 0.28; }
          50%  { transform: scale(1.14); opacity: 0.07; }
          100% { transform: scale(1.0);  opacity: 0.28; }
        }
        @keyframes floatCard1 {
          0%, 100% { transform: translateY(0px);  }
          50%       { transform: translateY(-7px); }
        }
        @keyframes floatCard2 {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(6px); }
        }
        @keyframes floatCard3 {
          0%, 100% { transform: translateY(0px);  }
          50%       { transform: translateY(-5px); }
        }
      `}</style>

      <MedicalBackground variant="dark" />

      {/* ── Text — left side only, padded right on desktop to leave room for image ── */}
      <Container className="relative">
        <div className="py-24 md:py-32 lg:pr-[43%]">

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
          <h1 className="home-serif text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] text-white mb-6">
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
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="tel:+19547716047"
              className="hero-btn-outline inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-semibold"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              (954) 771-6047
            </a>
          </div>

          {/* Trust badge pills */}
          <div className="flex flex-wrap gap-3 mt-10">
            {["Board Certified Physicians", "On-Site Sleep Studies", "Accepting New Patients"].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.85)",
                  border: "1px solid rgba(255,255,255,0.18)",
                }}
              >
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="#29C4BF" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {badge}
              </span>
            ))}
          </div>

        </div>
      </Container>

      {/* ── Doctor image — absolutely fills the right half of the section ── */}
      <div
        className="hidden lg:block absolute right-0 bottom-0 top-0"
        style={{ width: "43%" }}
      >
        {/* Soft teal glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, rgba(41,196,191,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Pulse ring 1 */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            top: "10%", bottom: "5%",
            left: "10%", right: "10%",
            border: "2px solid rgba(41,196,191,0.30)",
            animation: "pulseRing 3.6s ease-in-out infinite",
          }}
        />

        {/* Pulse ring 2 */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            top: "5%", bottom: "2%",
            left: "3%", right: "3%",
            border: "1.5px solid rgba(41,196,191,0.16)",
            animation: "pulseRing2 4.8s ease-in-out infinite",
          }}
        />

        {/* The image — fills full height, anchored to bottom */}
        <div className="absolute inset-0">
          <Image
            src="/lung-doctor.png"
            alt="Board-certified pulmonologist"
            fill
            className="object-contain object-bottom"
            sizes="46vw"
            priority
          />
        </div>

        {/* Floating card 1 — top-left: Years Experience */}
        <div
          className="absolute flex items-center gap-3 px-4 py-3 rounded-2xl"
          style={{
            top: "14%",
            left: "2%",
            background: "rgba(255,255,255,0.10)",
            border: "1px solid rgba(255,255,255,0.22)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.20)",
            animation: "floatCard1 4s ease-in-out infinite",
            minWidth: "152px",
            zIndex: 10,
          }}
        >
          <div
            className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: "rgba(41,196,191,0.22)" }}
          >
            <svg className="w-5 h-5" fill="#29C4BF" viewBox="0 0 24 24">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
            </svg>
          </div>
          <div>
            <div className="text-white font-bold text-lg leading-none">20+</div>
            <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.65)" }}>Years Experience</div>
          </div>
        </div>

        {/* Floating card 2 — mid-left: Patients Treated */}
        <div
          className="absolute flex items-center gap-3 px-4 py-3 rounded-2xl"
          style={{
            top: "52%",
            left: "-2%",
            background: "rgba(255,255,255,0.10)",
            border: "1px solid rgba(255,255,255,0.22)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.20)",
            animation: "floatCard2 5s ease-in-out infinite",
            minWidth: "152px",
            zIndex: 10,
          }}
        >
          <div
            className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: "rgba(41,196,191,0.22)" }}
          >
            <svg className="w-5 h-5" fill="#29C4BF" viewBox="0 0 24 24">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
            </svg>
          </div>
          <div>
            <div className="text-white font-bold text-lg leading-none">5,000+</div>
            <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.65)" }}>Patients Treated</div>
          </div>
        </div>

        {/* Floating card 3 — top-right: Board Certified */}
        <div
          className="absolute flex items-center gap-3 px-4 py-3 rounded-2xl"
          style={{
            top: "12%",
            right: "7%",
            background: "rgba(41,196,191,0.18)",
            border: "1px solid rgba(41,196,191,0.38)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            boxShadow: "0 8px 32px rgba(41,196,191,0.18)",
            animation: "floatCard3 4.5s ease-in-out infinite",
            minWidth: "152px",
            zIndex: 10,
          }}
        >
          <div
            className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: "rgba(41,196,191,0.30)" }}
          >
            <svg className="w-5 h-5" fill="#29C4BF" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
            </svg>
          </div>
          <div>
            <div className="text-white font-bold text-sm leading-tight">Board Certified</div>
            <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.72)" }}>Pulmonologists</div>
          </div>
        </div>

      </div>

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
