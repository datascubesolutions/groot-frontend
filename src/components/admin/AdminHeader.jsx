"use client";

import { Bell, Search, User } from "lucide-react";

export function AdminHeader() {
  return (
    <header className="h-16 border-b border-border/40 bg-background/80 backdrop-blur-xl sticky top-0 z-40 px-6 flex items-center justify-between gap-4">
      {/* Search */}
      <div className="flex-1 max-w-md hidden md:block">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-10 pl-10 pr-4 rounded-full bg-white/5 border border-white/10 outline-none focus:border-primary/50 focus:bg-white/10 transition-all text-sm font-medium text-foreground placeholder:text-muted-foreground/50"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button className="relative w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/5 transition-colors text-muted-foreground hover:text-foreground">
          <Bell size={20} />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-primary border-2 border-background" />
        </button>

        <div className="h-8 w-[1px] bg-border/40 mx-1" />

        <div className="flex items-center gap-3 pl-2">
          <div className="text-right hidden md:block">
            <p className="text-sm font-medium text-foreground">Admin User</p>
            <p className="text-xs text-muted-foreground">Super Admin</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold shadow-lg shadow-primary/20">
            <User size={20} />
          </div>
        </div>
      </div>
    </header>
  );
}
