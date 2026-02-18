import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive pulmonary care, sleep medicine, sleep studies, and pulmonary function testing in Fort Lauderdale, FL. Expert diagnosis and treatment for lung conditions and sleep disorders.",
};

const iconMap = {
  lungs: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 32 32">
      <path d="M14,18c0,1.2,0,0.5,0,2c0,6.8-2,7.3-5,7.3c-2.8,0-6,5.8-6-3.8S8.2,6,11.3,6c0.8,0,1.5,0.3,1.9,1.9" />
      <path d="M18,18c0,1.2,0,0.5,0,2c0,6.8,2,7.3,5,7.3c2.8,0,6,5.8,6-3.8S23.8,6,20.8,6c-0.8,0-1.5,0.3-1.9,1.9" />
      <path d="M16,2v6.6c0,1.5-0.7,3-1.9,4L10,16" />
      <path d="M16,8.6c0,1.5,0.7,3,1.9,4L22,16" />
    </svg>
  ),
  moon: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  ),
  chart: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    </svg>
  ),
};

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-primary-50 py-16 md:py-20">
        <Container>
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive pulmonary and sleep medicine care in Fort Lauderdale"
            centered
          />
        </Container>
      </section>

      {/* Services list */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="space-y-16">
            {services.map((service, index) => (
              <article
                key={service.id}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center">
                    {iconMap[service.icon]}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4">{service.title}</h2>
                  <p className="text-neutral-600 text-lg leading-relaxed whitespace-pre-line">
                    {service.fullDescription}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA section */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-neutral-900">
              Ready to Schedule an Appointment?
            </h2>
            <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
              Request an appointment online or call our office directly. We look forward to caring
              for you.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/appointment">Request an Appointment</Button>
              <Button href="tel:+1XXXXXXXXXX" variant="outline">
                Call Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
