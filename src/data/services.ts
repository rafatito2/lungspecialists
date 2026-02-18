export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: "lungs" | "moon" | "chart";
}

export const services: Service[] = [
  {
    id: "pulmonary-care",
    title: "Pulmonary Care",
    shortDescription: "Comprehensive diagnosis and treatment of lung conditions.",
    fullDescription: `Our pulmonary specialists provide expert diagnosis and treatment for a wide
range of lung conditions including asthma, COPD, chronic bronchitis, emphysema, lung infections,
interstitial lung disease, and more. We work closely with each patient to develop personalized
treatment plans that address their specific needs and improve their quality of life.`,
    icon: "lungs",
  },
  {
    id: "sleep-medicine",
    title: "Sleep Medicine & Sleep Studies",
    shortDescription: "Diagnosis and treatment of sleep disorders with on-site sleep studies.",
    fullDescription: `We offer comprehensive sleep medicine services including diagnosis and
treatment of sleep apnea, insomnia, restless leg syndrome, narcolepsy, and other sleep disorders.
Our office features on-site sleep study facilities for your convenience, allowing us to accurately
diagnose sleep conditions and develop effective treatment plans.`,
    icon: "moon",
  },
  {
    id: "pulmonary-function-testing",
    title: "Pulmonary Function Testing",
    shortDescription: "State-of-the-art lung function assessment.",
    fullDescription: `Pulmonary Function Tests (PFTs) measure how well your lungs work. These
non-invasive tests help diagnose conditions like asthma and COPD, monitor disease progression,
and evaluate treatment effectiveness. Testing is performed on-site at our Fort Lauderdale office
by trained respiratory therapists using state-of-the-art equipment.`,
    icon: "chart",
  },
];
