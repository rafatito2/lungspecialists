'use client';

import { useEffect, useRef } from 'react';
import Container from "@/components/ui/Container";
import MedicalBackground from "@/components/ui/MedicalBackground";

export default function HeroSection() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const script = document.createElement('script');
    script.src = 'https://static.sketchfab.com/api/sketchfab-viewer-1.12.1.js';
    script.async = true;

    script.onload = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const SF = (window as any).Sketchfab;
      if (!SF) return;

      const client = new SF(iframe);
      client.init('bb3e70596ec24289b355fb075222a354', {
        autospin: 1,
        autostart: 1,
        transparent: 1,
        ui_hint: 0,
        ui_watermark: 0,
        ui_watermark_link: 0,
        ui_infos: 0,
        ui_stop: 0,
        ui_controls: 0,
        ui_ar: 0,
        ui_vr: 0,
        ui_help: 0,
        ui_settings: 0,
        ui_fullscreen: 0,
        ui_annotations: 0,
        ui_inspector: 0,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        success: function (api: any) {
          api.start();
          api.addEventListener('viewerready', function () {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            api.getCameraLookAt(function (err: any, camera: any) {
              if (err) return;
              const { position, target } = camera;
              const factor = 0.3;
              api.setCameraLookAt(
                [
                  target[0] + (position[0] - target[0]) * factor,
                  target[1] + (position[1] - target[1]) * factor,
                  target[2] + (position[2] - target[2]) * factor,
                ],
                target,
                0.8
              );
            });
          });
        },
        error: function () {
          console.error('Sketchfab viewer failed to initialise');
        },
      });
    };

    document.head.appendChild(script);
    return () => {
      if (document.head.contains(script)) document.head.removeChild(script);
    };
  }, []);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(140deg, #0d1f52 0%, #1a3888 32%, #2B56C5 68%, #29C4BF 100%)",
      }}
    >
      <MedicalBackground variant="dark" />

      <Container className="relative">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-8 items-center py-24 md:py-32">

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
              className="home-serif text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] text-white mb-6"
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
          <div className="relative flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
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

              {/* iframe container — clips Sketchfab UI, renders above the circle */}
              <div className="absolute inset-0 overflow-hidden">
                <iframe
                  ref={iframeRef}
                  title="LUNGS"
                  className="absolute"
                  style={{
                    width: 'calc(120% + 60px)',
                    left: '-45px',
                    height: 'calc(85% + 90px)',
                    top: '-50px',
                  }}
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                />
              </div>

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
