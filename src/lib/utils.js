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
    case "PENDING": return "bg-amber-500/10 text-amber-500 border-amber-500/20";
    case "CONTACTED": return "bg-blue-500/10 text-blue-400 border-blue-500/20";
    case "QUALIFIED": return "bg-primary/10 text-primary border-primary/20";
    case "CONVERTED": return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
    case "REJECTED": return "bg-destructive/10 text-destructive border-destructive/20";
    case "SPAM": return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    default: return "bg-white/5 text-muted-foreground border-white/10";
  }
};
