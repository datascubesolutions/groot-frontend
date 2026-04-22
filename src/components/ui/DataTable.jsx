// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

import { AdminSkeleton } from "@/components/admin/AdminSkeleton";

export function DataTable({
  columns,
  data,
  isLoading,
  onRowClick,
  pagination,
  actions,
}) {
  if (isLoading) {
    return <AdminSkeleton type="table" />;
  }

  return (
    <div className="w-full space-y-4">
      <div className="overflow-hidden overflow-x-auto rounded-xl bg-transparent shadow-none">
        <table className="w-full min-w-[800px] border-separate border-spacing-y-3 text-sm">
          <thead>
            <tr className="bg-transparent">
              {columns.map((col, i) => (
                <th
                  key={i}
                  className={cn(
                    "h-10 select-none px-4 text-left text-xs font-bold uppercase tracking-wider text-muted-foreground",
                    col.className
                  )}
                >
                  {col.header}
                </th>
              ))}
              {actions && (
                <th className="h-10 select-none px-4 text-right text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Actions
                </th>
              )}
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
                  <td
                    colSpan={columns.length + (actions ? 1 : 0)}
                    className="h-40 rounded-xl border border-white/5 bg-white/[0.02] text-center text-muted-foreground backdrop-blur-sm"
                  >
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
                      "group relative bg-card/40 transition-all duration-300 hover:bg-card/60",
                      "shadow-sm hover:-translate-y-[2px] hover:shadow-md hover:shadow-black/10",
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
                          "p-4 align-middle text-muted-foreground transition-colors first:rounded-l-xl last:rounded-r-xl group-hover:text-foreground",
                          j === 0 && "font-medium text-foreground"
                        )}
                      >
                        {col.cell ? col.cell(row) : row[col.accessorKey]}
                      </td>
                    ))}
                    {actions && (
                      <td
                        className="rounded-r-xl p-4 text-right align-middle"
                        onClick={(e) => e.stopPropagation()}
                      >
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
        <div className="mt-4 flex items-center justify-between border-t border-white/5 px-4 py-4">
          <div className="text-sm font-medium text-gray-400">
            Showing{" "}
            <span className="font-bold text-white">
              {Math.min(
                (pagination.currentPage - 1) * pagination.itemsPerPage + 1,
                pagination.totalItems
              )}
            </span>{" "}
            to{" "}
            <span className="font-bold text-white">
              {Math.min(
                pagination.currentPage * pagination.itemsPerPage,
                pagination.totalItems
              )}
            </span>{" "}
            of{" "}
            <span className="font-bold text-white">
              {pagination.totalItems}
            </span>{" "}
            results
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => pagination.onPageChange(1)}
              disabled={pagination.currentPage === 1}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white shadow-sm transition-all hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-white/5"
              title="First Page"
            >
              <ChevronsLeft size={16} />
            </button>
            <button
              onClick={() =>
                pagination.onPageChange(Math.max(1, pagination.currentPage - 1))
              }
              disabled={pagination.currentPage === 1}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white shadow-sm transition-all hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-white/5"
              title="Previous Page"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex min-w-[100px] items-center justify-center rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-bold text-white">
              <span className="mr-2 font-medium text-gray-400">Page</span>
              <span className="text-primary">{pagination.currentPage}</span>
              <span className="ml-2 font-medium text-gray-400">
                of {pagination.totalPages}
              </span>
            </div>

            <button
              onClick={() =>
                pagination.onPageChange(
                  Math.min(pagination.totalPages, pagination.currentPage + 1)
                )
              }
              disabled={pagination.currentPage === pagination.totalPages}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white shadow-sm transition-all hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-white/5"
              title="Next Page"
            >
              <ChevronRight size={16} />
            </button>
            <button
              onClick={() => pagination.onPageChange(pagination.totalPages)}
              disabled={pagination.currentPage === pagination.totalPages}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white shadow-sm transition-all hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-white/5"
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
