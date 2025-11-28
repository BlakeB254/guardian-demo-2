"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Building2,
  Shield,
  Hotel,
  Heart,
  Calendar,
  Target,
  ArrowRight,
  Clock,
  CheckCircle2,
} from "lucide-react";

const programs = [
  {
    id: "individual",
    title: "Individual Training",
    subtitle: "Launch Your Career",
    description: "Complete certification with 30-day job placement guarantee.",
    icon: GraduationCap,
    features: ["PERC Certification", "Job Guarantee", "Alumni Network"],
    price: "$349",
    duration: "2-4 Weeks",
    href: "/programs/individual",
    badge: "Most Popular",
    badgeVariant: "gold" as const,
  },
  {
    id: "corporate",
    title: "Corporate Training",
    subtitle: "Elevate Your Team",
    description: "Custom training programs for your organization's needs.",
    icon: Building2,
    features: ["Custom SOPs", "Team Analytics", "Compliance Docs"],
    price: "Custom",
    duration: "Flexible",
    href: "/programs/corporate",
    badge: "Organizations",
    badgeVariant: "primary" as const,
  },
  {
    id: "executive",
    title: "Executive Protection",
    subtitle: "Elite Detail Training",
    description: "Advanced training for executive protection professionals.",
    icon: Shield,
    features: ["Tactical Training", "Threat Intel", "VIP Placement"],
    price: "$2,499",
    duration: "7-14 Days",
    href: "/programs/executive",
    badge: "Advanced",
    badgeVariant: "secondary" as const,
  },
];

const industryTracks = [
  { title: "Hospitality", icon: Hotel, href: "/programs/hospitality" },
  { title: "Healthcare", icon: Heart, href: "/programs/healthcare" },
  { title: "Events", icon: Calendar, href: "/programs/events" },
  { title: "Armed", icon: Target, href: "/programs/armed" },
];

export function ProgramsOverview() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Badge variant="gold" size="md" className="mb-3">
            Training Programs
          </Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            World-Class Training for
            <span className="text-gradient-gold block mt-1">Every Security Path</span>
          </h2>
          <p className="mt-3 text-gray-600">
            Choose the program that fits your goals.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-10">
          {programs.map((program) => (
            <Card key={program.id} hover className="relative overflow-hidden group">
              {program.badge && (
                <div className="absolute top-3 right-3">
                  <Badge variant={program.badgeVariant} size="sm">
                    {program.badge}
                  </Badge>
                </div>
              )}

              <CardContent className="p-5 md:p-6">
                <div className="w-11 h-11 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <program.icon className="h-5 w-5 text-[#c9a227]" />
                </div>

                <h3 className="text-lg font-bold text-gray-900">{program.title}</h3>
                <p className="text-[#c9a227] text-sm font-medium">{program.subtitle}</p>
                <p className="text-gray-600 text-sm mt-2">{program.description}</p>

                <ul className="mt-4 space-y-2">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{program.price}</p>
                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                      <Clock className="h-3 w-3" />
                      {program.duration}
                    </div>
                  </div>
                  <Link href={program.href}>
                    <Button variant="primary" size="sm">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c9a227] to-[#e4c865] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Card>
          ))}
        </div>

        {/* Industry Tracks */}
        <div className="bg-gray-50 rounded-2xl p-5 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900">
                Industry Specializations
              </h3>
              <p className="text-gray-600 text-sm">Tailored training for your sector</p>
            </div>
            <Link href="/programs">
              <Button variant="outline" size="sm">
                View All
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {industryTracks.map((track) => (
              <Link
                key={track.title}
                href={track.href}
                className="group p-4 bg-white rounded-xl border border-gray-100 hover:border-[#c9a227]/30 transition-all text-center"
              >
                <div className="w-10 h-10 mx-auto bg-[#1a1a2e]/5 rounded-lg flex items-center justify-center mb-2 group-hover:bg-[#c9a227]/10">
                  <track.icon className="h-5 w-5 text-[#1a1a2e] group-hover:text-[#c9a227]" />
                </div>
                <span className="font-medium text-gray-900 text-sm">{track.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
