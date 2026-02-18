import HeroSection from "@/components/home/HeroSection";
import LocationHighlight from "@/components/home/LocationHighlight";
import ServicesOverview from "@/components/home/ServicesOverview";
import ReviewsSection from "@/components/home/ReviewsSection";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import MedicalBackground from "@/components/ui/MedicalBackground";

export default function HomePage() {
  return (
    <>
      {/* Hero with main CTA */}
      <HeroSection />

      {/* Location emphasis - addresses Miami confusion */}
      <LocationHighlight />

      {/* Services preview */}
      <ServicesOverview />

      {/* Patient reviews */}
      <ReviewsSection />

      {/* Final CTA section */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="relative bg-primary-600 rounded-2xl p-8 md:p-12 text-center overflow-hidden">
            <MedicalBackground variant="dark" />
            <h2 className="relative text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Take the Next Step?
            </h2>
            <p className="relative text-primary-100 text-lg max-w-2xl mx-auto mb-8">
              Whether you need pulmonary care, a sleep study, or lung function testing, our team
              is here to help. Request an appointment today.
            </p>
            <div className="relative flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/appointment" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white hover:!text-primary-600">
                Request an Appointment
              </Button>
              <Button href="tel:+19547716047" variant="outline" size="lg" className="!border-primary-300 !text-primary-100 hover:!bg-primary-500">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call (954) 771-6047
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
