"use client";

import { useState } from "react";

const insuranceTypes = [
  { value: "", label: "Select your insurance type" },
  { value: "ppo", label: "PPO" },
  { value: "hmo", label: "HMO" },
  { value: "medicare", label: "Medicare" },
  { value: "medicaid", label: "Medicaid" },
  { value: "other", label: "Other / Self-Pay" },
];

const visitReasons = [
  { value: "", label: "Select reason for visit" },
  { value: "new-patient", label: "New Patient Consultation" },
  { value: "follow-up", label: "Follow-Up Visit" },
  { value: "sleep-study", label: "Sleep Study" },
  { value: "pulmonary-function", label: "Pulmonary Function Test" },
  { value: "second-opinion", label: "Second Opinion" },
  { value: "other", label: "Other" },
];

const preferredTimes = [
  { value: "", label: "No preference" },
  { value: "morning", label: "Morning (9 AM – 12 PM)" },
  { value: "afternoon", label: "Afternoon (12 PM – 5 PM)" },
];

const inputClass =
  "appt-input w-full px-4 py-3 rounded-xl outline-none transition-all text-sm";
const labelClass =
  "block text-xs font-semibold tracking-[0.08em] uppercase mb-2";

export default function AppointmentForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  if (formSubmitted) {
    return (
      <div className="text-center py-14">
        {/* Teal check circle */}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{
            background: "linear-gradient(135deg, #d5e1f7 0%, #eef9f9 100%)",
          }}
        >
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="#29C4BF"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <h3
          className="appt-serif text-3xl mb-3"
          style={{ color: "#122868" }}
        >
          Request Received!
        </h3>
        <p
          className="text-sm leading-relaxed max-w-sm mx-auto"
          style={{ color: "#737373" }}
        >
          Thank you for your appointment request. Our staff will review your
          information and contact you within 1–2 business days to confirm your
          appointment.
        </p>
        <div className="mt-6 flex items-center justify-center gap-2 text-sm font-medium" style={{ color: "#29C4BF" }}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          We&apos;ll call you at the number you provided
        </div>
      </div>
    );
  }

  return (
    <>
      <style>{`
        .appt-input {
          border: 1px solid #e5e5e5;
          color: #262626;
          background: #fafafa;
        }
        .appt-input::placeholder { color: #a3a3a3; }
        .appt-input:focus {
          border-color: #2B56C5;
          background: white;
          box-shadow: 0 0 0 3px rgba(43, 86, 197, 0.08);
        }
        .appt-submit {
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }
        .appt-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(43, 86, 197, 0.3);
          background: #1a3888 !important;
        }
      `}</style>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Name */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className={labelClass} style={{ color: "#525252" }}>
              First Name <span style={{ color: "#ef4444" }}>*</span>
            </label>
            <input
              type="text" id="firstName" name="firstName" required
              className={inputClass} placeholder="John"
            />
          </div>
          <div>
            <label htmlFor="lastName" className={labelClass} style={{ color: "#525252" }}>
              Last Name <span style={{ color: "#ef4444" }}>*</span>
            </label>
            <input
              type="text" id="lastName" name="lastName" required
              className={inputClass} placeholder="Doe"
            />
          </div>
        </div>

        {/* Contact */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className={labelClass} style={{ color: "#525252" }}>
              Phone Number <span style={{ color: "#ef4444" }}>*</span>
            </label>
            <input
              type="tel" id="phone" name="phone" required
              className={inputClass} placeholder="(XXX) XXX-XXXX"
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClass} style={{ color: "#525252" }}>
              Email Address <span style={{ color: "#ef4444" }}>*</span>
            </label>
            <input
              type="email" id="email" name="email" required
              className={inputClass} placeholder="john@email.com"
            />
          </div>
        </div>

        {/* Insurance type */}
        <div>
          <label htmlFor="insuranceType" className={labelClass} style={{ color: "#525252" }}>
            Insurance Type <span style={{ color: "#ef4444" }}>*</span>
          </label>
          <select
            id="insuranceType" name="insuranceType" required
            className={inputClass}
          >
            {insuranceTypes.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
        </div>

        {/* Insurance provider */}
        <div>
          <label htmlFor="insuranceProvider" className={labelClass} style={{ color: "#525252" }}>
            Insurance Provider
          </label>
          <input
            type="text" id="insuranceProvider" name="insuranceProvider"
            className={inputClass} placeholder="e.g., Blue Cross Blue Shield"
          />
        </div>

        {/* Authorization acknowledgment */}
        <div
          className="rounded-xl p-4"
          style={{
            background: "#f0f4ff",
            border: "1px solid #d5e1f7",
          }}
        >
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="authorizationAcknowledged"
              name="authorizationAcknowledged"
              required
              className="mt-0.5 w-4 h-4 rounded flex-shrink-0"
              style={{ accentColor: "#2B56C5" }}
            />
            <label
              htmlFor="authorizationAcknowledged"
              className="text-xs leading-relaxed"
              style={{ color: "#1a3888" }}
            >
              <strong>I understand</strong> that if my insurance requires prior
              authorization (common with HMO plans), I am responsible for obtaining
              it from my primary care physician before my appointment. Failure to
              obtain required authorization may result in claim denial.{" "}
              <span style={{ color: "#ef4444" }}>*</span>
            </label>
          </div>
        </div>

        {/* Reason for visit */}
        <div>
          <label htmlFor="visitReason" className={labelClass} style={{ color: "#525252" }}>
            Reason for Visit <span style={{ color: "#ef4444" }}>*</span>
          </label>
          <select
            id="visitReason" name="visitReason" required
            className={inputClass}
          >
            {visitReasons.map((r) => (
              <option key={r.value} value={r.value}>{r.label}</option>
            ))}
          </select>
        </div>

        {/* Preferred date + time */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="preferredDate" className={labelClass} style={{ color: "#525252" }}>
              Preferred Date
            </label>
            <input
              type="date" id="preferredDate" name="preferredDate"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="preferredTime" className={labelClass} style={{ color: "#525252" }}>
              Preferred Time
            </label>
            <select
              id="preferredTime" name="preferredTime"
              className={inputClass}
            >
              {preferredTimes.map((t) => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Additional notes */}
        <div>
          <label htmlFor="additionalNotes" className={labelClass} style={{ color: "#525252" }}>
            Additional Notes
          </label>
          <textarea
            id="additionalNotes" name="additionalNotes" rows={4}
            className={`${inputClass} resize-none`}
            placeholder="Please share any additional information about your condition or visit..."
          />
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            className="appt-submit w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-semibold"
            style={{ background: "#2B56C5", color: "white" }}
          >
            Submit Appointment Request
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
          <p className="mt-4 text-xs" style={{ color: "#a3a3a3" }}>
            <span style={{ color: "#ef4444" }}>*</span> Required fields. We will
            contact you within 1–2 business days to confirm your appointment.
          </p>
        </div>

      </form>
    </>
  );
}
