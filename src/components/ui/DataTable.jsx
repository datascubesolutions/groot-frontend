"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

import { Skeleton } from "@/components/ui/Skeleton";

export function DataTable({
  columns,
  data,
  isLoading,
  onRowClick,
  pagination,
  actions
}) {
  if (isLoading) {
    return (
      <div className="w-full space-y-4">
        <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden backdrop-blur-sm shadow-2xl shadow-black/20 p-4 space-y-4">
          <div className="flex items-center gap-4 mb-6">
            <Skeleton className="h-8 w-1/4 bg-white/10" />
            <Skeleton className="h-8 w-1/4 bg-white/10" />
            <Skeleton className="h-8 w-1/4 bg-white/10" />
            <Skeleton className="h-8 w-1/4 bg-white/10" />
          </div>
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center gap-4">
              <Skeleton className="h-12 w-full bg-white/5 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full space-y-4">
      <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden backdrop-blur-sm shadow-2xl shadow-black/20">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/5/50">
              {columns.map((col, i) => (
                <th
                  key={i}
                  className={cn(
                    "h-12 px-4 text-left font-medium text-muted-foreground transition-colors hover:text-foreground",
                    col.className
                  )}
                >
                  {col.header}
                </th>
              ))}
              {actions && <th className="h-12 px-4 text-right">Actions</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            <AnimatePresence mode="popLayout">
              {data.length === 0 ? (
                <motion.tr
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <td colSpan={columns.length + (actions ? 1 : 0)} className="h-32 text-center text-muted-foreground">
                    No results found.
                  </td>
                </motion.tr>
              ) : (
                data.map((row, i) => (
                  <motion.tr
                    key={row.id || i}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2, delay: i * 0.05 }}
                    onClick={() => onRowClick && onRowClick(row)}
                    className={cn(
                      "transition-colors hover:bg-white/5 group",
                      onRowClick && "cursor-pointer"
                    )}
                  >
                    {columns.map((col, j) => (
                      <td key={j} className="p-4 align-middle">
                        {col.cell ? col.cell(row) : row[col.accessorKey]}
                      </td>
                    ))}
                    {actions && (
                      <td className="p-4 align-middle text-right" onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-end gap-2">
                          {actions(row)}
                        </div>
                      </td>
                    )}
                  </motion.tr>
                ))
              )}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      {pagination && (
        <div className="flex items-center justify-between px-2">
          <div className="text-sm text-muted-foreground">
            Showing {data.length} entries
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-white/5 text-muted-foreground disabled:opacity-50" disabled>
              <ChevronsLeft size={16} />
            </button>
            <button className="p-2 rounded-lg hover:bg-white/5 text-muted-foreground disabled:opacity-50" disabled>
              <ChevronLeft size={16} />
            </button>
            <span className="text-sm font-medium px-2">Page 1 of 1</span>
            <button className="p-2 rounded-lg hover:bg-white/5 text-muted-foreground disabled:opacity-50" disabled>
              <ChevronRight size={16} />
            </button>
            <button className="p-2 rounded-lg hover:bg-white/5 text-muted-foreground disabled:opacity-50" disabled>
              <ChevronsRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
