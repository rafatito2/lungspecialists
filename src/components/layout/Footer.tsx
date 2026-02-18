import Link from "next/link";
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
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Practice Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">Lung Disease Specialists</h3>
            <p className="text-neutral-400 mb-4">
              Board-certified pulmonary and sleep medicine specialists serving Fort Lauderdale
              and the surrounding South Florida community.
            </p>
            <p className="text-sm text-neutral-500">
              Dr. Gabriel Romero Fishman & Dr. Eric Palma
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="not-italic space-y-3 text-neutral-400">
              {/* Location - Emphasized */}
              <div>
                <p className="font-medium text-accent-400">Fort Lauderdale, FL</p>
                <p className="text-sm">6405 N Federal Hwy, Suite 405</p>
                <p className="text-sm">Fort Lauderdale, FL 33308</p>
              </div>

              {/* Phone */}
              <div>
                <p className="text-sm text-neutral-500">Phone</p>
                <a href="tel:+19547716047" className="hover:text-white transition-colors">
                  (954) 771-6047
                </a>
              </div>

              {/* Fax - Prominently displayed */}
              <div className="bg-neutral-800 p-3 rounded-lg">
                <p className="text-sm text-neutral-500">Fax</p>
                <p className="text-lg font-semibold text-white">(954) 771-2927</p>
              </div>
            </address>
          </div>
        </div>

        {/* Office Hours */}
        <div className="mt-8 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h4 className="text-sm font-semibold text-neutral-400 mb-2">Office Hours</h4>
              <p className="text-neutral-500 text-sm">
                Monday - Friday: 9:00 AM - 5:00 PM | Saturday - Sunday: Closed
              </p>
            </div>
            <p className="text-neutral-500 text-sm">
              &copy; {new Date().getFullYear()} Lung Disease Specialists Corporation. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
