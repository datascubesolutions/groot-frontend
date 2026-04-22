// @ts-nocheck
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
      <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a]">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-white" />
      </div>
    );
  }

  return (
    <AdminProvider>
      <style>{`body { background-color: #0a0a0a; }`}</style>
      <div
        className="theme-admin-dark flex min-h-screen w-full overflow-x-hidden bg-[#0a0a0a] text-white selection:bg-primary/30 selection:text-primary-foreground"
        style={{ colorScheme: "dark" }}
      >
        <AdminSidebar />

        <div className="relative z-0 flex min-h-screen min-w-0 flex-1 flex-col lg:ml-64">
          <AdminHeader />
          <main className="min-w-0 flex-1 overflow-y-auto p-6 md:p-8">
            <div className="mx-auto w-full min-w-0 max-w-7xl duration-500 animate-in fade-in slide-in-from-bottom-4">
              {children}
            </div>
          </main>
        </div>

        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
        <Toaster position="top-right" theme="dark" richColors />
      </div>
    </AdminProvider>
  );
}
