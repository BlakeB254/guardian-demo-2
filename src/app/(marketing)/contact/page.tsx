"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Building2,
  User,
  CheckCircle2,
  Briefcase,
  UserCheck,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(312) 555-1234",
    href: "tel:+13125551234",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@guardianelite.com",
    href: "mailto:info@guardianelite.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chicago, IL",
    href: "https://maps.google.com",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Fri: 9AM-6PM CST",
    href: null,
  },
];

const inquiryTypes = [
  { value: "individual", label: "Individual", icon: User },
  { value: "corporate", label: "Corporate", icon: Building2 },
  { value: "partnership", label: "Partnership", icon: Briefcase },
];

const industryOptions = [
  "Hospitality / Hotels",
  "Healthcare / Hospitals",
  "Retail / Shopping",
  "Entertainment / Events",
  "Corporate / Office",
  "Education / Schools",
  "Government / Municipal",
  "Residential / HOA",
  "Other",
];

const staffSizeOptions = [
  "1-5 security staff",
  "6-15 security staff",
  "16-30 security staff",
  "31-50 security staff",
  "50+ security staff",
  "No current security staff",
];

const trafficOptions = [
  "Under 100 daily",
  "100-500 daily",
  "500-1,000 daily",
  "1,000-5,000 daily",
  "5,000+ daily",
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
  // Corporate/Partnership fields
  businessName: string;
  businessLocation: string;
  industry: string;
  staffSize: string;
  dailyTraffic: string;
  currentChallenges: string;
}

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "individual",
    message: "",
    // Corporate/Partnership fields
    businessName: "",
    businessLocation: "",
    industry: "",
    staffSize: "",
    dailyTraffic: "",
    currentChallenges: "",
  });

  const showBusinessFields = formData.inquiryType === "corporate" || formData.inquiryType === "partnership";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsLoading(false);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      inquiryType: "individual",
      message: "",
      businessName: "",
      businessLocation: "",
      industry: "",
      staffSize: "",
      dailyTraffic: "",
      currentChallenges: "",
    });
  };

  return (
    <>
      <Header />
      <main className="bg-gray-50">
        {/* Hero */}
        <section className="pt-28 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <Badge variant="gold" size="lg" className="mb-4">
                <MessageSquare className="h-4 w-4 mr-2" />
                Contact Us
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Let&apos;s Talk About Your
                <span className="text-[#c9a227]"> Security Goals</span>
              </h1>
              <p className="mt-4 text-lg text-gray-300 leading-relaxed">
                Whether you&apos;re an individual starting your career or an organization
                needing custom training solutions, we&apos;re here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
              {/* Contact Info Sidebar */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">
                    Get in Touch
                  </h2>
                  <div className="space-y-4">
                    {contactInfo.map((item) => {
                      const content = (
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-[#c9a227]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <item.icon className="h-5 w-5 text-[#c9a227]" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-500">{item.label}</p>
                            <p className="text-base font-semibold text-gray-900">{item.value}</p>
                          </div>
                        </div>
                      );

                      return item.href ? (
                        <a
                          key={item.label}
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="block p-3 -mx-3 rounded-xl hover:bg-gray-50 transition-colors"
                        >
                          {content}
                        </a>
                      ) : (
                        <div key={item.label} className="p-3 -mx-3">
                          {content}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-[#1a1a2e] rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
                  <div className="space-y-3">
                    <Link
                      href="/pricing"
                      className="flex items-center gap-2 text-gray-300 hover:text-[#c9a227] transition-colors"
                    >
                      <span className="text-[#c9a227]">→</span>
                      View Pricing Plans
                    </Link>
                    <Link
                      href="/about"
                      className="flex items-center gap-2 text-gray-300 hover:text-[#c9a227] transition-colors"
                    >
                      <span className="text-[#c9a227]">→</span>
                      Learn About Us
                    </Link>
                    <Link
                      href="/register"
                      className="flex items-center gap-2 text-gray-300 hover:text-[#c9a227] transition-colors"
                    >
                      <span className="text-[#c9a227]">→</span>
                      Start Training Today
                    </Link>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-emerald-900">Fast Response</h3>
                      <p className="text-sm text-emerald-700 mt-1">
                        We typically respond within 24 hours on business days.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 className="h-10 w-10 text-emerald-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-600 mt-3 max-w-md mx-auto">
                        Thank you for reaching out. Our team will review your inquiry
                        and get back to you within 24 hours.
                      </p>
                      <Button
                        variant="outline"
                        className="mt-6"
                        onClick={resetForm}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                          Send Us a Message
                        </h2>
                        <p className="text-gray-600 mt-1">
                          Fill out the form below and we&apos;ll be in touch soon.
                        </p>
                      </div>

                      {/* Inquiry Type Selection */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-3">
                          I&apos;m interested in
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                          {inquiryTypes.map((type) => (
                            <button
                              key={type.value}
                              type="button"
                              onClick={() =>
                                setFormData({ ...formData, inquiryType: type.value })
                              }
                              className={`p-4 rounded-xl border-2 text-center transition-all ${
                                formData.inquiryType === type.value
                                  ? "border-[#c9a227] bg-[#c9a227]/5 shadow-sm"
                                  : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                              }`}
                            >
                              <type.icon className={`h-6 w-6 mx-auto mb-2 ${
                                formData.inquiryType === type.value
                                  ? "text-[#c9a227]"
                                  : "text-gray-400"
                              }`} />
                              <span className={`text-sm font-semibold ${
                                formData.inquiryType === type.value
                                  ? "text-gray-900"
                                  : "text-gray-600"
                              }`}>
                                {type.label}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Contact Information */}
                      <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                          <UserCheck className="h-4 w-4 text-[#c9a227]" />
                          Contact Information
                        </h3>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              First Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.firstName}
                              onChange={(e) =>
                                setFormData({ ...formData, firstName: e.target.value })
                              }
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 transition-all"
                              placeholder="John"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Last Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.lastName}
                              onChange={(e) =>
                                setFormData({ ...formData, lastName: e.target.value })
                              }
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 transition-all"
                              placeholder="Doe"
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Email <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                              }
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 transition-all"
                              placeholder="you@example.com"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Phone
                            </label>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) =>
                                setFormData({ ...formData, phone: e.target.value })
                              }
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 transition-all"
                              placeholder="(312) 555-1234"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Business Information - Conditional */}
                      {showBusinessFields && (
                        <div className="space-y-4 pt-2">
                          <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                            <Building2 className="h-4 w-4 text-[#c9a227]" />
                            Business Information
                            <span className="text-xs font-normal text-gray-500 ml-1">(Optional but helps us serve you better)</span>
                          </h3>

                          <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Business / Organization Name
                              </label>
                              <input
                                type="text"
                                value={formData.businessName}
                                onChange={(e) =>
                                  setFormData({ ...formData, businessName: e.target.value })
                                }
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 transition-all"
                                placeholder="Acme Security Corp"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Location / City
                              </label>
                              <input
                                type="text"
                                value={formData.businessLocation}
                                onChange={(e) =>
                                  setFormData({ ...formData, businessLocation: e.target.value })
                                }
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 transition-all"
                                placeholder="Chicago, IL"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Industry
                            </label>
                            <select
                              value={formData.industry}
                              onChange={(e) =>
                                setFormData({ ...formData, industry: e.target.value })
                              }
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 transition-all bg-white"
                            >
                              <option value="">Select your industry...</option>
                              {industryOptions.map((option) => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Current Security Staff Size
                              </label>
                              <select
                                value={formData.staffSize}
                                onChange={(e) =>
                                  setFormData({ ...formData, staffSize: e.target.value })
                                }
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 transition-all bg-white"
                              >
                                <option value="">Select staff size...</option>
                                {staffSizeOptions.map((option) => (
                                  <option key={option} value={option}>
                                    {option}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Daily Customer / Visitor Traffic
                              </label>
                              <select
                                value={formData.dailyTraffic}
                                onChange={(e) =>
                                  setFormData({ ...formData, dailyTraffic: e.target.value })
                                }
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 transition-all bg-white"
                              >
                                <option value="">Select traffic volume...</option>
                                {trafficOptions.map((option) => (
                                  <option key={option} value={option}>
                                    {option}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Current Security Challenges
                            </label>
                            <textarea
                              rows={2}
                              value={formData.currentChallenges}
                              onChange={(e) =>
                                setFormData({ ...formData, currentChallenges: e.target.value })
                              }
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 transition-all resize-none"
                              placeholder="e.g., High staff turnover, lack of de-escalation skills, inconsistent protocols..."
                            />
                          </div>
                        </div>
                      )}

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 transition-all resize-none"
                          placeholder={
                            formData.inquiryType === "individual"
                              ? "Tell us about your career goals and what you hope to achieve..."
                              : formData.inquiryType === "corporate"
                              ? "Tell us about your training needs, goals, and any specific requirements..."
                              : "Tell us about your organization and how you'd like to partner with us..."
                          }
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        fullWidth
                        loading={isLoading}
                      >
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </Button>

                      <p className="text-xs text-gray-500 text-center">
                        By submitting this form, you agree to be contacted about our services.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
