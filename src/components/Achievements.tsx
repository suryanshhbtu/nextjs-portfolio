"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Code, Flame, Award } from "lucide-react";

const achievements = [
    {
        title: "Global Rank",
        value: "Top 7%",
        description: "LeetCode Global Ranking",
        icon: Trophy,
    },
    {
        title: "Problems Solved",
        value: "1200+",
        description: "Across various coding platforms",
        icon: Code,
    },
    {
        title: "Consistency",
        value: "500+ Days",
        description: "DSA Streak Commits",
        icon: Flame,
    },
    {
        title: "Winner",
        value: "1st Place",
        description: "Technical Fest Coding Challenge",
        icon: Award,
    },
];

export default function Achievements() {
    return (
        <section id="achievements" className="py-24 bg-secondary/30">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Achievements</h2>
                    <div className="w-20 h-1 bg-primary rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full text-center hover:scale-105 transition-transform duration-300">
                                <CardHeader className="flex flex-col items-center pb-2">
                                    <div className="p-3 bg-primary/10 rounded-full mb-4 ring-1 ring-primary/20">
                                        <item.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <CardTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary to-primary/60">
                                        {item.value}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
