"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Users,
  FileText,
  BarChart3,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const benefits = [
  { title: "Custom SOPs", desc: "Tailored procedures for your operations", icon: FileText },
  { title: "Team Training", desc: "Standardized onboarding programs", icon: Users },
  { title: "Analytics", desc: "Track progress and compliance", icon: BarChart3 },
  { title: "Industry Focus", desc: "Sector-specific curriculum", icon: Building2 },
];

const stats = [
  { value: "150+", label: "Partners" },
  { value: "94%", label: "Renewal" },
  { value: "35%", label: "Incident Drop" },
];

export function B2BSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div>
            <Badge variant="primary" size="md" className="mb-3">
              <Building2 className="h-3.5 w-3.5 mr-1.5" />
              For Organizations
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              Enterprise Security
              <span className="text-gradient-gold block mt-1">Training Solutions</span>
            </h2>
            <p className="mt-3 text-gray-600">
              Partner with Guardian Elite to build a world-class security program
              customized for your industry and operational needs.
            </p>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl md:text-3xl font-bold text-[#1a1a2e]">
                    {stat.value}
                  </p>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                >
                  <benefit.icon className="h-5 w-5 text-[#c9a227] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{benefit.title}</p>
                    <p className="text-xs text-gray-500">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link href="/contact?type=enterprise">
                <Button variant="primary" size="md">
                  Request Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/pricing?tab=enterprise">
                <Button variant="outline" size="md">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-6 md:p-8">
            <div className="text-center text-white">
              <Building2 className="h-16 w-16 mx-auto text-[#c9a227] mb-4" />
              <h3 className="text-xl font-bold">Trusted by Leading Organizations</h3>
              <p className="text-gray-300 text-sm mt-2">
                From boutique hotels to Fortune 500 companies
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {["Hotels", "Hospitals", "Corporate", "Events"].map((industry) => (
                  <span
                    key={industry}
                    className="px-3 py-1.5 bg-white/10 rounded-full text-sm"
                  >
                    {industry}
                  </span>
                ))}
              </div>
              {/* ROI Points */}
              <div className="mt-6 space-y-2 text-left">
                {[
                  "Reduce liability risk with documented training",
                  "50% faster onboarding with standardized programs",
                  "Improve retention through professional development",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="h-4 w-4 text-[#c9a227] flex-shrink-0 mt-0.5" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
