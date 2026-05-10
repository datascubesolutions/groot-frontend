"use client";

import { ChevronRight } from "lucide-react";

export function FAQItem({ q, a }) {
  return (
    <details className="group relative -mt-[3px] cursor-pointer rounded-none border-[3px] border-border/80 bg-card p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:border-foreground hover:shadow-[12px_12px_0_0_foreground] md:p-10 dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] dark:hover:shadow-[12px_12px_0_0_rgba(255,255,255,1)] [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex select-none items-center justify-between gap-6 text-2xl font-black uppercase tracking-tight outline-none">
        <span className="flex-1">{q}</span>
        <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-forest/10 text-forest shadow-[4px_4px_0_0_hsl(var(--forest)/0.3)] transition-all duration-300 group-open:rotate-90 group-open:bg-forest group-open:text-forest-foreground group-open:shadow-[2px_2px_0_0_foreground]">
          <ChevronRight className="h-6 w-6" />
        </div>
      </summary>
      <div className="mt-8 border-l-4 border-t-4 border-foreground border-l-forest bg-muted/30 px-6 pt-8 text-lg font-bold leading-relaxed text-muted-foreground duration-300 animate-in fade-in slide-in-from-top-4">
        {a}
      </div>
    </details>
  );
}

export default function FAQSection() {
  return (
    <section className="relative overflow-hidden border-t-2 border-border/60 bg-muted/40 py-16 lg:py-24">
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] max-w-full rounded-none bg-forest/5 blur-[100px]" />
      <div className="container relative z-10 mx-auto max-w-5xl px-6">
        <div className="mb-16 border-b-4 border-foreground pb-8">
          <h2 className="text-[2rem] font-black uppercase leading-[0.9] tracking-tighter sm:text-[2.5rem] md:text-[5rem]">
            Frequently
            <br />
            Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          <FAQItem
            q="How is this different from a Microsoft assessment?"
            a="Microsoft's assessments focus on Azure adoption. We evaluate your organization's capabilities independent of tool vendor. We'll tell you if Fabric isn't the right choice — Microsoft won't."
          />
          <FAQItem
            q="Who should be involved from our side?"
            a="Typically 8-12 stakeholders: CDO or equivalent, IT leadership, business unit leaders, and 3-4 key data practitioners (your Data Engineers, Power BI developers, analysts)."
          />
          <FAQItem
            q="What if we already know our gaps?"
            a="You might know some. But assessments consistently reveal blind spots — capabilities teams assume exist but don't, or problems that look technical but are actually organizational."
          />
        </div>
      </div>
    </section>
  );
}
