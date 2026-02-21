import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Patient Information", href: "/patient-info" },
  { name: "Request Appointment", href: "/appointment" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      {/* Gradient bar — matches the header accent */}
      <div
        className="h-1 w-full"
        style={{ background: "linear-gradient(to right, #29C4BF, #3a66d4, #2B56C5)" }}
      />

      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Practice Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/lung_logo.png"
                alt="Lung Disease Specialists Logo"
                width={40}
                height={40}
                className="rounded-full opacity-90"
              />
              <h3 className="text-lg font-bold text-white">Lung Disease Specialists</h3>
            </div>
            <p className="text-neutral-400 mb-4">
              Board-certified pulmonary and sleep medicine specialists serving Fort Lauderdale
              and the surrounding South Florida community.
            </p>
            <p className="text-sm text-neutral-500">
              Dr. David Romero Fischmann &amp; Dr. Eric Palma
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-accent-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4">
              Contact Us
            </h4>
            <address className="not-italic space-y-3 text-neutral-400">
              {/* Location */}
              <div>
                <p className="font-medium text-accent-400">Fort Lauderdale, FL</p>
                <p className="text-sm">6405 N Federal Hwy, Suite 405</p>
                <p className="text-sm">Fort Lauderdale, FL 33308</p>
              </div>

              {/* Phone */}
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-wider">Phone</p>
                <a href="tel:+19547716047" className="hover:text-white transition-colors text-sm">
                  (954) 771-6047
                </a>
              </div>

              {/* Fax */}
              <div className="bg-neutral-800 p-3 rounded-lg border border-neutral-700">
                <p className="text-xs text-neutral-500 uppercase tracking-wider">Fax</p>
                <p className="text-base font-semibold text-white">(954) 771-2927</p>
              </div>
            </address>
          </div>
        </div>

        {/* Office Hours */}
        <div className="mt-8 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1">
                Office Hours
              </h4>
              <p className="text-neutral-500 text-sm">
                Monday – Friday: 9:00 AM – 5:00 PM &nbsp;|&nbsp; Saturday – Sunday: Closed
              </p>
            </div>
            <p className="text-neutral-600 text-sm">
              &copy; {new Date().getFullYear()} Lung Disease Specialists Corporation. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
