import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AppointmentForm from "@/components/forms/AppointmentForm";

export const metadata: Metadata = {
  title: "Request an Appointment",
  description:
    "Request an appointment with Lung Disease Specialists in Fort Lauderdale, FL. Our team will contact you to confirm your pulmonary or sleep medicine consultation.",
};

export default function AppointmentPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-primary-50 py-16 md:py-20">
        <Container>
          <SectionHeading
            title="Request an Appointment"
            subtitle="Complete the form below and our staff will contact you to confirm your appointment"
            centered
          />
        </Container>
      </section>

      {/* Form section */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-2xl mx-auto">
            {/* Important notice */}
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 mb-8">
              <div className="flex gap-3">
                <svg
                  className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="text-sm text-primary-800">
                  <p className="font-medium mb-1">This is an appointment request, not a confirmation.</p>
                  <p>
                    Our staff will review your request and call you to schedule a confirmed
                    appointment time that works for both parties.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200 shadow-sm">
              <AppointmentForm />
            </div>

            {/* Alternative contact */}
            <div className="mt-8 text-center">
              <p className="text-neutral-600 mb-4">
                Prefer to speak with someone directly?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+19547716047"
                  className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call (954) 771-6047
                </a>
                <span className="text-neutral-400 hidden sm:inline">|</span>
                <p className="text-neutral-600 text-sm">
                  Mon - Fri: 9:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
