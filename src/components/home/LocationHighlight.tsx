import Container from "@/components/ui/Container";

export default function LocationHighlight() {
  return (
    <section
      className="py-14 md:py-16"
      style={{ background: "linear-gradient(160deg, #f6f9ff 0%, #f0fafa 100%)" }}
    >
      <Container>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 max-w-5xl mx-auto">

          {/* ── Left: text ──────────────────────────────── */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 flex-shrink-0" style={{ background: "#29C4BF" }} />
              <span
                className="text-xs font-semibold tracking-[0.2em] uppercase"
                style={{ color: "#29C4BF" }}
              >
                Our Location
              </span>
            </div>
            <h2
              className="home-serif text-2xl md:text-3xl mb-3"
              style={{ color: "#122868" }}
            >
              Conveniently Located<br />in Fort Lauderdale
            </h2>
            <p
              className="text-sm leading-relaxed max-w-md"
              style={{ color: "#525252" }}
            >
              While our physicians previously practiced in Miami, our office is in{" "}
              <strong style={{ color: "#122868" }}>Fort Lauderdale, FL</strong>{" "}
              — serving patients throughout Broward County and all of South Florida.
            </p>
          </div>

          {/* ── Right: address card ──────────────────────── */}
          <div
            className="rounded-2xl p-6 flex-shrink-0"
            style={{
              background: "white",
              border: "1px solid #e8f0fe",
              boxShadow: "0 2px 16px -4px rgba(43, 86, 197, 0.08)",
              minWidth: "260px",
            }}
          >
            <div className="flex items-start gap-3 mb-5">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: "#eef9f9" }}
              >
                <svg
                  className="w-5 h-5"
                  fill="#29C4BF"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p
                  className="text-sm font-semibold mb-0.5"
                  style={{ color: "#122868" }}
                >
                  Lung Disease Specialists
                </p>
                <p className="text-sm" style={{ color: "#737373" }}>
                  6405 N Federal Hwy, Suite 405
                </p>
                <p className="text-sm" style={{ color: "#737373" }}>
                  Fort Lauderdale, FL 33308
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=6405+N+Federal+Hwy+Suite+405+Fort+Lauderdale+FL+33308"
              target="_blank"
              rel="noopener noreferrer"
              className="directions-btn w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold"
              style={{ background: "#eef2fb", color: "#2B56C5" }}
            >
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
