"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  CheckCircle2,
  ArrowRight,
  Star,
  Award,
  Users,
  Clock,
} from "lucide-react";

const stats = [
  { value: "2,500+", label: "Trained" },
  { value: "98%", label: "Placed" },
  { value: "20+", label: "Years Exp" },
  { value: "4.9", label: "Rating", icon: Star },
];

const guaranteePoints = [
  "PERC Certification",
  "30-Day Job Guarantee",
  "Money-Back Promise",
  "Alumni Network",
];

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Use requestAnimationFrame to defer state update
    const frame = requestAnimationFrame(() => {
      setIsVisible(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a227' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Badge variant="gold" size="md" className="mb-4">
              <Award className="h-3.5 w-3.5 mr-1.5" />
              #1 Security Training in Chicago
            </Badge>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Transform Into an
              <span className="block text-gradient-gold mt-1">
                Elite Security Pro
              </span>
            </h1>

            <p className="mt-4 text-base md:text-lg text-gray-300 max-w-xl">
              World-class guard training for Chicago&apos;s most demanding positions.
              Master the skills employers value most.
            </p>

            {/* Guarantee Badge - Compact */}
            <div className="mt-6 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-[#c9a227]/30">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#c9a227] rounded-lg pulse-gold flex-shrink-0">
                  <Shield className="h-6 w-6 text-[#1a1a2e]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#c9a227]">
                    30-Day Job Guarantee
                  </h3>
                  <p className="text-sm text-gray-300">
                    Get hired or get your money back. 100% guaranteed.
                  </p>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {guaranteePoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-1.5 text-xs text-gray-300"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#c9a227] flex-shrink-0" />
                    {point}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link href="/register" className="flex-1 sm:flex-none">
                <Button variant="shimmer" size="lg" fullWidth className="sm:w-auto group">
                  Start Training
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/pricing" className="flex-1 sm:flex-none">
                <Button variant="outlineLight" size="lg" fullWidth className="sm:w-auto">
                  View Pricing
                </Button>
              </Link>
            </div>

            {/* Social Proof - Compact */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 border-2 border-[#1a1a2e] flex items-center justify-center text-xs font-bold text-white"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-[#c9a227] text-[#c9a227]" />
                  ))}
                  <span className="text-white font-semibold ml-1">4.9</span>
                </div>
                <p className="text-gray-400 text-xs">500+ reviews</p>
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 md:p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#c9a227]/50 transition-colors"
                >
                  <div className="flex items-center gap-1.5">
                    <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                      {stat.value}
                    </span>
                    {stat.icon && (
                      <stat.icon className="h-5 w-5 fill-[#c9a227] text-[#c9a227]" />
                    )}
                  </div>
                  <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Quick Info Bar */}
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 text-gray-300">
                <Users className="h-4 w-4 text-[#c9a227]" />
                <span className="text-sm">
                  <strong className="text-white">47</strong> enrolled this week
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="h-4 w-4 text-[#c9a227]" />
                <span className="text-sm">
                  Next cohort: <strong className="text-white">Dec 2</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full">
          <path
            d="M0 80L60 73C120 67 240 53 360 47C480 40 600 40 720 43C840 47 960 53 1080 57C1200 60 1320 60 1380 60L1440 60V80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
