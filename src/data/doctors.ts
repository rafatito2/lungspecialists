export interface Doctor {
  id: string;
  name: string;
  title: string;
  role: string;
  bio: string;
  credentials: string[];
}

export const doctors: Doctor[] = [
  {
    id: "dr-fishman",
    name: "Dr. Gabriel Romero Fishman",
    title: "MD",
    role: "Owner & Pulmonologist",
    bio: `Dr. Gabriel Romero Fishman is a board-certified pulmonologist and critical care medicine specialist. He is a Diplomate of the American Board of Internal Medicine and Pulmonary Disease, and a Fellow of the American College of Chest Physicians. Dr. Fishman brings extensive experience in treating a wide range of respiratory conditions and sleep disorders, providing personalized, compassionate care to patients throughout the Fort Lauderdale area.`,
    credentials: [
      "Diplomate, American Board of Internal Medicine",
      "Diplomate, American Board of Pulmonary Disease",
      "Fellow, American College of Chest Physicians",
      "Board Certified in Sleep Medicine",
    ],
  },
  {
    id: "dr-palma",
    name: "Dr. Eric Palma",
    title: "MD",
    role: "Partner & Pulmonologist",
    bio: `Dr. Eric Palma is a board-certified pulmonologist who brings years of experience and expertise to our practice. He is committed to staying at the forefront of pulmonary medicine and providing the highest quality care to patients throughout South Florida.`,
    credentials: [
      "Board Certified in Pulmonary Medicine",
      "Board Certified in Internal Medicine",
    ],
  },
];
