"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Clock,
  Trophy,
  TrendingUp,
  Play,
  ArrowRight,
  Calendar,
  Award,
  Briefcase,
  Star,
} from "lucide-react";

// Mock data for demo
const userProgress = {
  overallProgress: 35,
  coursesCompleted: 1,
  totalCourses: 4,
  hoursCompleted: 7,
  totalHours: 20,
  currentStreak: 5,
  certificationsEarned: 0,
};

const currentCourse = {
  id: "fundamentals",
  title: "Security Fundamentals",
  progress: 65,
  nextLesson: "Threat Recognition Basics",
  lastAccessed: "2 hours ago",
  thumbnail: null,
};

const courses = [
  {
    id: "fundamentals",
    title: "Security Fundamentals",
    progress: 65,
    lessons: 12,
    completedLessons: 8,
    duration: "4h 30m",
    status: "in_progress",
  },
  {
    id: "conflict-resolution",
    title: "Conflict Resolution Mastery",
    progress: 25,
    lessons: 10,
    completedLessons: 2,
    duration: "5h",
    status: "in_progress",
  },
  {
    id: "team-coordination",
    title: "Team Coordination & Tactics",
    progress: 0,
    lessons: 8,
    completedLessons: 0,
    duration: "4h",
    status: "not_started",
  },
  {
    id: "emergency-response",
    title: "Emergency Response Protocols",
    progress: 0,
    lessons: 6,
    completedLessons: 0,
    duration: "3h",
    status: "locked",
  },
];

const upcomingEvents = [
  {
    id: 1,
    title: "Live Q&A: De-escalation Techniques",
    date: "Dec 5, 2024",
    time: "6:00 PM CST",
    type: "live",
  },
  {
    id: 2,
    title: "In-Person Training Session",
    date: "Dec 10, 2024",
    time: "9:00 AM CST",
    type: "in-person",
  },
];

const recentAchievements = [
  { id: 1, title: "First Lesson Complete", icon: Star, earned: true },
  { id: 2, title: "Quiz Master", icon: Trophy, earned: true },
  { id: 3, title: "5-Day Streak", icon: TrendingUp, earned: true },
  { id: 4, title: "Module Complete", icon: Award, earned: false },
];

