// @ts-nocheck
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
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between gap-4 border-b border-white/5 bg-[#0a0a0a]/80 px-6 backdrop-blur-xl">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="-ml-2 p-2 text-muted-foreground transition-colors hover:text-white lg:hidden"
      >
        <Menu size={24} />
      </button>

      <div className="hidden max-w-md flex-1 md:block" />

      {/* Actions */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button
          className="relative flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-white/5 hover:text-white"
          aria-label="Notifications"
        >
          <Bell size={20} />
          <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full border-2 border-[#0a0a0a] bg-primary" />
        </button>

        <div className="mx-1 h-8 w-[1px] bg-white/10" />

        {/* User info */}
        <div className="flex items-center gap-3 pl-2">
          <div className="hidden text-right md:block">
            <p className="text-sm font-medium text-white">{displayName}</p>
            <p className="text-xs text-muted-foreground">{displayRole}</p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-[hsl(var(--forest))] font-bold text-white shadow-lg shadow-primary/20 ring-2 ring-[#0a0a0a]">
            {initials || <User size={20} />}
          </div>
        </div>
      </div>
    </header>
  );
}
