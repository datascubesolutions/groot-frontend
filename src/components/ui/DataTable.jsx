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
      <div className="rounded-xl overflow-hidden shadow-none bg-transparent">
        <table className="w-full text-sm border-separate border-spacing-y-3">
          <thead>
            <tr className="bg-transparent">
              {columns.map((col, i) => (
                <th
                  key={i}
                  className={cn(
                    "h-10 px-4 text-left text-xs font-bold uppercase tracking-wider text-muted-foreground select-none",
                    col.className
                  )}
                >
                  {col.header}
                </th>
              ))}
              {actions && <th className="h-10 px-4 text-right text-xs font-bold uppercase tracking-wider text-muted-foreground select-none">Actions</th>}
            </tr>
          </thead>
          <tbody className="">
            <AnimatePresence mode="popLayout">
              {data.length === 0 ? (
                <motion.tr
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <td colSpan={columns.length + (actions ? 1 : 0)} className="h-40 text-center text-muted-foreground bg-white/[0.02] rounded-xl border border-white/5 backdrop-blur-sm">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <p>No results found</p>
                    </div>
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
                      "group relative bg-card/40 hover:bg-card/60 transition-all duration-300",
                      "shadow-sm hover:shadow-md hover:shadow-black/10 hover:-translate-y-[2px]",
                      "border border-white/5 hover:border-white/10",
                      onRowClick && "cursor-pointer"
                    )}
                    style={{
                      borderRadius: "12px",
                    }}
                  >
                    {columns.map((col, j) => (
                      <td
                        key={j}
                        className={cn(
                          "p-4 align-middle text-muted-foreground group-hover:text-foreground transition-colors first:rounded-l-xl last:rounded-r-xl",
                          j === 0 && "font-medium text-foreground"
                        )}
                      >
                        {col.cell ? col.cell(row) : row[col.accessorKey]}
                      </td>
                    ))}
                    {actions && (
                      <td className="p-4 align-middle text-right rounded-r-xl" onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-end gap-2 opacity-100">
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
        <div className="flex items-center justify-between px-4 py-4 mt-4 border-t border-white/5">
          <div className="text-sm text-gray-400 font-medium">
            Showing <span className="font-bold text-white">{Math.min((pagination.currentPage - 1) * pagination.itemsPerPage + 1, pagination.totalItems)}</span> to <span className="font-bold text-white">{Math.min(pagination.currentPage * pagination.itemsPerPage, pagination.totalItems)}</span> of <span className="font-bold text-white">{pagination.totalItems}</span> results
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => pagination.onPageChange(1)}
              disabled={pagination.currentPage === 1}
              className="h-9 w-9 flex items-center justify-center rounded-lg border border-white/20 bg-white/5 hover:bg-white/20 text-white disabled:opacity-30 disabled:hover:bg-white/5 transition-all shadow-sm"
              title="First Page"
            >
              <ChevronsLeft size={16} />
            </button>
            <button
              onClick={() => pagination.onPageChange(Math.max(1, pagination.currentPage - 1))}
              disabled={pagination.currentPage === 1}
              className="h-9 w-9 flex items-center justify-center rounded-lg border border-white/20 bg-white/5 hover:bg-white/20 text-white disabled:opacity-30 disabled:hover:bg-white/5 transition-all shadow-sm"
              title="Previous Page"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex items-center justify-center min-w-[100px] text-sm font-bold bg-white/10 py-1.5 px-3 rounded-lg border border-white/20 text-white">
              <span className="text-gray-400 font-medium mr-2">Page</span>
              <span className="text-primary">{pagination.currentPage}</span>
              <span className="text-gray-400 font-medium ml-2">of {pagination.totalPages}</span>
            </div>

            <button
              onClick={() => pagination.onPageChange(Math.min(pagination.totalPages, pagination.currentPage + 1))}
              disabled={pagination.currentPage === pagination.totalPages}
              className="h-9 w-9 flex items-center justify-center rounded-lg border border-white/20 bg-white/5 hover:bg-white/20 text-white disabled:opacity-30 disabled:hover:bg-white/5 transition-all shadow-sm"
              title="Next Page"
            >
              <ChevronRight size={16} />
            </button>
            <button
              onClick={() => pagination.onPageChange(pagination.totalPages)}
              disabled={pagination.currentPage === pagination.totalPages}
              className="h-9 w-9 flex items-center justify-center rounded-lg border border-white/20 bg-white/5 hover:bg-white/20 text-white disabled:opacity-30 disabled:hover:bg-white/5 transition-all shadow-sm"
              title="Last Page"
            >
              <ChevronsRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
