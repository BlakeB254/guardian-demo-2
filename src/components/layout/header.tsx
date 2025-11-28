"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X, Phone } from "lucide-react";

const navigation = [
  { label: "Programs", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      if (isMobileMenuOpen) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsMobileMenuOpen(false);
      }
    }
  }, [pathname, isMobileMenuOpen]);

  const isHomePage = pathname === "/";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || !isHomePage
          ? "bg-[#1a1a2e]/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="relative">
              <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-[#c9a227] transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-[#c9a227]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Guardian Elite
              </span>
              <span className="text-[10px] sm:text-xs text-[#c9a227] font-medium tracking-wider uppercase">
                Security Academy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors py-2",
                  pathname === item.href
                    ? "text-[#c9a227]"
                    : "text-white/80 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghostLight" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/register">
              <Button variant="primary" size="sm">
                Start Training
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#1a1a2e] border-t border-white/10 mobile-menu-enter">
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "block py-3 text-lg font-medium",
                  pathname === item.href ? "text-[#c9a227]" : "text-white/80"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 space-y-3 border-t border-white/10">
              <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="outlineLight" fullWidth>
                  Sign In
                </Button>
              </Link>
              <Link href="/register" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="primary" fullWidth>
                  Start Training
                </Button>
              </Link>
            </div>
            {/* Contact Info */}
            <div className="pt-4 border-t border-white/10">
              <a
                href="tel:+13125551234"
                className="flex items-center gap-2 text-white/60 hover:text-[#c9a227]"
              >
                <Phone className="h-4 w-4" />
                (312) 555-1234
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
