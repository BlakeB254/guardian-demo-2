"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  CheckCircle2,
  X,
  HelpCircle,
  Shield,
  Building2,
  Phone,
  ArrowRight,
  Star,
  Award,
  Briefcase,
} from "lucide-react";

const individualPlans = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for getting your Illinois PERC card",
    price: 199,
    period: "one-time",
    features: [
      { text: "20-Hour PERC Card Curriculum", included: true },
      { text: "Online Self-Paced Learning", included: true },
      { text: "Basic Quiz Assessments", included: true },
      { text: "Digital Certificate", included: true },
      { text: "Job Board Access", included: false },
      { text: "Live Training Sessions", included: false },
      { text: "1-on-1 Career Coaching", included: false },
      { text: "30-Day Job Guarantee", included: false },
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    id: "professional",
    name: "Professional",
    description: "Complete training with job placement guarantee",
    price: 349,
    period: "one-time",
    features: [
      { text: "20-Hour PERC Card Curriculum", included: true },
      { text: "Online + In-Person Training", included: true },
      { text: "Advanced Assessments", included: true },
      { text: "Official Certification", included: true },
      { text: "Job Board Access", included: true },
      { text: "Live Training Sessions", included: true },
      { text: "1-on-1 Career Coaching", included: true },
      { text: "30-Day Job Guarantee", included: true },
    ],
    cta: "Start Training",
    popular: true,
    badge: "Most Popular",
  },
  {
    id: "elite",
    name: "Elite",
    description: "Advanced training for executive protection",
    price: 2499,
    period: "one-time",
    features: [
      { text: "Everything in Professional", included: true },
      { text: "Executive Protection Module", included: true },
      { text: "7-Day Intensive Workshop", included: true },
      { text: "Advanced Tactical Training", included: true },
      { text: "VIP Placement Network", included: true },
      { text: "Lifetime Alumni Access", included: true },
      { text: "Priority Job Placements", included: true },
      { text: "Annual Refresher Courses", included: true },
    ],
    cta: "Apply Now",
    popular: false,
    badge: "Advanced",
  },
];

