export interface Doctor {
  id: string;
  name: string;
  title: string;
  role: string;
  bio: string;
  credentials: string[];
  image?: string;
}

export const doctors: Doctor[] = [
  {
    id: "dr-fishman",
    name: "Dr. David Romero Fischmann",
    title: "MD",
    role: "Owner & Pulmonologist",
    bio: `Dr. David Romero-Fischmann is a South Florida pulmonologist with subspecialties in Critical Care Medicine, Pulmonary Disease, and Sleep Medicine. He trained at Mount Sinai Medical Center of Florida and completed fellowships in Pulmonary Disease, Critical Care, and Sleep Medicine. He has co-authored publications on tuberculosis and atypical disease cases, and has been recognized as one of America's top physicians in pulmonary and critical care.`,
    credentials: [
      "Board Certified in Pulmonary Disease",
      "Board Certified in Critical Care Medicine",
      "America's Top Physician, Pulmonary & Critical Care",
      "America's Registry of Outstanding Professionals",
    ],
  },
  {
    id: "dr-palma",
    name: "Dr. Eric Palma",
    image: "/dr_palma.png",
    title: "MD",
    role: "Partner & Pulmonologist",
    bio: `Dr. Eric Palma is a board-certified pulmonologist and critical care medicine specialist with over 20 years of experience. He earned his medical degree from the Universidad de Panama Faculty of Medicine and completed his Internal Medicine residency at the University of Miami Affiliated Hospitals, followed by a fellowship in Pulmonary & Critical Care Medicine at the University of Miami and an additional fellowship at Mount Sinai Medical Center.`,
    credentials: [
      "Board Certified in Pulmonary Disease",
      "Board Certified in Critical Care Medicine",
      "Castle Connolly Top Doctor – 5 Years",
      "Modern Luxury Miami Magazine Top Doctor: 2023",
    ],
  },
];
