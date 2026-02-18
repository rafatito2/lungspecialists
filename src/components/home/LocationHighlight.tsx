import Container from "@/components/ui/Container";

export default function LocationHighlight() {
  return (
    <section className="bg-primary-600 py-12 md:py-16">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="text-white">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <h2 className="text-2xl md:text-3xl font-bold">
                Conveniently Located in Fort Lauderdale
              </h2>
            </div>
            <p className="text-primary-100 text-lg max-w-2xl">
              While our physicians previously practiced in Miami, our office is located in{" "}
              <span className="font-semibold text-white">Fort Lauderdale, FL</span> &mdash; serving
              patients throughout Broward County and South Florida.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.google.com/maps/search/?api=1&query=6405+N+Federal+Hwy+Suite+405+Fort+Lauderdale+FL+33308"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors"
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
        </div>
      </Container>
    </section>
  );
}