const jobOpportunities = [
  {
    id: 1,
    title: "Security Officer",
    company: "Marriott Chicago",
    salary: "$45-55K",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Event Security Lead",
    company: "United Center",
    salary: "$22-28/hr",
    type: "Part-time",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back, Demo User!
          </h1>
          <p className="text-gray-600 mt-1">
            Continue your journey to becoming an elite security professional.
          </p>
        </div>
        <Link href={`/dashboard/courses/${currentCourse.id}`}>
          <Button variant="primary" size="lg">
            <Play className="mr-2 h-5 w-5" />
            Continue Learning
          </Button>
        </Link>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <Card>
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#c9a227]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-[#c9a227]" />
              </div>
              <div className="min-w-0">
                <p className="text-xl md:text-2xl font-bold text-gray-900">
                  {userProgress.overallProgress}%
                </p>
                <p className="text-xs md:text-sm text-gray-500 truncate">Progress</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
              </div>
              <div className="min-w-0">
                <p className="text-xl md:text-2xl font-bold text-gray-900">
                  {userProgress.hoursCompleted}h
                </p>
                <p className="text-xs md:text-sm text-gray-500 truncate">
                  of {userProgress.totalHours}h
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Trophy className="h-5 w-5 md:h-6 md:w-6 text-emerald-600" />
              </div>
              <div className="min-w-0">
                <p className="text-xl md:text-2xl font-bold text-gray-900">
                  {userProgress.currentStreak}
                </p>
                <p className="text-xs md:text-sm text-gray-500 truncate">Day Streak</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Award className="h-5 w-5 md:h-6 md:w-6 text-purple-600" />
              </div>
              <div className="min-w-0">
                <p className="text-xl md:text-2xl font-bold text-gray-900">
                  {userProgress.certificationsEarned}
                </p>
                <p className="text-xs md:text-sm text-gray-500 truncate">Certs</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Content - 2 columns */}
        <div className="lg:col-span-2 space-y-6">
          {/* Continue Learning Card */}
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] p-6">
              <div className="flex items-start justify-between">
                <div className="text-white">
                  <Badge variant="gold" size="sm" className="mb-3">
                    Continue Learning
                  </Badge>
                  <h3 className="text-xl font-bold">{currentCourse.title}</h3>
                  <p className="text-gray-300 mt-1">
                    Next: {currentCourse.nextLesson}
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Last accessed {currentCourse.lastAccessed}
                  </p>
                </div>
                <div className="text-right">
                  <div className="w-20 h-20 relative">
                    <svg className="w-20 h-20 transform -rotate-90">
                      <circle
                        cx="40"
                        cy="40"
                        r="36"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="40"
                        cy="40"
                        r="36"
                        stroke="#c9a227"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${currentCourse.progress * 2.26} 226`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-white font-bold">
                      {currentCourse.progress}%
                    </span>
                  </div>
                </div>
              </div>
              <Link href={`/dashboard/courses/${currentCourse.id}`}>
                <Button variant="primary" className="mt-4">
                  <Play className="mr-2 h-4 w-4" />
                  Resume Course
                </Button>
              </Link>
            </div>
          </Card>

          {/* All Courses */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Your Courses</CardTitle>
              <Link
                href="/dashboard/courses"
                className="text-sm text-[#c9a227] hover:underline"
              >
                View all
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className={`flex items-center gap-4 p-4 rounded-xl border ${
                      course.status === "locked"
                        ? "bg-gray-50 border-gray-200 opacity-60"
                        : "bg-white border-gray-100 hover:border-[#c9a227]/30 cursor-pointer"
                    } transition-colors`}
                  >
                    <div className="w-14 h-14 bg-[#1a1a2e] rounded-xl flex items-center justify-center flex-shrink-0">
                      <BookOpen className="h-6 w-6 text-[#c9a227]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-gray-900 truncate">
                          {course.title}
                        </h4>
                        {course.status === "locked" && (
                          <Badge variant="default" size="sm">
                            Locked
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                        <span>
                          {course.completedLessons}/{course.lessons} lessons
                        </span>
                        <span>{course.duration}</span>
                      </div>
                      {course.status !== "locked" && (
                        <div className="mt-2">
                          <div className="progress-bar">
                            <div
                              className="progress-bar-fill"
                              style={{ width: `${course.progress}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                    {course.status === "in_progress" && (
                      <Link href={`/dashboard/courses/${course.id}`}>
                        <Button variant="ghost" size="sm">
                          Continue
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    )}
                    {course.status === "not_started" && (
                      <Link href={`/dashboard/courses/${course.id}`}>
                        <Button variant="outline" size="sm">
                          Start
                        </Button>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar - 1 column */}
        <div className="space-y-6">
          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[#c9a227]" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-2 h-2 mt-2 rounded-full ${
                          event.type === "live" ? "bg-red-500" : "bg-blue-500"
                        }`}
                      />
                      <div>
                        <p className="font-medium text-gray-900 text-sm">
                          {event.title}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {event.date} at {event.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/dashboard/schedule">
                <Button variant="outline" fullWidth className="mt-4">
                  View Full Schedule
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-[#c9a227]" />
                Recent Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-3">
                {recentAchievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`aspect-square rounded-xl flex items-center justify-center ${
                      achievement.earned
                        ? "bg-[#c9a227]/10"
                        : "bg-gray-100 opacity-40"
                    }`}
                    title={achievement.title}
                  >
                    <achievement.icon
                      className={`h-6 w-6 ${
                        achievement.earned ? "text-[#c9a227]" : "text-gray-400"
                      }`}
                    />
                  </div>
                ))}
              </div>
              <Link href="/dashboard/achievements">
                <Button variant="ghost" fullWidth className="mt-4">
                  View All Achievements
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Job Opportunities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-[#c9a227]" />
                Job Opportunities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {jobOpportunities.map((job) => (
                  <div
                    key={job.id}
                    className="p-3 border border-gray-100 rounded-xl hover:border-[#c9a227]/30 transition-colors cursor-pointer"
                  >
                    <p className="font-medium text-gray-900">{job.title}</p>
                    <p className="text-sm text-gray-500">{job.company}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="success" size="sm">
                        {job.salary}
                      </Badge>
                      <Badge variant="default" size="sm">
                        {job.type}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/dashboard/jobs">
                <Button variant="primary" fullWidth className="mt-4">
                  Browse All Jobs
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
