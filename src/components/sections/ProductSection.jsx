// @ts-nocheck
"use client";

import { Button } from "@/components/ui/Button";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export const ProductSection = ({
  title,
  trademark = "™",
  description,
  features,
  imagePosition = "right",
  bgVariant = "default",
  visualization,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contentOrder = imagePosition === "left" ? "lg:order-2" : "lg:order-1";
  const imageOrder = imagePosition === "left" ? "lg:order-1" : "lg:order-2";

  return (
    <section
      ref={ref}
      className={`py-20 md:py-24 ${bgVariant === "muted" ? "bg-muted/30" : "bg-background"}`}
    >
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: imagePosition === "left" ? 30 : -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className={contentOrder}
          >
            <h2 className="mb-6 font-serif text-3xl leading-tight text-foreground md:text-4xl lg:text-5xl">
              {title}
              <sup className="text-2xl text-primary">{trademark}</sup>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
              {description}
            </p>

            <div className="mb-8 space-y-4">
              {features.slice(0, 3).map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="group flex items-start gap-4"
                >
                  <div className="mt-2.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary transition-transform group-hover:scale-125" />
                  <div>
                    <span className="font-semibold text-foreground">
                      {feature.title}:
                    </span>{" "}
                    <span className="text-muted-foreground">
                      {feature.description}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="heroOutline" size="lg" className="group">
              Learn More
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: imagePosition === "left" ? -30 : 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={imageOrder}
          >
            {visualization}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 md:mt-24"
        >
          <h3 className="mb-12 text-center font-serif text-2xl text-foreground md:mb-16 md:text-3xl">
            How does {title} support the analytics value chain?
          </h3>
          <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="group flex items-start gap-4 rounded-xl border border-border/40 bg-muted/20 p-5 transition-all duration-300 hover:bg-muted/50 hover:shadow-md md:border-0 md:bg-transparent"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <div className="h-3 w-3 rounded-full bg-primary" />
                </div>
                <div>
                  <h4 className="mb-1.5 text-sm font-semibold text-foreground">
                    {feature.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
