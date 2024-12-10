import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
  support: [
    { label: "Help Center", href: "#" },
    { label: "Safety", href: "#" },
    { label: "Blog", href: "#" },
  ],
};

const contactInfo = [
  {
    icon: MapPin,
    text: "123 Cleaning Street, City, 12345",
  },
  {
    icon: Phone,
    text: "(555) 123-4567",
  },
  {
    icon: Mail,
    text: "contact@cleanco.com",
  },
];

export function Footer() {
  return (
    <footer className="bg-black text-white w-full flex justify-center">
      <div className="container px-4 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-12 lg:gap-8">
          {/* Brand and Contact Section */}
          <div className="md:col-span-4 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white">Sunshine House Cleaning</h3>
              <p className="mt-2 text-sm text-gray-400">
                Professional cleaning services for homes and offices. Making spaces sparkle since 2023.
              </p>
            </div>
            
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-400">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full bg-transparent border-gray-800 hover:bg-gray-800 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-transparent border-gray-800 hover:bg-gray-800 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-transparent border-gray-800 hover:bg-gray-800 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Links Sections */}
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Company</h4>
                <ul className="space-y-2">
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Legal</h4>
                <ul className="space-y-2">
                  {footerLinks.legal.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Support</h4>
                <ul className="space-y-2">
                  {footerLinks.support.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© 2024 Sunshine House Cleaning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}