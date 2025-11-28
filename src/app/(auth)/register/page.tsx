"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  User,
  Phone,
  CheckCircle2,
  Award,
} from "lucide-react";

const benefits = [
  "Illinois PERC Card Certification",
  "30-Day Job Placement Guarantee",
  "Money-Back Promise",
  "Lifetime Alumni Network",
  "150+ Hiring Partners",
];

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
    program: "individual",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (step === 1) {
      setStep(2);
      return;
    }

    setIsLoading(true);

    // Simulate registration - in production, this would call an auth API
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Redirect to dashboard
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-2/5 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] flex-col justify-between p-12">
        <Link href="/" className="flex items-center gap-3">
          <Shield className="h-10 w-10 text-[#c9a227]" />
          <div>
            <span className="text-xl font-bold text-white">Guardian Elite</span>
            <span className="block text-xs text-[#c9a227] tracking-wider uppercase">
              Security Academy
            </span>
          </div>
        </Link>

        <div>
          <Badge variant="gold" size="lg" className="mb-6">
            <Award className="h-4 w-4 mr-2" />
            30-Day Job Guarantee
          </Badge>
          <h2 className="text-4xl font-bold text-white leading-tight">
            Start Your Security
            <span className="block text-[#c9a227]">Career Today</span>
          </h2>
          <p className="text-gray-300 mt-4 text-lg">
            Join 2,500+ professionals who transformed their careers with
            Guardian Elite training.
          </p>

          <ul className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3 text-white">
                <CheckCircle2 className="h-5 w-5 text-[#c9a227] flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-gray-400 text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-[#c9a227] hover:underline">
            Sign in
          </Link>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-lg">
          {/* Mobile Logo */}
          <Link href="/" className="lg:hidden flex items-center gap-3 mb-8">
            <Shield className="h-10 w-10 text-[#c9a227]" />
            <div>
              <span className="text-xl font-bold text-gray-900">
                Guardian Elite
              </span>
              <span className="block text-xs text-[#c9a227] tracking-wider uppercase">
                Security Academy
              </span>
            </div>
          </Link>

          {/* Progress Steps */}
          <div className="flex items-center gap-4 mb-8">
            {[1, 2].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step >= s
                      ? "bg-[#c9a227] text-[#1a1a2e]"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {step > s ? <CheckCircle2 className="h-5 w-5" /> : s}
                </div>
                {s < 2 && (
                  <div
                    className={`w-16 h-1 rounded ${
                      step > s ? "bg-[#c9a227]" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Header */}
          <h1 className="text-3xl font-bold text-gray-900">
            {step === 1 ? "Create your account" : "Almost there!"}
          </h1>
          <p className="text-gray-600 mt-2">
            {step === 1
              ? "Enter your details to get started"
              : "Set up your password and you're ready to go"}
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {step === 1 ? (
              <>
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                        className="input-field pl-12"
                        placeholder="John"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      className="input-field"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="input-field pl-12"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="input-field pl-12"
                      placeholder="(312) 555-1234"
                    />
                  </div>
                </div>

                {/* Program Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    I&apos;m interested in
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: "individual", label: "Individual Training" },
                      { value: "corporate", label: "Corporate Training" },
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, program: option.value })
                        }
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          formData.program === option.value
                            ? "border-[#c9a227] bg-[#c9a227]/5"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <span className="font-medium text-gray-900">
                          {option.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      className="input-field pl-12 pr-12"
                      placeholder="••••••••"
                      minLength={8}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Must be at least 8 characters
                  </p>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          confirmPassword: e.target.value,
                        })
                      }
                      className="input-field pl-12"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                {/* Terms */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    checked={formData.agreeTerms}
                    onChange={(e) =>
                      setFormData({ ...formData, agreeTerms: e.target.checked })
                    }
                    className="w-4 h-4 mt-1 rounded border-gray-300 text-[#c9a227] focus:ring-[#c9a227]"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the{" "}
                    <Link href="/terms" className="text-[#c9a227] hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-[#c9a227] hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
              </>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 pt-4">
              {step === 2 && (
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={() => setStep(1)}
                >
                  Back
                </Button>
              )}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                loading={isLoading}
              >
                {step === 1 ? "Continue" : "Create Account"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </form>

          {/* Mobile: Sign in link */}
          <p className="lg:hidden text-center text-gray-600 mt-8">
            Already have an account?{" "}
            <Link href="/login" className="text-[#c9a227] hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
