"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Play,
  Pause,
  CheckCircle2,
  Circle,
  Lock,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Clock,
  FileText,
  Download,
  MessageSquare,
  Volume2,
  VolumeX,
  Maximize,
  Settings,
  SkipForward,
  SkipBack,
} from "lucide-react";

interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  type: string;
  current?: boolean;
  locked?: boolean;
}

interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  totalLessons: number;
  completedLessons: number;
  totalDuration: string;
  modules: Module[];
}

// Mock course data
const courseData: Record<string, Course> = {
  fundamentals: {
    id: "fundamentals",
    title: "Security Fundamentals",
    description:
      "Master the core principles of professional security work. This comprehensive course covers everything from threat recognition to professional conduct.",
    instructor: "Big A",
    totalLessons: 12,
    completedLessons: 8,
    totalDuration: "4h 30m",
    modules: [
      {
        id: "m1",
        title: "Introduction to Security",
        lessons: [
          {
            id: "l1",
            title: "Welcome to Guardian Elite",
            duration: "5:00",
            completed: true,
            type: "video",
          },
          {
            id: "l2",
            title: "The Security Professional Mindset",
            duration: "15:00",
            completed: true,
            type: "video",
          },
          {
            id: "l3",
            title: "Understanding Your Role",
            duration: "12:00",
            completed: true,
            type: "video",
          },
        ],
      },
      {
        id: "m2",
        title: "Threat Recognition",
        lessons: [
          {
            id: "l4",
            title: "Behavioral Indicators",
            duration: "20:00",
            completed: true,
            type: "video",
          },
          {
            id: "l5",
            title: "Environmental Awareness",
            duration: "18:00",
            completed: true,
            type: "video",
          },
          {
            id: "l6",
            title: "Threat Assessment Framework",
            duration: "22:00",
            completed: true,
            type: "video",
          },
          {
            id: "l7",
            title: "Module Quiz",
            duration: "10:00",
            completed: true,
            type: "quiz",
          },
        ],
      },
      {
        id: "m3",
        title: "Communication Skills",
        lessons: [
          {
            id: "l8",
            title: "Professional Communication",
            duration: "15:00",
            completed: true,
            type: "video",
          },
          {
            id: "l9",
            title: "De-escalation Techniques",
            duration: "25:00",
            completed: false,
            current: true,
            type: "video",
          },
          {
            id: "l10",
            title: "Radio Communication",
            duration: "12:00",
            completed: false,
            type: "video",
          },
        ],
      },
      {
        id: "m4",
        title: "Emergency Response",
        lessons: [
          {
            id: "l11",
            title: "Emergency Protocols",
            duration: "20:00",
            completed: false,
            locked: true,
            type: "video",
          },
          {
            id: "l12",
            title: "Final Assessment",
            duration: "30:00",
            completed: false,
            locked: true,
            type: "quiz",
          },
        ],
      },
    ],
  },
};

const currentLesson = {
  id: "l9",
  title: "De-escalation Techniques",
  description:
    "Learn the proven techniques used by elite security professionals to resolve conflicts without physical intervention. This lesson covers verbal de-escalation, body language, and strategic positioning.",
  duration: "25:00",
  resources: [
    { title: "De-escalation Quick Reference", type: "pdf" },
    { title: "Scenario Practice Guide", type: "pdf" },
    { title: "Communication Scripts", type: "download" },
  ],
};

