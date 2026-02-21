import Link from "next/link";
import Container from "@/components/ui/Container";
import MedicalBackground from "@/components/ui/MedicalBackground";
import { services } from "@/data/services";

const iconMap = {
  lungs: (
    <svg
      className="w-6 h-6"
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
      className="w-6 h-6"
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
      className="w-6 h-6"
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

export default function ServicesOverview() {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      <MedicalBackground variant="light" />
      <Container className="relative">

        {/* Section heading */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10" style={{ background: "#29C4BF" }} />
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: "#29C4BF" }}
            >
              What We Offer
            </span>
            <div className="h-px w-10" style={{ background: "#29C4BF" }} />
          </div>
          <h2
            className="home-serif text-3xl md:text-4xl"
            style={{ color: "#122868" }}
          >
            Our Services
          </h2>
          <p
            className="mt-3 text-base max-w-xl mx-auto"
            style={{ color: "#737373" }}
          >
            Comprehensive pulmonary and sleep medicine care tailored to your needs
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="svc-card rounded-2xl p-8 bg-white"
              style={{ border: "1px solid #f0f0f0" }}
            >
              {/* Icon */}
              <div
                className="svc-icon w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "#eef2fb", color: "#2B56C5" }}
              >
                {iconMap[service.icon]}
              </div>

              {/* Title */}
              <h3
                className="home-serif text-xl mb-2"
                style={{ color: "#122868" }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "#737373" }}
              >
                {service.shortDescription}
              </p>

              {/* Animated accent line */}
              <div
                className="h-0.5 rounded-full overflow-hidden mb-5"
                style={{ background: "#f5f5f5" }}
              >
                <div
                  className="accent-line h-full rounded-full"
                  style={{
                    background: "linear-gradient(to right, #2B56C5, #29C4BF)",
                  }}
                />
              </div>

              {/* Learn more link */}
              <Link
                href="/services"
                className="learn-link inline-flex items-center gap-1.5 text-sm font-semibold"
                style={{ color: "#2B56C5" }}
              >
                Learn more
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
              </Link>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold"
            style={{ color: "#29C4BF" }}
          >
            View all services
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>

      </Container>
    </section>
  );
}
