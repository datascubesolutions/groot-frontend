"use client";

import { QuizFlow } from "@/components/sections/QuizFlow";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AssessmentPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" className="text-slate-500 hover:text-slate-900">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Quiz Container */}
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-6 md:p-16 border border-slate-100">
            <QuizFlow />
          </div>

          {/* Footer Info */}
          <div className="mt-12 text-center text-slate-600 text-sm font-medium">
            <p>© 2026 Groot Analytics. Your data is handled securely according to our Privacy Policy.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
