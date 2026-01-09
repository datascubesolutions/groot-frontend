"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

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
      className={`py-24 md:py-32 ${bgVariant === "muted" ? "bg-muted/30" : "bg-background"}`}
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: imagePosition === "left" ? 30 : -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className={contentOrder}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6 leading-tight">
              {title}<sup className="text-2xl text-primary">{trademark}</sup>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              {description}
            </p>

            <div className="space-y-4 mb-8">
              {features.slice(0, 3).map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <div>
                    <span className="font-semibold text-foreground">{feature.title}:</span>{" "}
                    <span className="text-muted-foreground">{feature.description}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="heroOutline" size="lg" className="group">
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
          <h3 className="text-2xl md:text-3xl font-serif text-foreground text-center mb-12 md:mb-16">
            How does {title} support the analytics value chain?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="flex items-start gap-4 p-5 rounded-xl hover:bg-muted/50 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-1.5">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