export default function CourseViewerPage() {
  const params = useParams();
  const courseId = params.courseId as string;
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress] = useState(35);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  const course =
    courseData[courseId as keyof typeof courseData] || courseData.fundamentals;

  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-[calc(100vh-64px)] -m-4 md:-m-6">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col bg-gray-900 min-h-0">
        {/* Video Player */}
        <div className="relative min-h-[240px] sm:min-h-[320px] lg:flex-1 bg-black flex items-center justify-center">
          {/* Video Placeholder */}
          <div className="text-center text-white">
            <div className="w-32 h-32 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6">
              {isPlaying ? (
                <Pause className="h-16 w-16" />
              ) : (
                <Play className="h-16 w-16 ml-2" />
              )}
            </div>
            <h3 className="text-xl font-semibold">{currentLesson.title}</h3>
            <p className="text-gray-400 mt-2">Video Player Placeholder</p>
          </div>

          {/* Video Controls Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            {/* Progress Bar */}
            <div className="mb-4">
              <div className="h-1 bg-white/20 rounded-full cursor-pointer group">
                <div
                  className="h-full bg-[#c9a227] rounded-full relative"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#c9a227] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>8:45</span>
                <span>{currentLesson.duration}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button className="text-white hover:text-[#c9a227] transition-colors">
                  <SkipBack className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-12 h-12 bg-[#c9a227] rounded-full flex items-center justify-center text-[#1a1a2e] hover:bg-[#e4c865] transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="h-6 w-6" />
                  ) : (
                    <Play className="h-6 w-6 ml-1" />
                  )}
                </button>
                <button className="text-white hover:text-[#c9a227] transition-colors">
                  <SkipForward className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="text-white hover:text-[#c9a227] transition-colors"
                >
                  {isMuted ? (
                    <VolumeX className="h-5 w-5" />
                  ) : (
                    <Volume2 className="h-5 w-5" />
                  )}
                </button>
              </div>

              <div className="flex items-center gap-4">
                <button className="text-white hover:text-[#c9a227] transition-colors">
                  <Settings className="h-5 w-5" />
                </button>
                <button className="text-white hover:text-[#c9a227] transition-colors">
                  <Maximize className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Lesson Info */}
        <div className="bg-gray-800 p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="flex-1">
              <Badge variant="gold" size="sm" className="mb-2">
                Module 3: Communication Skills
              </Badge>
              <h2 className="text-lg md:text-2xl font-bold text-white">
                {currentLesson.title}
              </h2>
              <p className="text-gray-400 text-sm md:text-base mt-2 line-clamp-2 md:line-clamp-none">{currentLesson.description}</p>
            </div>
            <div className="flex gap-2 md:gap-3">
              {/* Mobile: Show Lessons button */}
              <Button
                variant="outline"
                className="lg:hidden border-white/20 text-white"
                onClick={() => setShowMobileSidebar(true)}
              >
                <BookOpen className="mr-2 h-4 w-4" />
                Lessons
              </Button>
              <Button variant="outline" className="border-white/20 text-white hidden sm:flex">
                <MessageSquare className="mr-2 h-4 w-4" />
                Discussion
              </Button>
              <Button variant="primary">
                <CheckCircle2 className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Mark </span>Complete
              </Button>
            </div>
          </div>

          {/* Resources */}
          <div className="mt-4 md:mt-6 flex flex-wrap gap-2 md:gap-4">
            {currentLesson.resources.map((resource) => (
              <button
                key={resource.title}
                className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/5 rounded-lg text-gray-300 hover:bg-white/10 transition-colors text-sm"
              >
                {resource.type === "pdf" ? (
                  <FileText className="h-4 w-4 text-red-400" />
                ) : (
                  <Download className="h-4 w-4 text-[#c9a227]" />
                )}
                <span className="hidden sm:inline">{resource.title}</span>
                <span className="sm:hidden">{resource.type === "pdf" ? "PDF" : "Download"}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {showMobileSidebar && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setShowMobileSidebar(false)}
        />
      )}

      {/* Course Sidebar */}
      <div
        className={cn(
          "bg-white border-l border-gray-200 transition-all duration-300 flex flex-col",
          // Desktop
          "hidden lg:flex",
          sidebarCollapsed ? "lg:w-0 lg:overflow-hidden" : "lg:w-80",
          // Mobile: slide-over from right
          showMobileSidebar && "fixed inset-y-0 right-0 flex w-80 z-50"
        )}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-gray-900">{course.title}</h3>
            {/* Mobile close button */}
            <button
              onClick={() => setShowMobileSidebar(false)}
              className="lg:hidden p-1 hover:bg-gray-100 rounded"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            {/* Desktop collapse button */}
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="hidden lg:block p-1 hover:bg-gray-100 rounded"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              {course.completedLessons}/{course.totalLessons} lessons
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {course.totalDuration}
            </span>
          </div>
          {/* Progress Bar */}
          <div className="mt-3">
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{
                  width: `${
                    (course.completedLessons / course.totalLessons) * 100
                  }%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Module List */}
        <div className="flex-1 overflow-y-auto">
          {course.modules.map((module) => (
            <div key={module.id} className="border-b border-gray-100">
              <div className="px-4 py-3 bg-gray-50 font-medium text-gray-700">
                {module.title}
              </div>
              <div className="divide-y divide-gray-50">
                {module.lessons.map((lesson) => (
                  <button
                    key={lesson.id}
                    disabled={lesson.locked}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 text-left transition-colors",
                      lesson.current
                        ? "bg-[#c9a227]/10 border-l-4 border-[#c9a227]"
                        : lesson.locked
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-gray-50"
                    )}
                  >
                    <div className="flex-shrink-0">
                      {lesson.completed ? (
                        <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                      ) : lesson.locked ? (
                        <Lock className="h-5 w-5 text-gray-400" />
                      ) : lesson.current ? (
                        <Play className="h-5 w-5 text-[#c9a227]" />
                      ) : (
                        <Circle className="h-5 w-5 text-gray-300" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className={cn(
                          "text-sm font-medium truncate",
                          lesson.current ? "text-[#c9a227]" : "text-gray-900"
                        )}
                      >
                        {lesson.title}
                      </p>
                      <p className="text-xs text-gray-500">{lesson.duration}</p>
                    </div>
                    {lesson.type === "quiz" && (
                      <Badge variant="outline" size="sm">
                        Quiz
                      </Badge>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <div className="flex gap-2">
            <Button variant="outline" fullWidth>
              <ChevronLeft className="mr-1 h-4 w-4" />
              Previous
            </Button>
            <Button variant="primary" fullWidth>
              Next
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Sidebar Toggle (when collapsed) */}
      {sidebarCollapsed && (
        <button
          onClick={() => setSidebarCollapsed(false)}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-l-lg p-2 shadow-lg"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
