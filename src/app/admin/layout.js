"use client";

import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { Toaster } from "sonner";
import { AdminProvider } from "./context";

export default function AdminLayout({ children }) {
  const isAuthed = useAdminAuth();

  // null = still checking, false = not authed → show spinner (redirect handled by hook)
  if (!isAuthed) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <AdminProvider>
      <style>{`body { background-color: #0a0a0a; }`}</style>
      <div
        className="theme-admin-dark min-h-screen w-full bg-[#0a0a0a] text-white flex overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground"
        style={{ colorScheme: "dark" }}
      >
        <AdminSidebar />

        <div className="flex-1 lg:ml-64 flex flex-col min-h-screen relative z-0 min-w-0">
          <AdminHeader />
          <main className="flex-1 p-6 md:p-8 overflow-y-auto min-w-0">
            <div className="max-w-7xl mx-auto w-full animate-in fade-in slide-in-from-bottom-4 duration-500 min-w-0">
              {children}
            </div>
          </main>
        </div>

        <div className="fixed inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
        <Toaster position="top-right" theme="dark" richColors />
      </div>
    </AdminProvider>
  );
}
