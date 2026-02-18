import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { insuranceProviders, insuranceNote } from "@/data/insurance";

export const metadata: Metadata = {
  title: "Patient Information",
  description:
    "Find important patient information including accepted insurance plans, office location in Fort Lauderdale, contact details, fax number, and office hours.",
};

export default function PatientInfoPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-primary-50 py-16 md:py-20">
        <Container>
          <SectionHeading
            title="Patient Information"
            subtitle="Everything you need to know before your visit"
            centered
          />
        </Container>
      </section>

      {/* Contact & Location */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Location */}
            <div className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200">
              <h2 className="text-xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                Office Location
              </h2>

              <address className="not-italic text-neutral-600 space-y-2">
                <p className="font-semibold text-lg text-neutral-900">Lung Disease Specialists</p>
                <p>6405 N Federal Hwy, Suite 405</p>
                <p>Fort Lauderdale, FL 33308</p>
              </address>

              <div className="mt-6">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=6405+N+Federal+Hwy+Suite+405+Fort+Lauderdale+FL+33308"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                  Get Directions
                </a>
              </div>

              {/* Embedded Google Map */}
              <div className="mt-6 h-48 rounded-lg overflow-hidden">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.5!2d-80.1199!3d26.1765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s6405+N+Federal+Hwy+Fort+Lauderdale+FL+33308!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200">
              <h2 className="text-xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Contact Us
              </h2>

              <div className="space-y-6">
                {/* Phone */}
                <div>
                  <p className="text-sm font-medium text-neutral-500 mb-1">Phone</p>
                  <a
                    href="tel:+19547716047"
                    className="text-lg font-semibold text-neutral-900 hover:text-primary-600"
                  >
                    (954) 771-6047
                  </a>
                </div>

                {/* Fax - Prominently displayed */}
                <div className="bg-accent-50 border border-accent-200 rounded-lg p-4">
                  <p className="text-sm font-medium text-accent-700 mb-1">Fax</p>
                  <p className="text-2xl font-bold text-accent-800">(954) 771-2927</p>
                  <p className="text-sm text-accent-600 mt-1">
                    For referrals and medical records
                  </p>
                </div>

                {/* Email */}
                <div>
                  <p className="text-sm font-medium text-neutral-500 mb-1">Email</p>
                  <a
                    href="mailto:lungdr123@gmail.com"
                    className="text-lg font-semibold text-neutral-900 hover:text-primary-600"
                  >
                    lungdr123@gmail.com
                  </a>
                </div>

                {/* Office Hours */}
                <div>
                  <p className="text-sm font-medium text-neutral-500 mb-2">Office Hours</p>
                  <table className="w-full text-sm">
                    <tbody className="divide-y divide-neutral-100">
                      <tr>
                        <td className="py-2 text-neutral-600">Monday - Friday</td>
                        <td className="py-2 text-neutral-900 font-medium text-right">
                          9:00 AM - 5:00 PM
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 text-neutral-600">Saturday</td>
                        <td className="py-2 text-neutral-900 font-medium text-right">Closed</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-neutral-600">Sunday</td>
                        <td className="py-2 text-neutral-900 font-medium text-right">Closed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Important Patient Policies */}
      <section className="py-16 md:py-20">
        <Container>
          <SectionHeading
            title="Important Patient Policies"
            subtitle="Please review these policies before your visit"
            centered
            className="mb-12"
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {/* Medication List Policy */}
            <div className="bg-white rounded-xl p-6 border border-neutral-200">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">Bring Your Medication List</h3>
              <p className="text-sm text-neutral-600">
                You must bring a complete list of all your medications (prescribed and over the counter) to every
                visit. This is required to prevent medication errors and adverse interactions. If you do not have
                your medication list, you will need to reschedule your appointment.
              </p>
            </div>

            {/* Cancellation Policy */}
            <div className="bg-white rounded-xl p-6 border border-neutral-200">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">24-Hour Cancellation Policy</h3>
              <p className="text-sm text-neutral-600">
                Please provide at least 24 hours&apos; notice if you need to cancel or reschedule your appointment.
                A $25.00 fee will be charged for missed appointments (&quot;no shows&quot;) without proper notice. This fee
                is not covered by insurance and must be paid before your next visit.
              </p>
            </div>

            {/* Insurance Authorization */}
            <div className="bg-white rounded-xl p-6 border border-neutral-200">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">Insurance Authorization</h3>
              <p className="text-sm text-neutral-600">
                If your insurance plan requires a referral or prior authorization, it is your responsibility to
                obtain it before your appointment. Please contact your primary care physician and insurance
                company to verify your requirements. Failure to obtain authorization may result in a claim denial.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Insurance */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <Container>
          <SectionHeading
            title="Accepted Insurance"
            subtitle="We accept most major insurance plans"
            centered
            className="mb-12"
          />

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-5xl mx-auto">
            {insuranceProviders.map((provider) => (
              <div
                key={provider.name}
                className="bg-white rounded-lg p-4 border border-neutral-200 flex items-center gap-3"
              >
                <svg
                  className="w-5 h-5 text-accent-500 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium text-neutral-700">{provider.name}</span>
              </div>
            ))}
          </div>

          {/* Insurance note */}
          <div className="mt-8 max-w-3xl mx-auto">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <div className="flex gap-3">
                <svg
                  className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm text-amber-800">{insuranceNote}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-neutral-600 mb-4">
              Don&apos;t see your insurance listed? Contact us to verify coverage.
            </p>
            <Button href="tel:+19547716047" variant="outline">
              Call to Verify Insurance
            </Button>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Ready to Schedule?</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto mb-8">
              Request an appointment online and our team will contact you to confirm.
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
