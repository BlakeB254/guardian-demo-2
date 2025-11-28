"use client";

import Link from "next/link";
import {
  Shield,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  programs: [
    { label: "Individual Training", href: "/programs/individual" },
    { label: "Corporate Training", href: "/programs/corporate" },
    { label: "Executive Protection", href: "/programs/executive" },
    { label: "Team Certification", href: "/programs/team" },
    { label: "Hospitality Security", href: "/programs/hospitality" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Mission", href: "/about#mission" },
    { label: "Meet Big A", href: "/about#founder" },
    { label: "Careers", href: "/careers" },
    { label: "Partners", href: "/partners" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Success Stories", href: "/success-stories" },
    { label: "Illinois PERC Guide", href: "/resources/perc-guide" },
    { label: "Security Career Guide", href: "/resources/career-guide" },
    { label: "FAQ", href: "/faq" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Accessibility", href: "/accessibility" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

const certifications = [
  "IDFPR Approved Training Provider",
  "ASIS International Partner",
  "Illinois Security Professionals Association Member",
];

export function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#c9a227] to-[#e4c865]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a2e]">
                Ready to Transform Your Security Career?
              </h3>
              <p className="text-[#1a1a2e]/80 mt-2">
                Join 2,500+ security professionals trained by Guardian Elite
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register">
                <Button variant="secondary" size="lg">
                  Start Training Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#1a1a2e] text-[#1a1a2e] hover:bg-[#1a1a2e] hover:text-white"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <Shield className="h-10 w-10 text-[#c9a227]" />
              <div>
                <span className="text-xl font-bold">Guardian Elite</span>
                <span className="block text-xs text-[#c9a227] tracking-wider uppercase">
                  Security Academy
                </span>
              </div>
            </Link>
            <p className="mt-4 text-gray-400 max-w-sm">
              Chicago&apos;s premier security training academy. Transforming individuals
              into elite security professionals through world-class education and
              mentorship.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <MapPin className="h-5 w-5 mt-0.5 text-[#c9a227]" />
                <span>
                  123 Security Plaza, Suite 400
                  <br />
                  Chicago, IL 60601
                </span>
              </a>
              <a
                href="tel:+13125551234"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="h-5 w-5 text-[#c9a227]" />
                (312) 555-1234
              </a>
              <a
                href="mailto:info@guardianelite.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5 text-[#c9a227]" />
                info@guardianelite.com
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 rounded-lg hover:bg-[#c9a227] hover:text-[#1a1a2e] transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-[#c9a227] mb-4">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-[#c9a227] mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-[#c9a227] mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-[#c9a227] mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-wrap gap-4 justify-center">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-400"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Guardian Elite Security Academy. All
            rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Serving the Greater Chicago Area and Beyond
          </p>
        </div>
      </div>
    </footer>
  );
}
