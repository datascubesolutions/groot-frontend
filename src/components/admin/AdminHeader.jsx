"use client";

import { Bell, User } from "lucide-react";

export function AdminHeader() {
  return (
    <header className="h-16 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-xl sticky top-0 z-40 px-6 flex items-center justify-between gap-4">
      {/* Search - Removed as per user request to avoid duplication */}
      <div className="flex-1 max-w-md hidden md:block">
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button className="relative w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/5 transition-colors text-muted-foreground hover:text-white">
          <Bell size={20} />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-primary border-2 border-[#0a0a0a]" />
        </button>

        <div className="h-8 w-[1px] bg-white/10 mx-1" />

        <div className="flex items-center gap-3 pl-2">
          <div className="text-right hidden md:block">
            <p className="text-sm font-medium text-white">Admin User</p>
            <p className="text-xs text-muted-foreground">Super Admin</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-[hsl(var(--forest))] flex items-center justify-center text-white font-bold shadow-lg shadow-primary/20 ring-2 ring-[#0a0a0a]">
            <User size={20} />
          </div>
        </div>
      </div>
    </header>
  );
}
