"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Calendar,
  Clock,
  Video,
  MapPin,
  Users,
  ChevronLeft,
  ChevronRight,
  Bell,
  CheckCircle2,
  Play,
  FileText,
} from "lucide-react";

const upcomingEvents = [
  {
    id: "1",
    title: "De-escalation Techniques - Live Session",
    type: "live",
    date: "2024-12-02",
    time: "7:00 PM CST",
    duration: "90 min",
    instructor: "Big A",
    description: "Interactive live session covering advanced verbal de-escalation strategies.",
    attendees: 24,
    maxAttendees: 30,
  },
  {
    id: "2",
    title: "Practical Assessment - Threat Recognition",
    type: "assessment",
    date: "2024-12-05",
    time: "2:00 PM CST",
    duration: "45 min",
    instructor: "Instructor Williams",
    description: "Hands-on assessment testing your threat recognition skills in simulated scenarios.",
    location: "Guardian Elite Training Center, Chicago",
  },
  {
    id: "3",
    title: "Q&A: Career in Executive Protection",
    type: "webinar",
    date: "2024-12-08",
    time: "6:00 PM CST",
    duration: "60 min",
    instructor: "Marcus Chen",
    description: "Open Q&A with a veteran executive protection agent. Learn about career paths and opportunities.",
    attendees: 156,
  },
  {
    id: "4",
    title: "PERC Exam Prep Workshop",
    type: "workshop",
    date: "2024-12-12",
    time: "10:00 AM CST",
    duration: "3 hours",
    instructor: "Sarah Martinez",
    description: "Comprehensive workshop covering all PERC exam topics with practice questions.",
    location: "Virtual",
    attendees: 18,
    maxAttendees: 25,
  },
];

const completedEvents = [
  {
    id: "c1",
    title: "Introduction to Security Fundamentals",
    type: "live",
    date: "2024-11-15",
    recording: true,
  },
  {
    id: "c2",
    title: "Legal Aspects of Security Work",
    type: "webinar",
    date: "2024-11-20",
    recording: true,
  },
];

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function SchedulePage() {
  const [currentMonth, setCurrentMonth] = useState(new Date(2024, 11, 1)); // December 2024

  const getEventTypeStyles = (type: string) => {
    switch (type) {
      case "live":
        return { bg: "bg-red-100", text: "text-red-700", badge: "danger" as const };
      case "assessment":
        return { bg: "bg-purple-100", text: "text-purple-700", badge: "primary" as const };
      case "webinar":
        return { bg: "bg-blue-100", text: "text-blue-700", badge: "secondary" as const };
      case "workshop":
        return { bg: "bg-emerald-100", text: "text-emerald-700", badge: "success" as const };
      default:
        return { bg: "bg-gray-100", text: "text-gray-700", badge: "outline" as const };
    }
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];

    // Empty cells for days before first of month
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Days of month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  const calendarDays = generateCalendarDays();
  const eventDates = upcomingEvents.map((e) => new Date(e.date).getDate());

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Schedule
          </h1>
          <p className="text-gray-600 mt-1">
            Upcoming classes, assessments, and live sessions
          </p>
        </div>
        <Button variant="primary">
          <Bell className="mr-2 h-4 w-4" />
          Set Reminders
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Calendar */}
        <Card className="lg:col-span-1">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">
                {currentMonth.toLocaleString("default", {
                  month: "long",
                  year: "numeric",
                })}
              </CardTitle>
              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    setCurrentMonth(
                      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
                    )
                  }
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    setCurrentMonth(
                      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
                    )
                  }
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {/* Days of week header */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {daysOfWeek.map((day) => (
                <div
                  key={day}
                  className="text-center text-xs font-medium text-gray-500 py-2"
                >
                  {day}
                </div>
              ))}
            </div>
            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((day, index) => (
                <div
                  key={index}
                  className={`aspect-square flex items-center justify-center text-sm rounded-lg relative ${
                    day === null
                      ? ""
                      : eventDates.includes(day)
                      ? "bg-[#c9a227]/20 text-[#c9a227] font-semibold cursor-pointer hover:bg-[#c9a227]/30"
                      : "hover:bg-gray-100 cursor-pointer"
                  }`}
                >
                  {day}
                  {day && eventDates.includes(day) && (
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#c9a227] rounded-full" />
                  )}
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="mt-4 pt-4 border-t space-y-2">
              <p className="text-xs font-medium text-gray-500 uppercase">Event Types</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full" />
                  <span>Live Session</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full" />
                  <span>Assessment</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full" />
                  <span>Webinar</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full" />
                  <span>Workshop</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-lg font-bold text-gray-900">Upcoming Events</h2>
          <div className="space-y-4">
            {upcomingEvents.map((event) => {
              const styles = getEventTypeStyles(event.type);
              return (
                <Card key={event.id} hover>
                  <CardContent className="p-5">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      {/* Date badge */}
                      <div className="flex sm:flex-col items-center sm:items-center gap-2 sm:gap-0 text-center bg-gray-50 rounded-xl p-3 sm:w-20 flex-shrink-0">
                        <span className="text-sm text-gray-500">
                          {new Date(event.date).toLocaleString("default", {
                            month: "short",
                          })}
                        </span>
                        <span className="text-2xl font-bold text-gray-900">
                          {new Date(event.date).getDate()}
                        </span>
                      </div>

                      {/* Event details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <Badge variant={styles.badge} size="sm">
                            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                          </Badge>
                          <span className="text-sm text-gray-500">
                            {event.time} ({event.duration})
                          </span>
                        </div>

                        <h3 className="font-bold text-gray-900 mb-1">
                          {event.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                          {event.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
                          <span className="flex items-center">
                            <Users className="mr-1 h-4 w-4" />
                            {event.instructor}
                          </span>
                          {event.location && (
                            <span className="flex items-center">
                              <MapPin className="mr-1 h-4 w-4" />
                              {event.location}
                            </span>
                          )}
                          {event.attendees && (
                            <span className="flex items-center">
                              <Users className="mr-1 h-4 w-4" />
                              {event.attendees}
                              {event.maxAttendees && `/${event.maxAttendees}`} attending
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex sm:flex-col gap-2 flex-shrink-0">
                        <Button variant="primary" size="sm">
                          {event.type === "live" || event.type === "webinar" ? (
                            <>
                              <Video className="mr-2 h-4 w-4" />
                              Join
                            </>
                          ) : (
                            <>
                              <Calendar className="mr-2 h-4 w-4" />
                              RSVP
                            </>
                          )}
                        </Button>
                        <Button variant="outline" size="sm">
                          <Bell className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Past Events with Recordings */}
          <div className="pt-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Past Events with Recordings
            </h2>
            <div className="space-y-3">
              {completedEvents.map((event) => (
                <Card key={event.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-medium text-gray-900 truncate">
                            {event.title}
                          </p>
                          <p className="text-sm text-gray-500">
                            {new Date(event.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2 flex-shrink-0">
                        <Button variant="outline" size="sm">
                          <Play className="mr-2 h-4 w-4" />
                          Watch
                        </Button>
                        <Button variant="ghost" size="sm">
                          <FileText className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
