"use client";

import blogAnimation from "@/lottie/blog.json";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const ClientLottie = dynamic(() => import("@/components/ui/ClientLottie"), { ssr: false });

export function BlogPageHeader() {
    return (
        <header className="relative w-full pt-24 pb-4 md:pt-28 md:pb-8 overflow-hidden">
            {/* Subtle Gradient Background */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] opacity-60 mix-blend-screen translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[90px] opacity-40 mix-blend-screen -translate-x-1/3 translate-y-1/3" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-[1400px] relative z-10"
            >
                <div className="grid lg:grid-cols-[1.3fr_0.8fr] gap-6 items-center">
                    <div className="w-full">
                        <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-widest text-forest uppercase bg-forest/10 rounded-full border border-forest/30">
                            The Groot Blog
                        </span>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.05] mb-3">
                            Insights for the <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-foreground/50">
                                Data-Driven Future
                            </span>
                        </h1>

                        <p className="text-base md:text-lg text-muted-foreground/90 leading-relaxed max-w-2xl font-light">
                            Expert perspectives on modern data stacks, AI engineering,
                            and strategies shaping the next generation of enterprise intelligence.
                        </p>
                    </div>

                    {/* Lottie Animation */}
                    <div className="hidden lg:flex justify-end items-center">
                        <div className="w-full max-w-[320px] aspect-square relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-30 blur-[80px] rounded-full" />
                            <ClientLottie
                                animationData={blogAnimation}
                                className="w-full h-full relative z-10"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </header>
    );
}
