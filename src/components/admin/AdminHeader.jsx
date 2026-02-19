"use client";

import { useAdmin } from "@/app/admin/context";
import { authService } from "@/services/authService";
import { Bell, Menu, User } from "lucide-react";

export function AdminHeader() {
  const { setSidebarOpen } = useAdmin();
  const user = authService.getUser();
  const displayName = user?.displayName || user?.name || "Admin User";
  const displayRole = user?.role || "Super Admin";
  const initials = displayName.charAt(0).toUpperCase();

  return (
    <header className="h-16 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-xl sticky top-0 z-40 px-6 flex items-center justify-between gap-4">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden p-2 -ml-2 text-muted-foreground hover:text-white transition-colors"
      >
        <Menu size={24} />
      </button>

      <div className="flex-1 max-w-md hidden md:block" />

      {/* Actions */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button
          className="relative w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/5 transition-colors text-muted-foreground hover:text-white"
          aria-label="Notifications"
        >
          <Bell size={20} />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-primary border-2 border-[#0a0a0a]" />
        </button>

        <div className="h-8 w-[1px] bg-white/10 mx-1" />

        {/* User info */}
        <div className="flex items-center gap-3 pl-2">
          <div className="text-right hidden md:block">
            <p className="text-sm font-medium text-white">{displayName}</p>
            <p className="text-xs text-muted-foreground">{displayRole}</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-[hsl(var(--forest))] flex items-center justify-center text-white font-bold shadow-lg shadow-primary/20 ring-2 ring-[#0a0a0a]">
            {initials || <User size={20} />}
          </div>
        </div>


      </div>
    </header>
  );
}
