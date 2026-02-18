'use client';

import { useEffect, useRef } from 'react';
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
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
              // factor < 1 moves camera CLOSER to the model (zoom in)
              // 0.3 = 30% of the distance → model appears significantly larger
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
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-white py-20 md:py-32 lg:py-40 overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-8 items-center">
          {/* Left column — text content */}
          <div>
            {/* Location badge */}
            <div className="inline-flex items-center gap-2 bg-accent-500/10 text-accent-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              Serving Fort Lauderdale & South Florida
            </div>

            {/* Main heading */}
            <h1 className="text-4xl font-bold text-neutral-900 sm:text-5xl lg:text-6xl leading-tight">
              Expert Pulmonary & Sleep Medicine Care
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-xl text-neutral-600 leading-relaxed">
              At Lung Disease Specialists, we provide comprehensive care for respiratory conditions
              and sleep disorders. Our board-certified physicians are dedicated to helping you
              breathe easier and sleep better.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/appointment" size="lg">
                Request an Appointment
              </Button>
              <Button href="tel:+19547716047" variant="outline" size="lg">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Us
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap gap-6 text-sm text-neutral-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Board Certified Physicians
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                On-Site Sleep Studies
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Accepting New Patients
              </div>
            </div>
          </div>

          {/* Right column — 3D lung model */}
          <div className="relative flex items-center justify-center lg:justify-end mt-12">
            {/* overflow-hidden clips the iframe edges where Sketchfab UI lives */}
            <div className="relative w-full max-w-xl aspect-square overflow-hidden">
              <iframe
                ref={iframeRef}
                title="LUNGS"
                className="absolute"
                style={{ width: 'calc(120% + 60px)', left: '-45px', height: 'calc(85% + 90px)', top: '-50px' }}
                frameBorder="0"
                allowFullScreen
                allow="autoplay; fullscreen; xr-spatial-tracking"
              />
            </div>
          </div>
        </div>
      </Container>

      <MedicalBackground variant="light" />
    </section>
  );
}
