import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

const iconMap = {
  lungs: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 32 32">
      <path d="M14,18c0,1.2,0,0.5,0,2c0,6.8-2,7.3-5,7.3c-2.8,0-6,5.8-6-3.8S8.2,6,11.3,6c0.8,0,1.5,0.3,1.9,1.9" />
      <path d="M18,18c0,1.2,0,0.5,0,2c0,6.8,2,7.3,5,7.3c2.8,0,6,5.8,6-3.8S23.8,6,20.8,6c-0.8,0-1.5,0.3-1.9,1.9" />
      <path d="M16,2v6.6c0,1.5-0.7,3-1.9,4L10,16" />
      <path d="M16,8.6c0,1.5,0.7,3,1.9,4L22,16" />
    </svg>
  ),
  moon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  ),
  chart: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    </svg>
  ),
};

export default function ServicesOverview() {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <Container>
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive pulmonary and sleep medicine care tailored to your needs"
          centered
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-lg hover:border-primary-200 transition-all group"
            >
              <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                {iconMap[service.icon]}
              </div>

              <h3 className="text-xl font-semibold text-neutral-900 mb-2">{service.title}</h3>

              <p className="text-neutral-600 mb-4">{service.shortDescription}</p>

              <Link
                href="/services"
                className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
              >
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
