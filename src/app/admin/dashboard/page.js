// @ts-nocheck
"use client";

import { contactService } from "@/services/contactService";
import { ArrowUpRight, BarChart3, FileText, Users } from "lucide-react";
import Link from "next/link";
import { AdminSkeleton } from "@/components/admin/AdminSkeleton";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [stats, setStats] = useState({
    totalContacts: 0,
    activeInquiries: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const result = await contactService.getAll({ page: 1, limit: 1 });
        if (result?.result?.data?.pagination) {
          setStats({
            totalContacts: result.result.data.pagination.total || 0,
            activeInquiries: 0, // We'd need a specific API or filter for this, placeholder for now
          });
        }
      } catch (error) {
        console.error("Failed to fetch dashboard stats:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      title: "Total Contacts",
      value: isLoading ? "-" : stats.totalContacts,
      icon: Users,
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      href: "/admin/contacts",
    },
    {
      title: "Blog Posts",
      value: "Manage", // Placeholder until blog service is hooked up
      icon: FileText,
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
      href: "/admin/blogs",
    },
    {
      title: "Analytics",
      value: "View",
      icon: BarChart3,
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      href: "/admin/analytics",
    },
  ];

  if (isLoading) {
    return <AdminSkeleton type="dashboard" />;
  }

  return (
    <div className="animate-fade-in space-y-8">
      {/* Welcome Section */}
      <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-primary/10 via-[#0a0a0a] to-[#0a0a0a] p-8 sm:p-12">
        <div className="absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/5 blur-[100px]" />

        <div className="relative z-10 space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Welcome Back, <span className="text-primary">Admin</span>
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Here&apos;s what&apos;s happening with your platform today. Check
            your recent inquiries and manage your content.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/admin/contacts">
              <button className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-black transition-all hover:bg-gray-200">
                <Users size={18} />
                Manage Contacts
              </button>
            </Link>
            <Link href="/admin/blogs">
              <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-bold text-white transition-all hover:bg-white/10">
                <FileText size={18} />
                Manage Blog
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {statCards.map((stat, index) => (
          <Link
            href={stat.href}
            key={index}
            className="group relative block overflow-hidden rounded-2xl border border-white/5 bg-[#111111] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:shadow-xl"
          >
            <div
              className={`absolute right-0 top-0 p-4 opacity-50 transition-opacity group-hover:opacity-100`}
            >
              <ArrowUpRight
                className="text-muted-foreground transition-colors group-hover:text-white"
                size={20}
              />
            </div>

            <div className="space-y-4">
              <div
                className={`h-12 w-12 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center`}
              >
                <stat.icon size={24} />
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  {stat.title}
                </p>
                <h3 className="mt-1 text-3xl font-bold text-white">
                  {stat.value}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
