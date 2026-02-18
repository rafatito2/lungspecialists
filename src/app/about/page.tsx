import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import MedicalBackground from "@/components/ui/MedicalBackground";
import { doctors } from "@/data/doctors";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Dr. David Romero Fischmann and Dr. Eric Palma, board-certified pulmonologists at Lung Disease Specialists in Fort Lauderdale, FL. Learn about our practice and commitment to patient care.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative bg-gradient-to-b from-primary-50 to-white py-16 md:py-20 overflow-hidden">
        <MedicalBackground variant="light" />
        <Container className="relative">
          <SectionHeading
            title="About Our Practice"
            subtitle="Dedicated to providing exceptional pulmonary and sleep medicine care in Fort Lauderdale"
            centered
          />
        </Container>
      </section>

      {/* Practice overview */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Our Mission</h2>
            <div className="prose prose-lg text-neutral-600">
              <p>
                At Lung Disease Specialists Corporation, we are committed to providing comprehensive,
                compassionate care for patients with respiratory conditions and sleep disorders. Our
                board-certified physicians combine years of experience with the latest medical
                advances to deliver personalized treatment plans.
              </p>
              <p>
                Located in Fort Lauderdale, Florida, our practice serves patients throughout Broward
                County and the greater South Florida area. We offer on-site pulmonary function
                testing and sleep studies for your convenience.
              </p>
              <p>
                We believe in building lasting relationships with our patients and taking the time to
                listen, educate, and develop treatment plans that address each patient&apos;s unique
                needs and goals.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Doctors */}
      <section className="relative bg-slate-50 py-16 md:py-20 overflow-hidden">
        <MedicalBackground variant="light" />
        <Container className="relative">
          <SectionHeading title="Meet Our Physicians" centered className="mb-12" />

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {doctors.map((doctor) => (
              <article
                key={doctor.id}
                className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100"
              >
                {/* Placeholder for doctor photo */}
                <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-12 h-12 text-primary-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-neutral-900">
                    {doctor.name}, {doctor.title}
                  </h3>
                  <p className="text-primary-600 font-medium mb-4">{doctor.role}</p>

                  <p className="text-neutral-600 mb-4">{doctor.bio}</p>

                  <div className="border-t border-neutral-100 pt-4 mt-4">
                    <h4 className="text-sm font-semibold text-neutral-500 mb-2">Credentials</h4>
                    <ul className="text-sm text-neutral-600 space-y-1">
                      {doctor.credentials.map((credential, index) => (
                        <li key={index} className="flex items-center justify-center gap-2">
                          <svg
                            className="w-4 h-4 text-accent-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {credential}
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

      {/* CTA */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              Schedule Your Appointment Today
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto mb-8">
              We&apos;re accepting new patients and look forward to providing you with excellent care.
            </p>
            <Button href="/appointment" size="lg">
              Request an Appointment
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
