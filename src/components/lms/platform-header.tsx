"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bell,
  Search,
  User,
  ChevronDown,
  Settings,
  LogOut,
  HelpCircle,
} from "lucide-react";

export function PlatformHeader() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const notifications = [
    {
      id: 1,
      title: "New lesson available",
      message: "De-escalation Techniques Part 2 is now available",
      time: "2 hours ago",
      unread: true,
    },
    {
      id: 2,
      title: "Quiz reminder",
      message: "You have an incomplete quiz in Threat Recognition",
      time: "1 day ago",
      unread: true,
    },
    {
      id: 3,
      title: "Achievement unlocked",
      message: "You completed your first module!",
      time: "2 days ago",
      unread: false,
    },
  ];

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-6">
      {/* Search - hidden on smallest screens, visible from sm up */}
      <div className="flex-1 max-w-xl ml-12 lg:ml-0">
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227] text-sm"
          />
        </div>
        {/* Mobile search icon only */}
        <button className="sm:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
          <Search className="h-5 w-5" />
        </button>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4 ml-4">
        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowUserMenu(false);
            }}
            className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          {showNotifications && (
            <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
              <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">Notifications</h3>
                <button className="text-sm text-[#c9a227] hover:underline">
                  Mark all read
                </button>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 border-b border-gray-50 hover:bg-gray-50 cursor-pointer ${
                      notification.unread ? "bg-blue-50/50" : ""
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 ${
                          notification.unread ? "bg-[#c9a227]" : "bg-transparent"
                        }`}
                      />
                      <div>
                        <p className="font-medium text-gray-900 text-sm">
                          {notification.title}
                        </p>
                        <p className="text-gray-600 text-sm mt-0.5">
                          {notification.message}
                        </p>
                        <p className="text-gray-400 text-xs mt-1">
                          {notification.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-3 border-t border-gray-100">
                <Link
                  href="/dashboard/notifications"
                  className="block text-center text-sm text-[#c9a227] hover:underline"
                >
                  View all notifications
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* User Menu */}
        <div className="relative">
          <button
            onClick={() => {
              setShowUserMenu(!showUserMenu);
              setShowNotifications(false);
            }}
            className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <div className="w-8 h-8 bg-[#1a1a2e] rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-[#c9a227]" />
            </div>
            <div className="text-left hidden sm:block">
              <p className="text-sm font-medium text-gray-900">Demo User</p>
              <p className="text-xs text-gray-500">Individual Plan</p>
            </div>
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </button>

          {showUserMenu && (
            <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
              <div className="p-4 border-b border-gray-100">
                <p className="font-medium text-gray-900">Demo User</p>
                <p className="text-sm text-gray-500">demo@guardianelite.com</p>
              </div>
              <div className="py-2">
                <Link
                  href="/dashboard/profile"
                  className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50"
                >
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </Link>
                <Link
                  href="/dashboard/settings"
                  className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50"
                >
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </Link>
                <Link
                  href="/dashboard/help"
                  className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50"
                >
                  <HelpCircle className="h-4 w-4" />
                  <span>Help Center</span>
                </Link>
              </div>
              <div className="py-2 border-t border-gray-100">
                <Link
                  href="/"
                  className="flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Sign Out</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
