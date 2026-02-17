"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
            {/* Background Gradient/Particles */}
            <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background z-0" />

            {/* Content */}
            <div className="container px-4 md:px-6 z-10 flex flex-col items-center text-center gap-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                >
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-secondary blur opacity-25 animate-pulse" />
                    <span className="relative inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest bg-background/80 backdrop-blur-sm text-primary rounded-full mb-4 border border-primary/30 shadow-sm">
                        Open to Work & Continuous Learning
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black font-heading tracking-tighter leading-[0.9]"
                >
                    Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary/80 to-secondary/60">Suryansh</span>.
                    <br />
                    <span className="text-2xl md:text-4xl lg:text-5xl text-foreground font-semibold mt-4 block">
                        I Speak Java So Regulators Don&apos;t Have To.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                >
                    Processing <strong>100k+ trades daily</strong> is just another day at the office.
                    I build the high-frequency backend infrastructure of the future,
                    <strong> leaning forward to master </strong> the next wave of tech.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 mt-8"
                >
                    <Button size="lg" asChild className="group">
                        <Link href="#projects">
                            View Projects
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <Link href="#contact">
                            Contact Me
                        </Link>
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
            >
                <span className="sr-only">Scroll down</span>
                <ArrowRight className="h-6 w-6 rotate-90 text-muted-foreground" />
            </motion.div>
        </section>
    );
}
