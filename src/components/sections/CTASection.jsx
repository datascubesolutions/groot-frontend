"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  const [isMounted, setIsMounted] = useState(false);

  // Generate random positions for animated dots (client-side only to avoid hydration mismatch)
  const animatedDots = useMemo(() => {
    if (!isMounted) return [];
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
  }, [isMounted]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary" />

      {/* Animated dots */}
      <div className="absolute inset-0 overflow-hidden">
        {animatedDots.map((dot) => (
          <motion.div
            key={dot.id}
            className="absolute w-2 h-2 rounded-full bg-primary/20"
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

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
            Ready to transform your data into{" "}
            <span className="text-primary">intelligent decisions</span>?
          </h2>
          <p className="text-lg text-secondary-foreground/80 mb-10">
            Let's discuss how Groot Analytics can help you build a modern data
            platform, unlock advanced analytics, or implement AI-powered
            automation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="mint" size="lg" className="group">
              <Mail className="w-5 h-5" />
              Start a Conversation
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary hover:text-charcoal"
            >
              <Calendar className="w-5 h-5" />
              Schedule a Call
            </Button>
          </div>

          {/* Contact options */}
          <div className="mt-12 flex flex-wrap gap-8 justify-center text-secondary-foreground/70 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Free initial consultation
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Custom solutions
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Flexible engagement models
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;
