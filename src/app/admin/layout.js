import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { Toaster } from "sonner";

export const metadata = {
  title: "Admin Dashboard | Groot Analytics",
  description: "Administrative control panel for Groot Analytics.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <AdminSidebar />

      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen relative z-0">
        <AdminHeader />

        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            {children}
          </div>
        </main>
      </div>

      {/* Mobile Overlay Background (Optional implementation for full mobile support later) */}
      <div className="fixed inset-0 bg-background -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />

      {/* Toast Notifications */}
      <Toaster position="top-right" richColors />
    </div>
  );
}
