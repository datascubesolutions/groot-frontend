"use client";

import { contactService } from "@/services/contactService";
import { ArrowUpRight, BarChart3, FileText, Users } from "lucide-react";
import Link from "next/link";
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
            activeInquiries: 0 // We'd need a specific API or filter for this, placeholder for now
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
      href: "/admin/contacts"
    },
    {
      title: "Blog Posts",
      value: "Manage", // Placeholder until blog service is hooked up
      icon: FileText,
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
      href: "/admin/blogs"
    },
    {
      title: "Analytics",
      value: "View",
      icon: BarChart3,
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      href: "/admin/analytics"
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-[#0a0a0a] to-[#0a0a0a] border border-white/5 p-8 sm:p-12">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

        <div className="relative z-10 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Welcome Back, <span className="text-primary">Admin</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Here's what's happening with your platform today. Check your recent inquiries and manage your content.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <Link href="/admin/contacts">
              <button className="px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all flex items-center gap-2">
                <Users size={18} />
                Manage Contacts
              </button>
            </Link>
            <Link href="/admin/blogs">
              <button className="px-6 py-3 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2">
                <FileText size={18} />
                Manage Blog
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statCards.map((stat, index) => (
          <Link
            href={stat.href}
            key={index}
            className="group block p-6 rounded-2xl bg-[#111111] border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative overflow-hidden"
          >
            <div className={`absolute top-0 right-0 p-4 opacity-50 transition-opacity group-hover:opacity-100`}>
              <ArrowUpRight className="text-muted-foreground group-hover:text-white transition-colors" size={20} />
            </div>

            <div className="space-y-4">
              <div className={`w-12 h-12 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
                <stat.icon size={24} />
              </div>
              <div>
                <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider">{stat.title}</p>
                <h3 className="text-3xl font-bold text-white mt-1">{stat.value}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
