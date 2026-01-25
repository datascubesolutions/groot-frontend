"use client";

import { TECH_STACK } from "@/lib/constants/technologies";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export function TechStackVisualizer() {
  const [activeTab, setActiveTab] = useState(TECH_STACK[0].id);

  return (
    <section id="technologies" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-5xl mx-auto">
          {TECH_STACK.map((category) => {
            const Icon = category.icon;
            const isActive = activeTab === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`
                      flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border
                      ${isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_-5px_hsl(var(--primary)/0.5)] scale-105"
                    : "bg-background/50 backdrop-blur-sm text-muted-foreground border-border/50 hover:border-primary/50 hover:text-foreground hover:bg-muted/20"
                  }
                    `}
              >
                <Icon size={18} />
                {category.label}
              </button>
            );
          })}
        </div>

        <div className="max-w-[90rem] mx-auto min-h-[500px]"> {/* Add min-h to prevent layout jump */}
          <AnimatePresence mode="popLayout">
            {TECH_STACK.map((category) => (
              category.id === activeTab && (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{
                    opacity: 0,
                    y: -20,
                    scale: 0.98,
                    transition: { duration: 0.2 }
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    mass: 1
                  }}
                >
                  {/* Category Description */}
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">{category.label}</h2>
                    <p className="text-xl text-muted-foreground/90 max-w-2xl mx-auto leading-relaxed">{category.description}</p>
                  </div>

                  {/* Subcategories Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {category.subcategories.map((sub, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 100,
                          damping: 15,
                          delay: idx * 0.05
                        }}
                        className="group relative bg-background/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary/80 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.2)] hover:-translate-y-1 overflow-hidden"
                      >
                        {/* Hover Gradient Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <h3 className="relative text-xl font-bold mb-6 flex items-center gap-3 text-foreground">
                          <div className="w-1 h-6 bg-gradient-to-b from-primary to-forest rounded-full shadow-[0_0_10px_hsl(var(--primary)/0.5)]" />
                          {sub.name}
                        </h3>
                        <ul className="relative space-y-4">
                          {sub.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="group/item">
                              <div className="font-semibold text-foreground/90 group-hover/item:text-primary transition-colors flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-border group-hover/item:bg-primary transition-colors duration-300" />
                                {item.name}
                              </div>
                              <div className="text-sm text-muted-foreground mt-1 pl-3.5 leading-snug">
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
            ))}
          </AnimatePresence>
        </div>

        {/* Technology Selection Footer */}
        <div className="max-w-4xl mx-auto text-center border-t border-border pt-12 mt-16">
          <h3 className="text-2xl font-bold mb-8">Technology Selection</h3>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
            {[
              "Client's existing infrastructure",
              "Scalability requirements",
              "Budget and cost efficiency",
              "Integration capabilities",
              "Long-term support and community"
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-muted-foreground font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                {item}
              </div>
            ))}
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            <span className="font-semibold text-foreground">Custom Solutions:</span> We tailor our technology stack to each client's specific needs, ensuring seamless integration with existing systems.
          </p>
        </div>
      </div>
    </section>
  );
}
