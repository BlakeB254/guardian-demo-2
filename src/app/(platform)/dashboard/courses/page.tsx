"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Clock,
  Play,
  CheckCircle2,
  Lock,
  ArrowRight,
  Filter,
  Search,
} from "lucide-react";

const courses = [
  {
    id: "fundamentals",
    title: "Security Fundamentals",
    description:
      "Master the core principles of professional security work including threat recognition, communication, and professional conduct.",
    progress: 65,
    lessons: 12,
    completedLessons: 8,
    duration: "4h 30m",
    status: "in_progress",
    category: "Core Training",
    instructor: "Big A",
  },
  {
    id: "conflict-resolution",
    title: "Conflict Resolution Mastery",
    description:
      "Learn Big A's signature techniques for resolving conflicts using psychology, strategic thinking, and effective communication.",
    progress: 25,
    lessons: 10,
    completedLessons: 2,
    duration: "5h",
    status: "in_progress",
    category: "Communication",
    instructor: "Big A",
    featured: true,
  },
  {
    id: "team-coordination",
    title: "Team Coordination & Tactics",
    description:
      "Master team-based security operations including radio communication, coordinated response, and shift management.",
    progress: 0,
    lessons: 8,
    completedLessons: 0,
    duration: "4h",
    status: "not_started",
    category: "Team Operations",
    instructor: "Marcus Johnson",
  },
  {
    id: "emergency-response",
    title: "Emergency Response Protocols",
    description:
      "Be prepared for any scenario with comprehensive emergency response training from medical emergencies to active threats.",
    progress: 0,
    lessons: 6,
    completedLessons: 0,
    duration: "3h",
    status: "locked",
    category: "Emergency",
    instructor: "Big A",
    prerequisite: "Security Fundamentals",
  },
  {
    id: "hospitality-security",
    title: "Hospitality Security Specialization",
    description:
      "Industry-specific training for hotels, restaurants, and entertainment venues focusing on guest relations and service.",
    progress: 0,
    lessons: 8,
    completedLessons: 0,
    duration: "3h 30m",
    status: "locked",
    category: "Specialization",
    instructor: "Sarah Chen",
    prerequisite: "Conflict Resolution Mastery",
  },
  {
    id: "perc-certification",
    title: "Illinois PERC Card Preparation",
    description:
      "Everything you need to pass your Illinois PERC card examination and start your security career legally.",
    progress: 100,
    lessons: 5,
    completedLessons: 5,
    duration: "2h",
    status: "completed",
    category: "Certification",
    instructor: "Big A",
    certificate: true,
  },
];

const categories = [
  "All Courses",
  "Core Training",
  "Communication",
  "Team Operations",
  "Specialization",
  "Certification",
];

export default function CoursesPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Courses</h1>
          <p className="text-gray-600 mt-1">
            Track your progress and continue learning
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search courses..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#c9a227]"
            />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((category, index) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              index === 0
                ? "bg-[#1a1a2e] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Progress Summary */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <p className="text-3xl font-bold text-gray-900">6</p>
              <p className="text-gray-500 text-sm">Total Courses</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-emerald-600">1</p>
              <p className="text-gray-500 text-sm">Completed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#c9a227]">2</p>
              <p className="text-gray-500 text-sm">In Progress</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-400">3</p>
              <p className="text-gray-500 text-sm">Remaining</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Course Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card
            key={course.id}
            hover={course.status !== "locked"}
            className={`overflow-hidden ${
              course.status === "locked" ? "opacity-75" : ""
            }`}
          >
            {/* Course Header */}
            <div className="h-32 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-4 relative">
              <div className="flex items-start justify-between">
                <Badge
                  variant={
                    course.status === "completed"
                      ? "success"
                      : course.status === "locked"
                      ? "default"
                      : "gold"
                  }
                  size="sm"
                >
                  {course.status === "completed"
                    ? "Completed"
                    : course.status === "locked"
                    ? "Locked"
                    : course.category}
                </Badge>
                {course.featured && (
                  <Badge variant="gold" size="sm">
                    Featured
                  </Badge>
                )}
              </div>
              <div className="absolute bottom-4 left-4">
                <BookOpen className="h-8 w-8 text-[#c9a227]" />
              </div>
              {course.certificate && (
                <div className="absolute bottom-4 right-4">
                  <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                </div>
              )}
            </div>

            <CardContent className="p-5">
              <h3 className="font-bold text-gray-900 text-lg">{course.title}</h3>
              <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                {course.description}
              </p>

              {/* Meta Info */}
              <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4" />
                  {course.lessons} lessons
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {course.duration}
                </span>
              </div>

              {/* Progress Bar */}
              {course.status !== "locked" && (
                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-500">
                      {course.completedLessons}/{course.lessons} completed
                    </span>
                    <span className="font-medium text-gray-900">
                      {course.progress}%
                    </span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Prerequisite Notice */}
              {course.status === "locked" && course.prerequisite && (
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Lock className="h-4 w-4" />
                    <span>
                      Complete <strong>{course.prerequisite}</strong> first
                    </span>
                  </div>
                </div>
              )}

              {/* Action Button */}
              <div className="mt-4">
                {course.status === "completed" ? (
                  <Link href={`/dashboard/courses/${course.id}`}>
                    <Button variant="outline" fullWidth>
                      Review Course
                    </Button>
                  </Link>
                ) : course.status === "locked" ? (
                  <Button variant="outline" fullWidth disabled>
                    <Lock className="mr-2 h-4 w-4" />
                    Locked
                  </Button>
                ) : course.status === "in_progress" ? (
                  <Link href={`/dashboard/courses/${course.id}`}>
                    <Button variant="primary" fullWidth>
                      <Play className="mr-2 h-4 w-4" />
                      Continue
                    </Button>
                  </Link>
                ) : (
                  <Link href={`/dashboard/courses/${course.id}`}>
                    <Button variant="secondary" fullWidth>
                      Start Course
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
