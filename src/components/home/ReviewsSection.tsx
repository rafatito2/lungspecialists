import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { reviews } from "@/data/reviews";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-neutral-300"}`}
          fill="currentColor"
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
    <section className="bg-neutral-50 py-16 md:py-20 lg:py-24">
      <Container>
        <SectionHeading
          title="What Our Patients Say"
          subtitle="Read about the experiences of patients who have trusted us with their care"
          centered
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100"
            >
              <div className="flex items-center justify-between mb-4">
                <StarRating rating={review.rating} />
                <span className="text-sm text-neutral-500">{review.date}</span>
              </div>

              <blockquote className="text-neutral-700 mb-4">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              <p className="font-medium text-neutral-900">{review.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-neutral-600">
            We value your feedback. These reviews help us continue to provide excellent care.
          </p>
        </div>
      </Container>
    </section>
  );
}
