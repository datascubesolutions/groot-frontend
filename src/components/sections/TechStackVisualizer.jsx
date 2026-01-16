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
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {TECH_STACK.map((category) => {
            const Icon = category.icon;
            const isActive = activeTab === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`
                      flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 border
                      ${isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25"
                    : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                  }
                    `}
              >
                <Icon size={18} />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {TECH_STACK.map((category) => (
              category.id === activeTab && (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Category Description */}
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">{category.label}</h2>
                    <p className="text-lg text-muted-foreground">{category.description}</p>
                  </div>

                  {/* Subcategories Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.subcategories.map((sub, idx) => (
                      <div key={idx} className="bg-muted/30 border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-colors">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                          <div className="w-1.5 h-6 bg-primary rounded-full" />
                          {sub.name}
                        </h3>
                        <ul className="space-y-4">
                          {sub.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="group">
                              <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                {item.name}
                              </div>
                              <div className="text-sm text-muted-foreground mt-0.5">
                                {item.description}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
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
