// @ts-nocheck
"use client";

import { Button } from "@/components/ui/Button";
import { createMulberry32 } from "@/lib/prng";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Mail } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";

export function CTASection() {
  const animatedDots = useMemo(() => {
    const rand = createMulberry32(0x9e3779b9);
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: rand() * 100,
      top: rand() * 100,
      duration: 3 + rand() * 2,
      delay: rand() * 2,
    }));
  }, []);

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary" />

      {/* Animated dots */}
      <div className="absolute inset-0 overflow-hidden">
        {animatedDots.map((dot) => (
          <motion.div
            key={dot.id}
            className="absolute h-2 w-2 rounded-full bg-primary/20"
            style={{
              left: `${dot.left}%`,
              top: `${dot.top}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              delay: dot.delay,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-6 text-3xl font-bold text-secondary-foreground md:text-4xl lg:text-5xl">
            Ready to transform your data into{" "}
            <span className="text-primary">intelligent decisions</span>?
          </h2>
          <p className="mb-10 text-lg text-secondary-foreground/80">
            Let&apos;s discuss how Groot Analytics can help you build a modern
            data platform, unlock advanced analytics, or implement AI-powered
            automation.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button variant="mint" size="lg" className="group">
                <Mail className="h-5 w-5" />
                Start a Conversation
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-primary/50 text-primary hover:bg-primary hover:text-charcoal"
              >
                <Calendar className="h-5 w-5" />
                Schedule a Call
              </Button>
            </Link>
          </div>

          {/* Contact options */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-secondary-foreground/70">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              Free initial consultation
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              Custom solutions
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              Flexible engagement models
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;
