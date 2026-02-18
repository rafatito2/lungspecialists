"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

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
  { value: "morning", label: "Morning (9 AM - 12 PM)" },
  { value: "afternoon", label: "Afternoon (12 PM - 5 PM)" },
];

export default function AppointmentForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend
    setFormSubmitted(true);
  };

  if (formSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-neutral-900 mb-4">Request Received!</h3>
        <p className="text-neutral-600 max-w-md mx-auto">
          Thank you for your appointment request. Our staff will review your information and
          contact you within 1-2 business days to confirm your appointment.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name fields */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-2">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
            placeholder="John"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-2">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
            placeholder="Doe"
          />
        </div>
      </div>

      {/* Contact fields */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
            placeholder="(XXX) XXX-XXXX"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
            placeholder="john.doe@email.com"
          />
        </div>
      </div>

      {/* Insurance type */}
      <div>
        <label htmlFor="insuranceType" className="block text-sm font-medium text-neutral-700 mb-2">
          Insurance Type <span className="text-red-500">*</span>
        </label>
        <select
          id="insuranceType"
          name="insuranceType"
          required
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors bg-white"
        >
          {insuranceTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>

      {/* Insurance provider */}
      <div>
        <label
          htmlFor="insuranceProvider"
          className="block text-sm font-medium text-neutral-700 mb-2"
        >
          Insurance Provider
        </label>
        <input
          type="text"
          id="insuranceProvider"
          name="insuranceProvider"
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
          placeholder="e.g., Blue Cross Blue Shield"
        />
      </div>

      {/* Authorization acknowledgment - REQUIRED */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="authorizationAcknowledged"
            name="authorizationAcknowledged"
            required
            className="mt-1 w-5 h-5 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
          />
          <label htmlFor="authorizationAcknowledged" className="text-sm text-amber-800">
            <strong>I understand</strong> that if my insurance requires prior authorization (common
            with HMO plans), I am responsible for obtaining it from my primary care physician
            before my appointment. Failure to obtain required authorization may result in claim
            denial. <span className="text-red-500">*</span>
          </label>
        </div>
      </div>

      {/* Reason for visit */}
      <div>
        <label htmlFor="visitReason" className="block text-sm font-medium text-neutral-700 mb-2">
          Reason for Visit <span className="text-red-500">*</span>
        </label>
        <select
          id="visitReason"
          name="visitReason"
          required
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors bg-white"
        >
          {visitReasons.map((reason) => (
            <option key={reason.value} value={reason.value}>
              {reason.label}
            </option>
          ))}
        </select>
      </div>

      {/* Preferred date and time */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="preferredDate"
            className="block text-sm font-medium text-neutral-700 mb-2"
          >
            Preferred Date
          </label>
          <input
            type="date"
            id="preferredDate"
            name="preferredDate"
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="preferredTime"
            className="block text-sm font-medium text-neutral-700 mb-2"
          >
            Preferred Time
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors bg-white"
          >
            {preferredTimes.map((time) => (
              <option key={time.value} value={time.value}>
                {time.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Additional notes */}
      <div>
        <label htmlFor="additionalNotes" className="block text-sm font-medium text-neutral-700 mb-2">
          Additional Notes
        </label>
        <textarea
          id="additionalNotes"
          name="additionalNotes"
          rows={4}
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
          placeholder="Please share any additional information about your condition or visit..."
        />
      </div>

      {/* Submit */}
      <div className="pt-4">
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          Submit Appointment Request
        </Button>
        <p className="mt-4 text-sm text-neutral-500">
          <span className="text-red-500">*</span> Required fields. We will contact you within 1-2
          business days to confirm your appointment.
        </p>
      </div>
    </form>
  );
}
