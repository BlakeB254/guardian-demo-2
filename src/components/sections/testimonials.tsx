"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Star, Quote, ChevronLeft, ChevronRight, Building2, User } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "Guardian Elite transformed my career. I went from minimum wage to a $55K security position. Had three offers within two weeks.",
    author: "Marcus Johnson",
    role: "Hotel Security Lead",
    company: "Marriott Chicago",
    type: "individual",
  },
  {
    id: 2,
    content: "Guardian Elite graduates come prepared and professional. We've hired 15 of their graduates and every one exceeded expectations.",
    author: "Sarah Chen",
    role: "Director of Security",
    company: "Northwestern Memorial",
    type: "corporate",
  },
  {
    id: 3,
    content: "Big A's conflict resolution training saved my career. Using your mind as your greatest weapon changed everything for me.",
    author: "Darnell Williams",
    role: "Event Security Supervisor",
    company: "United Center",
    type: "individual",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <Badge variant="gold" size="md" className="mb-3">
            <Star className="h-3.5 w-3.5 mr-1.5 fill-current" />
            Success Stories
          </Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            From Our
            <span className="text-gradient-gold"> Graduates & Partners</span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-[#c9a227] text-[#c9a227]" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-lg md:text-xl text-gray-900 text-center font-medium">
              <Quote className="h-6 w-6 text-[#c9a227]/30 mx-auto mb-2" />
              &quot;{current.content}&quot;
            </blockquote>

            {/* Author */}
            <div className="mt-6 flex items-center justify-center gap-3">
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center",
                  current.type === "corporate" ? "bg-[#1a1a2e]" : "bg-[#c9a227]"
                )}
              >
                {current.type === "corporate" ? (
                  <Building2 className="h-5 w-5 text-[#c9a227]" />
                ) : (
                  <User className="h-5 w-5 text-[#1a1a2e]" />
                )}
              </div>
              <div className="text-left">
                <p className="font-bold text-gray-900">{current.author}</p>
                <p className="text-sm text-gray-500">
                  {current.role}, {current.company}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#1a1a2e] hover:text-white flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      index === currentIndex ? "bg-[#c9a227] w-6" : "bg-gray-300"
                    )}
                  />
                ))}
              </div>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#1a1a2e] hover:text-white flex items-center justify-center transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { value: "4.9/5", label: "Rating" },
            { value: "500+", label: "Reviews" },
            { value: "98%", label: "Recommend" },
            { value: "150+", label: "Partners" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl md:text-3xl font-bold text-[#1a1a2e]">{stat.value}</p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
