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
import { usePathname, useRouter } from "next/navigation";

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
  const router = useRouter();

  const handleSignOut = () => {
    // In a real app, you would clear auth tokens here
    router.push("/");
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#0a0a0a] border-r border-white/10 z-50 hidden lg:flex flex-col shadow-2xl backdrop-blur-xl">
      {/* Abstract Background Blobs - Brand Aligned */}
      <div className="absolute top-0 left-0 w-full h-64 bg-primary/20 blur-[100px] -z-10 rounded-full opacity-20" />
      <div className="absolute bottom-0 right-0 w-full h-64 bg-[hsl(var(--forest))]/20 blur-[100px] -z-10 rounded-full opacity-20" />

      {/* Logo Area */}
      <div className="h-20 flex items-center px-6 border-b border-white/5 bg-white/[0.02]">
        <div className="flex items-center gap-3 font-bold text-xl text-white tracking-tight">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-[hsl(var(--forest))] flex items-center justify-center text-white shadow-lg shadow-primary/20 ring-1 ring-white/20">
            G
          </div>
          <span>Admin<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[hsl(var(--forest))]">Panel</span></span>
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
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-[hsl(var(--forest))]/10 border border-primary/20 rounded-xl" />
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
        <button
          onClick={handleSignOut}
          className="flex items-center gap-3 px-4 py-3.5 w-full rounded-xl text-sm font-medium text-muted-foreground hover:text-white hover:bg-white/5 transition-all duration-300 group"
        >
          <LogOut size={20} className="group-hover:text-primary transition-colors duration-300" />
          <span className="group-hover:translate-x-1 transition-transform duration-300">Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
