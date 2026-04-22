// @ts-nocheck
"use client";

import { TECH_STACK } from "@/lib/constants/technologies";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export function TechStackVisualizer() {
  const [activeTab, setActiveTab] = useState(TECH_STACK[0].id);

  return (
    <section id="technologies" className="relative bg-background py-24">
      <div className="container mx-auto px-6">
        {/* Tabs Navigation */}
        <div className="mx-auto mb-16 flex max-w-5xl flex-wrap justify-center gap-3">
          {TECH_STACK.map((category) => {
            const Icon = category.icon;
            const isActive = activeTab === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2.5 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "scale-105 border-primary bg-primary text-primary-foreground shadow-[0_0_20px_-5px_hsl(var(--primary)/0.5)]"
                    : "border-border/50 bg-background/50 text-muted-foreground backdrop-blur-sm hover:border-primary/50 hover:bg-muted/20 hover:text-foreground"
                } `}
              >
                <Icon size={18} />
                {category.label}
              </button>
            );
          })}
        </div>

        <div className="mx-auto min-h-[500px] max-w-[90rem]">
          {" "}
          {/* Add min-h to prevent layout jump */}
          <AnimatePresence mode="popLayout">
            {TECH_STACK.map(
              (category) =>
                category.id === activeTab && (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{
                      opacity: 0,
                      y: -20,
                      scale: 0.98,
                      transition: { duration: 0.2 },
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      mass: 1,
                    }}
                  >
                    {/* Category Description */}
                    <div className="mb-12 text-center">
                      <h2 className="mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-3xl font-bold text-transparent">
                        {category.label}
                      </h2>
                      <p className="mx-auto max-w-2xl text-xl leading-relaxed text-muted-foreground/90">
                        {category.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                      {category.subcategories.map((sub, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                            delay: idx * 0.05,
                          }}
                          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-background/40 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/80 hover:shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.2)]"
                        >
                          {/* Hover Gradient Effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                          <h3 className="relative mb-6 flex items-center gap-3 text-xl font-bold text-foreground">
                            <div className="h-6 w-1 rounded-full bg-gradient-to-b from-primary to-forest shadow-[0_0_10px_hsl(var(--primary)/0.5)]" />
                            {sub.name}
                          </h3>
                          <ul className="relative space-y-4">
                            {sub.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="group/item">
                                <div className="flex items-center gap-2 font-semibold text-foreground/90 transition-colors group-hover/item:text-primary">
                                  <span className="h-1.5 w-1.5 rounded-full bg-border transition-colors duration-300 group-hover/item:bg-primary" />
                                  {item.name}
                                </div>
                                <div className="mt-1 pl-3.5 text-sm leading-snug text-muted-foreground">
                                  {item.description}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>

        {/* Technology Selection Footer */}
        <div className="mx-auto mt-16 max-w-4xl border-t border-border pt-12 text-center">
          <h3 className="mb-8 text-2xl font-bold">Technology Selection</h3>
          <div className="mb-8 flex flex-wrap justify-center gap-x-8 gap-y-4">
            {[
              "Client's existing infrastructure",
              "Scalability requirements",
              "Budget and cost efficiency",
              "Integration capabilities",
              "Long-term support and community",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 font-medium text-muted-foreground"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                {item}
              </div>
            ))}
          </div>
          <p className="mx-auto max-w-2xl leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">
              Custom Solutions:
            </span>{" "}
            We tailor our technology stack to each client&apos;s specific needs,
            ensuring seamless integration with existing systems.
          </p>
        </div>
      </div>
    </section>
  );
}
