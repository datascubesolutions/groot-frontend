// @ts-nocheck
"use client";

import { useAdmin } from "@/app/admin/context";
import { authService } from "@/services/authService";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  FileText,
  Home,
  LayoutDashboard,
  LogOut,
  Building2,
  Info,
  LayoutGrid,
  Briefcase,
  UserPlus,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Home Page",
    href: "/admin/home",
    icon: Home,
  },
  {
    title: "Contacts",
    href: "/admin/contacts",
    icon: Users,
  },
  {
    title: "Applications",
    href: "/admin/applications",
    icon: FileText,
  },
  {
    title: "Blog",
    href: "/admin/blogs",
    icon: FileText,
  },
  {
    title: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
  },
  {
    title: "Services",
    href: "/admin/services",
    icon: Briefcase,
  },
  {
    title: "Industries",
    href: "/admin/industries",
    icon: Building2,
  },
  {
    title: "Microsoft Center",
    href: "/admin/microsoft",
    icon: LayoutGrid,
  },
  {
    title: "About Us",
    href: "/admin/about",
    icon: Info,
  },
  {
    title: "Careers",
    href: "/admin/careers",
    icon: UserPlus,
  },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { sidebarOpen, setSidebarOpen } = useAdmin();

  const handleSignOut = () => {
    // Clear auth session and token using authService
    authService.logout();
    router.push("/");
  };

  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          role="button"
          tabIndex={0}
          aria-label="Close sidebar"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setSidebarOpen(false);
            }
          }}
        />
      )}

      <aside
        className={cn(
          "fixed left-0 top-0 z-[60] flex h-screen w-64 flex-col border-r border-white/10 bg-[#0a0a0a] shadow-2xl backdrop-blur-xl transition-transform duration-300 lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Abstract Background Blobs - Brand Aligned */}
        <div className="absolute left-0 top-0 -z-10 h-64 w-full rounded-full bg-primary/20 opacity-20 blur-[100px]" />
        <div className="absolute bottom-0 right-0 -z-10 h-64 w-full rounded-full bg-[hsl(var(--forest))]/20 opacity-20 blur-[100px]" />

        {/* Logo Area */}
        <div className="flex h-20 items-center justify-between border-b border-white/5 bg-white/[0.02] px-6">
          <div className="flex items-center gap-3 text-xl font-bold tracking-tight text-white">
            <Image
              src="/svg/logo.svg"
              alt="Groot Analytics Logo"
              width={180}
              height={60}
              className="h-16 w-auto brightness-0 invert"
            />
          </div>
          {/* Mobile Close Button */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-white/50 hover:text-white lg:hidden"
          >
            <div className="sr-only">Close sidebar</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 space-y-2 overflow-y-auto px-4 py-8">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={cn(
                  "group relative flex items-center gap-3 overflow-hidden rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-300",
                  isActive
                    ? "text-white shadow-[0_0_20px_rgba(34,197,94,0.15)]"
                    : "text-muted-foreground hover:text-white"
                )}
              >
                {isActive && (
                  <div className="absolute inset-0 rounded-xl border border-primary/20 bg-gradient-to-r from-primary/20 to-[hsl(var(--forest))]/10" />
                )}
                {/* Hover effect for non-active items */}
                {!isActive && (
                  <div className="absolute inset-0 rounded-xl bg-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
                )}

                <item.icon
                  size={20}
                  className={cn(
                    "relative z-10 transition-colors duration-300",
                    isActive
                      ? "text-primary drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]"
                      : "group-hover:text-white"
                  )}
                />
                <span className="relative z-10">{item.title}</span>

                {isActive && (
                  <div className="absolute right-3 h-1.5 w-1.5 animate-pulse rounded-full bg-primary shadow-[0_0_10px_rgba(34,197,94,1)]" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Footer */}
        <div className="border-t border-border/40 p-4">
          <button
            onClick={handleSignOut}
            className="group flex w-full items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-medium text-muted-foreground transition-all duration-300 hover:bg-white/5 hover:text-white"
          >
            <LogOut
              size={20}
              className="transition-colors duration-300 group-hover:text-primary"
            />
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              Sign Out
            </span>
          </button>
        </div>
      </aside>
    </>
  );
}
