import HeroSection from "@/components/home/HeroSection";
import LocationHighlight from "@/components/home/LocationHighlight";
import ServicesOverview from "@/components/home/ServicesOverview";
import ReviewsSection from "@/components/home/ReviewsSection";
import Container from "@/components/ui/Container";
import MedicalBackground from "@/components/ui/MedicalBackground";

export default function HomePage() {
  return (
    <>
      {/* Google Fonts — shared across all home components */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap"
        rel="stylesheet"
      />

      {/* Page-scoped styles — available to all child components */}
      <style>{`
        .home-page  { font-family: 'DM Sans', sans-serif; }
        .home-serif { font-family: 'DM Serif Display', serif; }

        /* Hero buttons */
        .hero-btn-primary {
          background: white; color: #1a3888;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, color 0.2s ease;
        }
        .hero-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(0,0,0,0.22);
          background: #eef9f9; color: #2B56C5;
        }
        .hero-btn-outline {
          background: rgba(255,255,255,0.1); color: white;
          border: 1px solid rgba(255,255,255,0.25);
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .hero-btn-outline:hover {
          transform: translateY(-2px);
          background: rgba(255,255,255,0.18);
        }

        /* Service overview cards */
        .svc-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .svc-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 40px -8px rgba(43, 86, 197, 0.13);
        }
        .svc-card .svc-icon { transition: background 0.3s ease, color 0.3s ease; }
        .svc-card:hover .svc-icon { background: #d8f5f4 !important; color: #29C4BF !important; }
        .svc-card .accent-line { width: 0; transition: width 0.5s ease; }
        .svc-card:hover .accent-line { width: 100%; }
        .svc-card .learn-link { transition: color 0.2s ease, gap 0.2s ease; }
        .svc-card:hover .learn-link { color: #29C4BF !important; }

        /* Review cards */
        .review-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .review-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px -8px rgba(43, 86, 197, 0.10);
        }

        /* Location directions button */
        .directions-btn {
          transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;
        }
        .directions-btn:hover {
          transform: translateY(-1px);
          background: #d8f5f4 !important;
          color: #118885 !important;
        }

        /* Final CTA buttons */
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
      `}</style>

      <div className="home-page">
        <HeroSection />
        <LocationHighlight />
        <ServicesOverview />
        <ReviewsSection />

        {/* ── Final CTA ──────────────────────────────────── */}
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
                <div className="h-px w-10" style={{ background: "rgba(255,255,255,0.25)" }} />
                <span
                  className="text-xs font-semibold tracking-[0.2em] uppercase"
                  style={{ color: "#29C4BF" }}
                >
                  New Patients Welcome
                </span>
                <div className="h-px w-10" style={{ background: "rgba(255,255,255,0.25)" }} />
              </div>
              <h2
                className="home-serif text-4xl md:text-5xl text-white mb-5 leading-tight"
              >
                Ready to Take<br />
                <em>the Next Step?</em>
              </h2>
              <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.65)" }}>
                Whether you need pulmonary care, a sleep study, or lung function
                testing, our team is here to help. Request an appointment today.
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
