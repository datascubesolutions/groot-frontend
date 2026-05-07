// @ts-nocheck
"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import React from "react";
import { QuizFlow } from "./QuizFlow";

export function QuizModal({ children, className }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className={cn(
          "relative max-w-2xl overflow-hidden border-none bg-gradient-to-br from-white via-slate-50 to-white p-0 shadow-2xl sm:rounded-3xl",
          className
        )}
      >
        {/* Decorative Background Elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Top Right Gradient Orb */}
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gradient-to-br from-primary/20 via-emerald-400/10 to-transparent opacity-60 blur-3xl" />

          {/* Bottom Left Gradient Orb */}
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-secondary/20 via-primary/10 to-transparent opacity-60 blur-3xl" />

          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

          {/* Top Accent Bar */}
          <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-primary via-emerald-500 to-secondary" />
        </div>

        <DialogHeader className="sr-only">
          <DialogTitle>Data Readiness Assessment</DialogTitle>
          <DialogDescription>
            Answer 7 quick questions to find out where you stand on data
            maturity.
          </DialogDescription>
        </DialogHeader>

        {/* Header Badge */}
        <div className="relative border-b border-slate-100/50 px-5 pb-3 pt-6 md:px-8">
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-gradient-to-r from-primary/10 to-emerald-500/10 px-4 py-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-bold uppercase tracking-wider text-slate-700">
                Data Readiness Assessment
              </span>
            </div>
          </div>
        </div>

        <div className="scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent relative max-h-[85vh] overflow-y-auto p-4 sm:p-5 md:p-6">
          <QuizFlow onComplete={() => setIsOpen(false)} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
