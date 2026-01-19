import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const formatDate = (dateValue) => {
  if (!dateValue) return 'N/A';
  try {
    if (typeof dateValue === 'object' && dateValue._seconds) {
      return new Date(dateValue._seconds * 1000).toLocaleString();
    }
    return new Date(dateValue).toLocaleString();
  } catch (e) {
    return 'Invalid Date';
  }
};

export const getStatusColor = (status) => {
  const s = status?.toUpperCase();
  switch (s) {
    case "NEW": return "bg-blue-500/10 text-blue-400 border-blue-500/20";
    case "PENDING": return "bg-blue-500/10 text-blue-400 border-blue-500/20";
    case "CONTACTED":
    case "IN PROGRESS": return "bg-amber-500/10 text-amber-400 border-amber-500/20";
    case "RESOLVED":
    case "CLOSED": return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
    default: return "bg-slate-500/10 text-slate-400 border-slate-500/20";
  }
};
