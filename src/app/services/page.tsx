import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import MedicalBackground from "@/components/ui/MedicalBackground";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive pulmonary care, sleep medicine, sleep studies, and pulmonary function testing in Fort Lauderdale, FL. Expert diagnosis and treatment for lung conditions and sleep disorders.",
};

const iconMap = {
  lungs: (
    <svg className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 32 32">
      <path d="M14,18c0,1.2,0,0.5,0,2c0,6.8-2,7.3-5,7.3c-2.8,0-6,5.8-6-3.8S8.2,6,11.3,6c0.8,0,1.5,0.3,1.9,1.9" />
      <path d="M18,18c0,1.2,0,0.5,0,2c0,6.8,2,7.3,5,7.3c2.8,0,6,5.8,6-3.8S23.8,6,20.8,6c-0.8,0-1.5,0.3-1.9,1.9" />
      <path d="M16,2v6.6c0,1.5-0.7,3-1.9,4L10,16" />
      <path d="M16,8.6c0,1.5,0.7,3,1.9,4L22,16" />
    </svg>
  ),
  moon: (
    <svg className="w-14 h-14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24">
      <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  ),
  chart: (
    <svg className="w-14 h-14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24">
      <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
};

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative bg-gradient-to-b from-primary-50 to-white py-16 md:py-20 overflow-hidden">
        <MedicalBackground variant="light" />
        <Container className="relative">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive pulmonary and sleep medicine care in Fort Lauderdale"
            centered
          />
        </Container>
      </section>

      {/* Services list */}
      <section className="relative py-16 md:py-20 bg-slate-50 overflow-hidden">
        <MedicalBackground variant="light" />
        <Container className="relative">
          <div className="space-y-6">
            {services.map((service, index) => (
              <article
                key={service.id}
                className="flex flex-col lg:flex-row rounded-2xl overflow-hidden border border-neutral-100 shadow-sm bg-white"
              >
                {/* Icon sidebar */}
                <div className="bg-primary-600 lg:w-52 px-8 py-10 flex flex-row lg:flex-col items-center justify-start lg:justify-center gap-4 text-white flex-shrink-0">
                  <div className="opacity-90">
                    {iconMap[service.icon]}
                  </div>
                  <span className="text-3xl font-bold opacity-20 hidden lg:block">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <p className="text-xs font-bold tracking-widest text-primary-400 uppercase mb-2">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-1">{service.title}</h2>
                  <p className="text-primary-600 font-medium mb-4">{service.shortDescription}</p>
                  <div className="w-12 h-px bg-neutral-200 mb-4" />
                  <p className="text-neutral-600 leading-relaxed">{service.fullDescription}</p>
                  <div className="mt-6">
                    <Button href="/appointment" size="sm">Schedule a Consultation</Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA section */}
      <section className="relative bg-primary-600 py-16 md:py-20 overflow-hidden">
        <MedicalBackground variant="dark" />
        <Container>
          <div className="relative text-center">
            <h2 className="text-2xl font-bold text-white">
              Ready to Schedule an Appointment?
            </h2>
            <p className="mt-4 text-primary-200 max-w-2xl mx-auto">
              Request an appointment online or call our office directly. We look forward to caring
              for you.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/appointment">Request an Appointment</Button>
              <Button href="tel:+19547716047" variant="outline" className="!border-white !text-white hover:!bg-white hover:!text-primary-700">
                Call Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
