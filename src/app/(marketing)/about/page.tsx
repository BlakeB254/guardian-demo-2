"use client";

import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Heart,
  Award,
  Users,
  GraduationCap,
  Building,
  Target,
  ArrowRight,
  Quote,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We hold ourselves and our graduates to the highest standards.",
  },
  {
    icon: Heart,
    title: "Community",
    description: "Security professionals who lift their communities up.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Honest, ethical conduct in every situation.",
  },
  {
    icon: Users,
    title: "Leadership",
    description: "Training leaders, not just guards.",
  },
];

const milestones = [
  { year: "2004", event: "Big A begins security career" },
  { year: "2010", event: "Starts mentoring youth in Chicago" },
  { year: "2015", event: "Partners with University of Chicago" },
  { year: "2019", event: "Guardian Elite Academy founded" },
  { year: "2024", event: "2,500+ professionals trained" },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <Badge variant="gold" size="lg" className="mb-4">
                <Shield className="h-4 w-4 mr-2" />
                About Us
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Building Chicago&apos;s Next Generation of
                <span className="text-[#c9a227]"> Security Leaders</span>
              </h1>
              <p className="mt-4 text-lg text-gray-300">
                Guardian Elite was founded on a simple belief: everyone deserves
                access to quality training and a path to a meaningful career.
              </p>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section id="founder" className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Image */}
              <div className="relative order-2 lg:order-1">
                <div className="aspect-[4/5] max-h-[500px] bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-28 h-28 mx-auto bg-[#c9a227]/20 rounded-full flex items-center justify-center">
                      <span className="text-5xl font-bold text-[#c9a227]">A</span>
                    </div>
                    <p className="text-white/60 text-sm mt-4">Founder Photo</p>
                  </div>
                </div>
                {/* Stats overlay */}
                <div className="absolute -bottom-4 -right-4 md:bottom-6 md:-right-6 bg-white rounded-xl shadow-xl p-4 md:p-5">
                  <div className="flex items-center gap-3">
                    <Award className="h-8 w-8 text-[#c9a227]" />
                    <div>
                      <p className="font-bold text-gray-900">20+ Years</p>
                      <p className="text-sm text-gray-500">Industry Experience</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <Badge variant="gold" size="md" className="mb-3">
                  Meet The Founder
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  &quot;Big A&quot; - Educator, Mentor, Leader
                </h2>
                <div className="mt-4 space-y-4 text-gray-600">
                  <p>
                    With over 20 years in security, Big A learned that the best
                    professionals resolve conflicts with their minds, not their
                    fists. This insight became the foundation of Guardian Elite.
                  </p>
                  <p>
                    As a community organizer with the University of Chicago, he
                    mentors youth across Chicago&apos;s South Side, providing
                    alternatives to gang life through education and career paths.
                  </p>
                </div>

                {/* Quote */}
                <div className="mt-6 p-4 bg-gray-50 rounded-xl border-l-4 border-[#c9a227]">
                  <Quote className="h-6 w-6 text-[#c9a227] mb-2" />
                  <p className="text-gray-900 italic">
                    &quot;True strength comes from wisdom, discipline, and the
                    courage to lead with your mind.&quot;
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <GraduationCap className="h-4 w-4 text-[#c9a227]" />
                    <span>2,500+ Trained</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Building className="h-4 w-4 text-[#c9a227]" />
                    <span>U of Chicago Partner</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="h-4 w-4 text-[#c9a227]" />
                    <span>500+ Youth Mentored</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section id="mission" className="py-12 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Our Mission & Values
              </h2>
              <p className="mt-3 text-gray-600">
                Transform individuals into elite security professionals while
                creating pathways to meaningful careers.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 bg-[#c9a227]/10 rounded-lg flex items-center justify-center mb-3">
                    <value.icon className="h-5 w-5 text-[#c9a227]" />
                  </div>
                  <h3 className="font-bold text-gray-900">{value.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-12 md:py-20 bg-[#1a1a2e]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
              Our Journey
            </h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 mx-auto bg-[#c9a227] rounded-full flex items-center justify-center mb-2">
                    <span className="font-bold text-[#1a1a2e] text-sm">
                      {milestone.year}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm max-w-[120px]">
                    {milestone.event}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Ready to Join Our Community?
            </h2>
            <p className="mt-3 text-gray-600">
              Start your journey to becoming an elite security professional.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/register">
                <Button variant="primary" size="lg">
                  Start Training
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
