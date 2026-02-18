export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
}

export const reviews: Review[] = [
  {
    id: "1",
    name: "Maria S.",
    rating: 5,
    text: "Dr. Fishman and his team are incredibly professional and caring. They took the time to explain my condition and treatment options. Highly recommend!",
    date: "January 2025",
  },
  {
    id: "2",
    name: "Robert T.",
    rating: 5,
    text: "I had my sleep study done here and the entire process was smooth. The staff made me feel comfortable and the results helped me finally get the treatment I needed.",
    date: "December 2024",
  },
  {
    id: "3",
    name: "Linda M.",
    rating: 5,
    text: "Excellent pulmonary care. Dr. Palma is very knowledgeable and patient. The office is clean and the wait times are reasonable.",
    date: "November 2024",
  },
  {
    id: "4",
    name: "James K.",
    rating: 5,
    text: "Finally found a pulmonologist who listens! The whole team is friendly and the Fort Lauderdale location is convenient. Great experience overall.",
    date: "October 2024",
  },
];
