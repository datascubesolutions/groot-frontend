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
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className={cn("max-w-3xl p-0 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white border-none shadow-2xl sm:rounded-3xl relative", className)}>
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Top Right Gradient Orb */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-primary/20 via-emerald-400/10 to-transparent rounded-full blur-3xl opacity-60" />

          {/* Bottom Left Gradient Orb */}
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-secondary/20 via-primary/10 to-transparent rounded-full blur-3xl opacity-60" />

          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

          {/* Top Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-emerald-500 to-secondary" />
        </div>

        <DialogHeader className="sr-only">
          <DialogTitle>Data Readiness Assessment</DialogTitle>
          <DialogDescription>
            Answer 7 quick questions to find out where you stand on data maturity.
          </DialogDescription>
        </DialogHeader>

        {/* Header Badge */}
        <div className="relative pt-8 pb-4 px-6 md:px-12 border-b border-slate-100/50">
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-emerald-500/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">Data Readiness Assessment</span>
            </div>
          </div>
        </div>

        <div className="relative p-6 md:p-8 overflow-y-auto max-h-[85vh] scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
          <QuizFlow onComplete={() => setIsOpen(false)} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
