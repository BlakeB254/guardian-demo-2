"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Heart,
  Award,
  Users,
  GraduationCap,
  Shield,
  Quote,
  ArrowRight,
  Building,
} from "lucide-react";

const stats = [
  { icon: Shield, value: "20+", label: "Years Experience" },
  { icon: GraduationCap, value: "2,500+", label: "Trained" },
  { icon: Building, value: "U of C", label: "Partner" },
  { icon: Users, value: "500+", label: "Youth Mentored" },
];

export function FounderSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] max-h-[450px] bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-24 h-24 mx-auto bg-[#c9a227]/20 rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-[#c9a227]">A</span>
                </div>
                <p className="text-white/60 text-sm mt-4">Founder Photo</p>
              </div>
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-4 -right-4 md:bottom-4 md:-right-4 bg-white rounded-xl shadow-xl p-3 md:p-4">
              <div className="flex items-center gap-2">
                <Award className="h-6 w-6 text-[#c9a227]" />
                <div>
                  <p className="font-bold text-gray-900 text-sm">20+ Years</p>
                  <p className="text-xs text-gray-500">Industry Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <Badge variant="gold" size="md" className="mb-3">
              <Heart className="h-3.5 w-3.5 mr-1.5" />
              Meet The Founder
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              &quot;Big A&quot;
              <span className="text-gradient-gold block mt-1">
                Educator. Mentor. Leader.
              </span>
            </h2>

            <div className="mt-4 space-y-3 text-gray-600">
              <p>
                With 20+ years in security, Big A learned that the best
                professionals resolve conflicts with their minds, not their fists.
              </p>
              <p>
                As a community organizer with the University of Chicago, he
                mentors disenfranchised youth, providing alternatives to gang life
                through education and career paths in security.
              </p>
            </div>

            {/* Quote */}
            <div className="mt-5 p-4 bg-gray-50 rounded-xl border-l-4 border-[#c9a227]">
              <Quote className="h-5 w-5 text-[#c9a227] mb-2" />
              <p className="text-gray-900 italic text-sm">
                &quot;True strength comes from wisdom, discipline, and the courage
                to lead with your mind.&quot;
              </p>
            </div>

            <Link href="/about#founder">
              <Button variant="secondary" size="md" className="mt-5">
                Read Full Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 bg-gray-50 rounded-xl"
            >
              <stat.icon className="h-6 w-6 mx-auto text-[#c9a227] mb-2" />
              <p className="text-xl md:text-2xl font-bold text-gray-900">
                {stat.value}
              </p>
              <p className="text-gray-500 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
