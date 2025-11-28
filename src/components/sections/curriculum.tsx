"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Eye,
  MessageSquare,
  Users,
  Brain,
  Target,
  AlertTriangle,
  BookOpen,
  Award,
} from "lucide-react";

const curriculumModules = [
  {
    id: "threat",
    title: "Threat Recognition",
    icon: Eye,
    duration: "4h",
    topics: ["Behavioral Analysis", "Warning Signs", "Environment Scanning"],
  },
  {
    id: "communication",
    title: "Communication & De-escalation",
    icon: MessageSquare,
    duration: "5h",
    topics: ["Verbal Techniques", "Active Listening", "Crisis Communication"],
    featured: true,
  },
  {
    id: "team",
    title: "Team Coordination",
    icon: Users,
    duration: "4h",
    topics: ["Radio Protocols", "Role Assignment", "Coordinated Response"],
  },
  {
    id: "conflict",
    title: "Conflict Resolution",
    icon: Brain,
    duration: "4h",
    topics: ["Psychology", "Strategic Thinking", "Emotional Control"],
  },
  {
    id: "positioning",
    title: "Security Positioning",
    icon: Target,
    duration: "3h",
    topics: ["Static Posts", "Moving Details", "Coverage Angles"],
  },
  {
    id: "emergency",
    title: "Emergency Response",
    icon: AlertTriangle,
    duration: "3h",
    topics: ["Medical Response", "Active Threats", "Evacuation"],
  },
];

export function Curriculum() {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Badge variant="gold" size="md" className="mb-3">
            <BookOpen className="h-3.5 w-3.5 mr-1.5" />
            Curriculum
          </Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            Comprehensive Training
            <span className="text-gradient-gold block mt-1">Built by Experts</span>
          </h2>
          <p className="mt-3 text-gray-600">
            20+ hours of practical, job-ready training designed by industry professionals.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {curriculumModules.map((module) => (
            <div
              key={module.id}
              className={cn(
                "bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow",
                module.featured && "ring-2 ring-[#c9a227]"
              )}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 bg-[#1a1a2e] rounded-lg flex items-center justify-center">
                  <module.icon className="h-5 w-5 text-[#c9a227]" />
                </div>
                <span className="text-sm text-gray-500">{module.duration}</span>
              </div>
              <h3 className="font-bold text-gray-900">{module.title}</h3>
              {module.featured && (
                <Badge variant="gold" size="sm" className="mt-1">
                  Signature Module
                </Badge>
              )}
              <div className="mt-3 flex flex-wrap gap-2">
                {module.topics.map((topic) => (
                  <span
                    key={topic}
                    className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certification Banner */}
        <div className="mt-10 bg-[#1a1a2e] rounded-2xl p-6 md:p-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="w-14 h-14 bg-[#c9a227] rounded-full flex items-center justify-center">
              <Award className="h-7 w-7 text-[#1a1a2e]" />
            </div>
            <div className="text-white">
              <h3 className="text-lg md:text-xl font-bold">
                Earn Your Guardian Elite Certification
              </h3>
              <p className="text-gray-300 text-sm mt-1">
                IDFPR Approved • PERC Card Ready • Industry Recognized
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
