/**
 * JsonLd – injects structured data (schema.org JSON-LD) into every page.
 *
 * Schemas included:
 *  • MedicalOrganization + LocalBusiness  →  practice info, address, hours
 *  • Physician (×2)                       →  Dr. Fischmann & Dr. Palma
 *  • WebSite                              →  site-level identity
 */
export default function JsonLd() {
  const graph = [
    /* ── Practice ─────────────────────────────────────────── */
    {
      "@type": ["MedicalOrganization", "LocalBusiness"],
      "@id": "https://diseasespecialist.com/#organization",
      name: "Lung Disease Specialists Corporation",
      alternateName: "Lung Disease Specialists",
      url: "https://diseasespecialist.com",
      telephone: "+19547716047",
      faxNumber: "+19547712927",
      email: "lungdr123@gmail.com",
      image: "https://diseasespecialist.com/lung_logo.png",
      logo: {
        "@type": "ImageObject",
        url: "https://diseasespecialist.com/lung_logo.png",
      },
      description:
        "Board-certified pulmonary and sleep medicine specialists in Fort Lauderdale, FL. Expert care for lung conditions, sleep disorders, and pulmonary function testing.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "6405 N Federal Hwy, Suite 405",
        addressLocality: "Fort Lauderdale",
        addressRegion: "FL",
        postalCode: "33308",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 26.1765,
        longitude: -80.1199,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "09:00",
          closes: "17:00",
        },
      ],
      medicalSpecialty: [
        "Pulmonary Medicine",
        "Sleep Medicine",
        "Critical Care Medicine",
      ],
      availableService: [
        {
          "@type": "MedicalTherapy",
          name: "Pulmonary Care",
          description:
            "Diagnosis and treatment of asthma, COPD, emphysema, bronchitis, interstitial lung disease, and other lung conditions.",
        },
        {
          "@type": "MedicalTherapy",
          name: "Sleep Medicine & Sleep Studies",
          description:
            "On-site diagnosis and treatment of sleep apnea, insomnia, restless leg syndrome, and narcolepsy.",
        },
        {
          "@type": "MedicalTherapy",
          name: "Pulmonary Function Testing",
          description:
            "State-of-the-art spirometry, lung volume, and diffusion capacity testing performed on-site.",
        },
      ],
      hasMap: "https://www.google.com/maps?cid=15905943121519007762",
      priceRange: "$$",
      currenciesAccepted: "USD",
      paymentAccepted: "Insurance, Cash",
      areaServed: [
        { "@type": "City", name: "Fort Lauderdale", "sameAs": "https://en.wikipedia.org/wiki/Fort_Lauderdale,_Florida" },
        { "@type": "County", name: "Broward County" },
      ],
      sameAs: [
        "https://www.google.com/maps?cid=15905943121519007762",
      ],
    },

    /* ── Dr. David Romero Fischmann ───────────────────────── */
    {
      "@type": "Physician",
      "@id": "https://diseasespecialist.com/#dr-fischmann",
      name: "Dr. David Romero Fischmann",
      givenName: "David",
      familyName: "Romero Fischmann",
      honorificPrefix: "Dr.",
      honorificSuffix: "MD",
      jobTitle: "Owner & Pulmonologist",
      description:
        "South Florida pulmonologist with subspecialties in Critical Care Medicine, Pulmonary Disease, and Sleep Medicine. Trained at Mount Sinai Medical Center of Florida. Recognized as one of America's top physicians in pulmonary and critical care.",
      medicalSpecialty: [
        "Pulmonary Disease",
        "Critical Care Medicine",
        "Sleep Medicine",
      ],
      worksFor: {
        "@id": "https://diseasespecialist.com/#organization",
      },
      image: "https://diseasespecialist.com/dr_david.png",
      alumniOf: "Mount Sinai Medical Center of Florida",
    },

    /* ── Dr. Erick Palma ──────────────────────────────────── */
    {
      "@type": "Physician",
      "@id": "https://diseasespecialist.com/#dr-palma",
      name: "Dr. Erick Palma",
      givenName: "Erick",
      familyName: "Palma",
      honorificPrefix: "Dr.",
      honorificSuffix: "MD",
      jobTitle: "Partner & Pulmonologist",
      description:
        "Board-certified pulmonologist and critical care medicine specialist with over 20 years of experience. Trained at University of Miami and Mount Sinai Medical Center. Castle Connolly Top Doctor — 5 consecutive years.",
      medicalSpecialty: [
        "Pulmonary Disease",
        "Critical Care Medicine",
      ],
      worksFor: {
        "@id": "https://diseasespecialist.com/#organization",
      },
      image: "https://diseasespecialist.com/dr_palma.png",
      alumniOf: [
        "Universidad de Panama Faculty of Medicine",
        "University of Miami",
        "Mount Sinai Medical Center",
      ],
    },

    /* ── WebSite ──────────────────────────────────────────── */
    {
      "@type": "WebSite",
      "@id": "https://diseasespecialist.com/#website",
      url: "https://diseasespecialist.com",
      name: "Lung Disease Specialists",
      description:
        "Official website of Lung Disease Specialists Corporation — pulmonary and sleep medicine practice in Fort Lauderdale, FL.",
      publisher: {
        "@id": "https://diseasespecialist.com/#organization",
      },
      inLanguage: "en-US",
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }),
      }}
    />
  );
}
