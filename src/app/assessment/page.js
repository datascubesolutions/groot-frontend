"use client";

import { QuizFlow } from "@/components/sections/QuizFlow";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AssessmentPage() {
  return (
    <main className="min-h-screen bg-background py-12 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Quiz Container */}
          <div className="bg-card rounded-none p-6 md:p-16 border-[4px] border-foreground relative overflow-hidden shadow-[24px_24px_0_0_hsl(var(--forest))]">
            <QuizFlow />
          </div>

          {/* Footer Info */}
          <div className="mt-12 text-center text-muted-foreground text-sm font-medium">
            <p>© 2026 Groot Analytics. Your data is handled securely according to our Privacy Policy.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
