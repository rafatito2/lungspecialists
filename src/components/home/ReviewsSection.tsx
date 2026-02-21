import Container from "@/components/ui/Container";
import MedicalBackground from "@/components/ui/MedicalBackground";
import ReviewQRCode from "@/components/ui/ReviewQRCode";
import { reviews } from "@/data/reviews";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4"
          fill={i < rating ? "#F59E0B" : "#e5e7eb"}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #f0f4ff 0%, #eef9f9 100%)",
      }}
    >
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
              Patient Reviews
            </span>
            <div className="h-px w-10" style={{ background: "#29C4BF" }} />
          </div>
          <h2
            className="home-serif text-3xl md:text-4xl"
            style={{ color: "#122868" }}
          >
            What Our Patients Say
          </h2>
          <p
            className="mt-3 text-base max-w-xl mx-auto"
            style={{ color: "#737373" }}
          >
            Read about the experiences of patients who have trusted us with their care
          </p>
        </div>

        {/* Reviews grid */}
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="review-card bg-white rounded-2xl p-7"
              style={{ boxShadow: "0 2px 16px -4px rgba(43, 86, 197, 0.08)" }}
            >
              {/* Decorative large quote mark */}
              <div
                className="home-serif select-none pointer-events-none mb-1"
                style={{
                  fontSize: "4.5rem",
                  lineHeight: "0.75",
                  color: "#d5e1f7",
                  fontStyle: "italic",
                }}
              >
                &ldquo;
              </div>

              {/* Review text */}
              <blockquote
                className="text-sm leading-relaxed mb-6"
                style={{ color: "#525252" }}
              >
                {review.text}
              </blockquote>

              {/* Footer: avatar + name + stars */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Initial avatar */}
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #d5e1f7 0%, #eef9f9 100%)",
                      color: "#2B56C5",
                    }}
                  >
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold leading-tight"
                      style={{ color: "#122868" }}
                    >
                      {review.name}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "#a3a3a3" }}
                    >
                      {review.date}
                    </p>
                  </div>
                </div>
                <StarRating rating={review.rating} />
              </div>
            </div>
          ))}
        </div>

        {/* Leave a Review CTA */}
        <div
          className="mt-12 max-w-4xl mx-auto rounded-2xl overflow-hidden"
          style={{ boxShadow: "0 2px 24px -4px rgba(43, 86, 197, 0.10)" }}
        >
          <div className="bg-white flex flex-col md:flex-row items-center gap-0">

            {/* Text side */}
            <div className="flex-1 p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 flex-shrink-0" style={{ background: "#29C4BF" }} />
                <span className="text-xs font-semibold tracking-[0.18em] uppercase" style={{ color: "#29C4BF" }}>
                  Share Your Experience
                </span>
              </div>
              <h3
                className="home-serif text-2xl md:text-3xl mb-3 leading-tight"
                style={{ color: "#122868" }}
              >
                Happy With Your Care?
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#737373" }}>
                Your review helps other patients find quality pulmonary care and motivates our team to keep improving. It takes less than a minute.
              </p>
              <a
                href="https://www.google.com/maps?cid=15905943121519007762"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white"
                style={{ background: "linear-gradient(135deg, #2B56C5, #1aaead)" }}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 110-16 8 8 0 010 16zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
                </svg>
                Leave a Google Review
              </a>
            </div>

            {/* QR code side */}
            <div
              className="flex flex-col items-center justify-center px-8 py-8 md:py-10 w-full md:w-auto"
              style={{
                background: "linear-gradient(160deg, #f0f4ff 0%, #eef9f9 100%)",
                borderLeft: "1px solid #e5eeff",
                minWidth: "200px",
              }}
            >
              <div className="p-3 bg-white rounded-xl mb-3" style={{ boxShadow: "0 2px 8px rgba(43,86,197,0.08)" }}>
                <ReviewQRCode size={140} />
              </div>
              <p className="text-xs font-semibold" style={{ color: "#2B56C5" }}>Scan with your camera</p>
              <p className="text-xs mt-0.5" style={{ color: "#a3a3a3" }}>to open Google reviews</p>
            </div>

          </div>
        </div>

      </Container>
    </section>
  );
}
