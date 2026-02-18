"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Patient Info", href: "/patient-info" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            {/* Placeholder logo - lungs icon */}
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 32 32"
              >
                <path d="M14,18c0,1.2,0,0.5,0,2c0,6.8-2,7.3-5,7.3c-2.8,0-6,5.8-6-3.8S8.2,6,11.3,6c0.8,0,1.5,0.3,1.9,1.9" />
                <path d="M18,18c0,1.2,0,0.5,0,2c0,6.8,2,7.3,5,7.3c2.8,0,6,5.8,6-3.8S23.8,6,20.8,6c-0.8,0-1.5,0.3-1.9,1.9" />
                <path d="M16,2v6.6c0,1.5-0.7,3-1.9,4L10,16" />
                <path d="M16,8.6c0,1.5,0.7,3,1.9,4L22,16" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-neutral-900">
                Lung Disease Specialists
              </span>
              <span className="block text-xs text-neutral-500">
                Pulmonary & Sleep Medicine
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-neutral-600 hover:text-primary-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button href="/appointment" size="sm">
              Request Appointment
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-neutral-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-neutral-600 hover:text-primary-600 font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button href="/appointment" className="w-full">
                Request Appointment
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
