"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Shield,
  LayoutDashboard,
  BookOpen,
  Award,
  Calendar,
  Settings,
  HelpCircle,
  LogOut,
  ChevronLeft,
  User,
  Briefcase,
  Menu,
  X,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "My Courses", href: "/dashboard/courses", icon: BookOpen },
  { name: "Certifications", href: "/dashboard/certifications", icon: Award },
  { name: "Job Board", href: "/dashboard/jobs", icon: Briefcase },
  { name: "Schedule", href: "/dashboard/schedule", icon: Calendar },
];

const bottomNav = [
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
  { name: "Help Center", href: "/dashboard/help", icon: HelpCircle },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const prevPathname = useRef(pathname);

  // Close mobile menu on route change
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      if (isMobileOpen) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsMobileOpen(false);
      }
    }
  }, [pathname, isMobileOpen]);

  // Close mobile menu on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileOpen) {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileOpen]);

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-40 p-2 bg-[#1a1a2e] text-white rounded-lg shadow-lg"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <aside
        className={cn(
          "fixed left-0 top-0 bottom-0 bg-[#1a1a2e] text-white flex flex-col transition-all duration-300 z-50",
          // Desktop: show normally, collapse on toggle
          "hidden lg:flex",
          isCollapsed ? "lg:w-20" : "lg:w-64",
          // Mobile: slide in from left
          isMobileOpen && "flex w-64 translate-x-0",
          !isMobileOpen && "lg:translate-x-0"
        )}
      >
      {/* Logo */}
      <div className="p-6 flex items-center justify-between">
        <Link href="/dashboard" className="flex items-center gap-3">
          <Shield className="h-10 w-10 text-[#c9a227] flex-shrink-0" />
          {(!isCollapsed || isMobileOpen) && (
            <div className="overflow-hidden">
              <span className="text-lg font-bold block">Guardian Elite</span>
              <span className="text-xs text-[#c9a227] tracking-wider">
                ACADEMY
              </span>
            </div>
          )}
        </Link>
        {/* Mobile close button */}
        <button
          onClick={() => setIsMobileOpen(false)}
          className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        {/* Desktop collapse button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden lg:block p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          <ChevronLeft
            className={cn(
              "h-5 w-5 transition-transform",
              isCollapsed && "rotate-180"
            )}
          />
        </button>
      </div>

      {/* User Info */}
      <div className={cn("px-4 mb-6", isCollapsed && "px-3")}>
        <div
          className={cn(
            "flex items-center gap-3 p-3 bg-white/5 rounded-xl",
            isCollapsed && "justify-center"
          )}
        >
          <div className="w-10 h-10 bg-[#c9a227] rounded-full flex items-center justify-center flex-shrink-0">
            <User className="h-5 w-5 text-[#1a1a2e]" />
          </div>
          {!isCollapsed && (
            <div className="overflow-hidden">
              <p className="font-medium truncate">Demo User</p>
              <p className="text-xs text-gray-400 truncate">Individual Plan</p>
            </div>
          )}
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-3">
        <ul className="space-y-1">
          {navigation.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all",
                    isActive
                      ? "bg-[#c9a227] text-[#1a1a2e] font-semibold"
                      : "text-gray-300 hover:bg-white/10 hover:text-white",
                    isCollapsed && "justify-center px-3"
                  )}
                  title={isCollapsed ? item.name : undefined}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {!isCollapsed && <span>{item.name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Navigation */}
      <div className="px-3 pb-6 space-y-1">
        {bottomNav.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/10 hover:text-white transition-colors",
              isCollapsed && "justify-center px-3"
            )}
            title={isCollapsed ? item.name : undefined}
          >
            <item.icon className="h-5 w-5 flex-shrink-0" />
            {!isCollapsed && <span>{item.name}</span>}
          </Link>
        ))}

        {/* Logout */}
        <Link
          href="/"
          className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-colors",
            isCollapsed && "justify-center px-3"
          )}
          title={isCollapsed ? "Sign Out" : undefined}
        >
          <LogOut className="h-5 w-5 flex-shrink-0" />
          {!isCollapsed && <span>Sign Out</span>}
        </Link>
      </div>
    </aside>
    </>
  );
}
