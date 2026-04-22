// @ts-nocheck
"use client";

import { QuizFlow } from "@/components/sections/QuizFlow";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AssessmentPage() {
  return (
    <main className="min-h-screen bg-background py-12 md:py-24">
      <div className="container mx-auto px-2 sm:px-6">
        <div className="mx-auto max-w-4xl">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/">
              <Button
                variant="ghost"
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Quiz Container */}
          <div className="relative overflow-hidden rounded-none border-[4px] border-foreground bg-card p-3 shadow-[8px_8px_0_0_hsl(var(--forest))] sm:p-6 md:p-16 md:shadow-[24px_24px_0_0_hsl(var(--forest))]">
            <QuizFlow />
          </div>

          {/* Footer Info */}
          <div className="mt-12 text-center text-sm font-medium text-muted-foreground">
            <p>
              © 2026 Groot Analytics. Your data is handled securely according to
              our Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
