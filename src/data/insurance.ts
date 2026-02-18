export interface InsuranceProvider {
  name: string;
}

export const insuranceProviders: InsuranceProvider[] = [
  { name: "Aetna" },
  { name: "AvMed" },
  { name: "Blue Cross" },
  { name: "Cigna" },
  { name: "Devoted Healthcare" },
  { name: "Doctors Healthcare Plans" },
  { name: "First Health" },
  { name: "Humana" },
  { name: "Humana Military" },
  { name: "Medicaid" },
  { name: "Medicare" },
  { name: "Medicare Railroad" },
  { name: "Molina" },
  { name: "Multi Plan" },
  { name: "Oscar" },
  { name: "Preferred Care Partners" },
  { name: "Simply" },
  { name: "Sunshine Health" },
  { name: "Tricare" },
  { name: "United" },
];

export const insuranceNote = `Please note: HMO plans typically require a referral and prior authorization from your primary care physician before your appointment. If your insurance requires prior authorization, you are responsible for obtaining it before your visit. Failure to do so may result in a claim denial. Please verify your insurance requirements before scheduling. Contact our office if you have questions about your specific plan.`;
