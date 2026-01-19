"use client";

import { cn } from "@/lib/utils";
import {
  BarChart3,
  LayoutDashboard,
  LogOut,
  Settings,
  Users
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard
  },
  {
    title: "Contacts",
    href: "/admin/contacts",
    icon: Users
  },
  {
    title: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings
  }
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#0a0a0a] border-r border-white/10 z-50 hidden lg:flex flex-col shadow-2xl backdrop-blur-xl">
      {/* Abstract Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-64 bg-primary/20 blur-[100px] -z-10 rounded-full opacity-20" />
      <div className="absolute bottom-0 right-0 w-full h-64 bg-purple-500/20 blur-[100px] -z-10 rounded-full opacity-20" />

      {/* Logo Area */}
      <div className="h-20 flex items-center px-6 border-b border-white/5 bg-white/[0.02]">
        <div className="flex items-center gap-3 font-bold text-xl text-white tracking-tight">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-primary/20 ring-1 ring-white/20">
            G
          </div>
          <span>Admin<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Panel</span></span>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 py-8 px-4 space-y-2 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 group relative overflow-hidden",
                isActive
                  ? "text-white shadow-[0_0_20px_rgba(34,197,94,0.15)]"
                  : "text-muted-foreground hover:text-white"
              )}
            >
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-emerald-500/10 border border-primary/20 rounded-xl" />
              )}
              {/* Hover effect for non-active items */}
              {!isActive && (
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              )}

              <item.icon size={20} className={cn("relative z-10 transition-colors duration-300", isActive ? "text-primary drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]" : "group-hover:text-white")} />
              <span className="relative z-10">{item.title}</span>

              {isActive && <div className="absolute right-3 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(34,197,94,1)] animate-pulse" />}
            </Link>
          );
        })}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-border/40">
        <button className="flex items-center gap-3 px-3 py-2.5 w-full rounded-xl text-sm font-medium text-red-500 hover:bg-red-500/10 transition-colors">
          <LogOut size={18} />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