const corporatePlans = [
  {
    id: "team",
    name: "Team",
    description: "For small security teams",
    price: 249,
    period: "per seat/year",
    minSeats: 5,
    features: [
      { text: "Up to 20 team members", included: true },
      { text: "Full course library access", included: true },
      { text: "Progress tracking dashboard", included: true },
      { text: "Team analytics", included: true },
      { text: "Custom SOP development", included: false },
      { text: "Dedicated account manager", included: false },
      { text: "On-site training", included: false },
      { text: "White-label options", included: false },
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    id: "business",
    name: "Business",
    description: "For growing organizations",
    price: 199,
    period: "per seat/year",
    minSeats: 20,
    features: [
      { text: "Up to 100 team members", included: true },
      { text: "Full course library access", included: true },
      { text: "Progress tracking dashboard", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Custom SOP development", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "On-site training (2 sessions)", included: true },
      { text: "White-label options", included: false },
    ],
    cta: "Contact Sales",
    popular: true,
    badge: "Best Value",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For large security operations",
    price: null,
    period: "custom",
    minSeats: 100,
    features: [
      { text: "Unlimited team members", included: true },
      { text: "Full course library access", included: true },
      { text: "Custom course development", included: true },
      { text: "Enterprise analytics & API", included: true },
      { text: "Full SOP development", included: true },
      { text: "Dedicated success team", included: true },
      { text: "Unlimited on-site training", included: true },
      { text: "Full white-label platform", included: true },
    ],
    cta: "Talk to Us",
    popular: false,
    badge: "Custom",
  },
];

const faqs = [
  {
    question: "What is the 30-Day Job Guarantee?",
    answer:
      "If you complete our Professional program and don't receive a job offer within 30 days, we'll refund your full tuition. Our network of 150+ hiring partners makes this possible.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes! We offer flexible payment plans for all our programs. You can split payments over 2-4 months with 0% interest for qualifying applicants.",
  },
  {
    question: "Can I switch from individual to corporate later?",
    answer:
      "Absolutely. If your organization wants to bring Guardian Elite training in-house, we'll credit your individual purchase toward your corporate plan.",
  },
  {
    question: "What certifications will I receive?",
    answer:
      "All programs include Illinois PERC card preparation. Our certifications are recognized by major employers across Chicago and are aligned with ASIS and IFPO standards.",
  },
  {
    question: "Is there in-person training available?",
    answer:
      "Yes! Our Professional and Elite programs include live training sessions at our Chicago facility. Corporate clients can also arrange on-site training.",
  },
];

export default function PricingPage() {
  const [planType, setPlanType] = useState<"individual" | "corporate">(
    "individual"
  );
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const plans = planType === "individual" ? individualPlans : corporatePlans;

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="gold" size="lg" className="mb-6">
              <Award className="h-4 w-4 mr-2" />
              Simple, Transparent Pricing
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Invest in Your
              <span className="block text-[#c9a227] mt-2">Security Career</span>
            </h1>
            <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your goals. All plans include our core
              curriculum and are backed by our satisfaction guarantee.
            </p>

            {/* Plan Type Toggle */}
            <div className="mt-10 inline-flex p-1 bg-white/10 rounded-xl">
              <button
                onClick={() => setPlanType("individual")}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all",
                  planType === "individual"
                    ? "bg-[#c9a227] text-[#1a1a2e]"
                    : "text-white hover:bg-white/10"
                )}
              >
                <Shield className="h-5 w-5" />
                Individual
              </button>
              <button
                onClick={() => setPlanType("corporate")}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all",
                  planType === "corporate"
                    ? "bg-[#c9a227] text-[#1a1a2e]"
                    : "text-white hover:bg-white/10"
                )}
              >
                <Building2 className="h-5 w-5" />
                Corporate
              </button>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 -mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={cn(
                    "relative bg-white rounded-2xl shadow-xl overflow-hidden",
                    plan.popular && "ring-2 ring-[#c9a227] scale-105"
                  )}
                >
                  {plan.badge && (
                    <div className="absolute top-0 right-0">
                      <Badge
                        variant={plan.popular ? "gold" : "primary"}
                        className="rounded-none rounded-bl-xl px-4 py-2"
                      >
                        {plan.badge}
                      </Badge>
                    </div>
                  )}

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mt-2">{plan.description}</p>

                    <div className="mt-6">
                      {plan.price !== null ? (
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-bold text-gray-900">
                            ${plan.price}
                          </span>
                          <span className="text-gray-500">{plan.period}</span>
                        </div>
                      ) : (
                        <p className="text-4xl font-bold text-gray-900">
                          Custom
                        </p>
                      )}
                      {"minSeats" in plan && (
                        <p className="text-sm text-gray-500 mt-1">
                          Minimum {plan.minSeats} seats
                        </p>
                      )}
                    </div>

                    <ul className="mt-8 space-y-4">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          {feature.included ? (
                            <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          ) : (
                            <X className="h-5 w-5 text-gray-300 flex-shrink-0 mt-0.5" />
                          )}
                          <span
                            className={
                              feature.included
                                ? "text-gray-700"
                                : "text-gray-400"
                            }
                          >
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8">
                      <Link
                        href={
                          plan.cta === "Contact Sales" ||
                          plan.cta === "Talk to Us"
                            ? "/contact"
                            : "/register"
                        }
                      >
                        <Button
                          variant={plan.popular ? "primary" : "outline"}
                          size="lg"
                          fullWidth
                        >
                          {plan.cta}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantee Banner */}
        <section className="py-12 bg-[#1a1a2e]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-[#c9a227] rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="h-10 w-10 text-[#1a1a2e]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    30-Day Job Guarantee
                  </h3>
                  <p className="text-gray-300 mt-1">
                    Get hired within 30 days of completing your Professional
                    program or get a full refund.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-[#c9a227]">
                  <Briefcase className="h-5 w-5" />
                  <span>150+ Hiring Partners</span>
                </div>
                <div className="flex items-center gap-2 text-[#c9a227]">
                  <Star className="h-5 w-5" />
                  <span>98% Placement Rate</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 mt-2">
                Everything you need to know about our pricing and programs
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-semibold text-gray-900">
                      {faq.question}
                    </span>
                    <HelpCircle
                      className={cn(
                        "h-5 w-5 text-[#c9a227] transition-transform",
                        openFaq === index && "rotate-180"
                      )}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 text-gray-600">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Still have questions?</p>
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Talk to Our Team
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
