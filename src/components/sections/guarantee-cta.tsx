"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Shield,
  CheckCircle2,
  ArrowRight,
  Clock,
  Briefcase,
  DollarSign,
  Users,
  Phone,
} from "lucide-react";

const features = [
  { icon: Briefcase, text: "Job offer in 30 days" },
  { icon: DollarSign, text: "100% money-back guarantee" },
  { icon: Users, text: "150+ hiring partners" },
];

export function GuaranteeCTA() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center justify-center p-4 bg-[#c9a227] rounded-full mb-6 pulse-gold">
            <Shield className="h-10 w-10 text-[#1a1a2e]" />
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            30-Day Job
            <span className="text-[#c9a227]"> Placement Guarantee</span>
          </h2>
          <p className="mt-3 text-gray-300 max-w-xl mx-auto">
            Get hired within 30 days of completing our program or receive a full refund.
            No questions asked.
          </p>

          {/* Features */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-8">
            {features.map((feature) => (
              <div key={feature.text} className="flex items-center gap-2 text-gray-300">
                <feature.icon className="h-5 w-5 text-[#c9a227]" />
                <span className="text-sm">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Steps */}
          <div className="mt-10 max-w-2xl mx-auto">
            <div className="grid grid-cols-3 gap-4">
              {[
                { step: 1, title: "Enroll", desc: "Start training" },
                { step: 2, title: "Complete", desc: "2-4 weeks" },
                { step: 3, title: "Get Hired", desc: "Within 30 days" },
              ].map((item, index) => (
                <div key={item.step} className="text-center relative">
                  {index < 2 && (
                    <div className="hidden md:block absolute top-5 left-[60%] w-[80%] h-0.5 bg-[#c9a227]/30" />
                  )}
                  <div className="w-10 h-10 mx-auto bg-[#c9a227] rounded-full flex items-center justify-center mb-2 relative z-10">
                    <span className="font-bold text-[#1a1a2e]">{item.step}</span>
                  </div>
                  <p className="font-semibold text-white text-sm">{item.title}</p>
                  <p className="text-gray-400 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 inline-block bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-[#c9a227]/30">
            <div className="flex items-center justify-center gap-2 text-[#c9a227] mb-3">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-medium">Next cohort: December 2nd</span>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/register">
                <Button variant="shimmer" size="lg" className="group">
                  Enroll Now - $349
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outlineLight" size="lg">
                  <Phone className="mr-2 h-4 w-4" />
                  Talk to Us
                </Button>
              </Link>
            </div>

            <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs text-gray-400">
              {["30-Day Guarantee", "Money-Back Promise", "Financing Available"].map((text) => (
                <span key={text} className="flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3 text-[#c9a227]" />
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
