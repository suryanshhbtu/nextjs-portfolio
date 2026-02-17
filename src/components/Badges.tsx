"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const badgesList = [
    {
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        image: "/res/badges/aws_accp_badge.jpg",
        tags: ["Cloud", "AWS"],
        date: "2025"
    },
    {
        title: "1000 Days DSA Streak",
        issuer: "LeetCode",
        image: "/res/badges/leetcode_1k_days.png",
        tags: ["DSA", "Consistency"],
        date: "2025"
    },
    {
        title: "500 Days DSA Streak",
        issuer: "LeetCode",
        image: "/res/badges/leetcode_500_days.png",
        tags: ["DSA", "Consistency"],
        date: "2024"
    },
    {
        title: "Annual Badge 2024",
        issuer: "LeetCode",
        image: "/res/badges/2024-lg.png",
        tags: ["Annual", "Competition"],
        date: "2024"
    },
    {
        title: "Annual Badge 2023",
        issuer: "LeetCode",
        image: "/res/badges/lg2023.png",
        tags: ["Annual", "Competition"],
        date: "2023"
    },
    {
        title: "Annual Badge 2022",
        issuer: "LeetCode",
        image: "/res/badges/2022-annual.png",
        tags: ["Annual", "Competition"],
        date: "2022"
    },
];

export default function Badges() {
    const [selectedBadge, setSelectedBadge] = useState<typeof badgesList[0] | null>(null);

    return (
        <section id="badges" className="py-24 bg-secondary/30">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Digital Badges</h2>
                    <div className="w-20 h-1 bg-primary rounded-full" />
                    <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                        A collection of verified achievements, milestones, and technical certifications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {badgesList.map((badge, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => setSelectedBadge(badge)}
                            className="cursor-pointer group"
                        >
                            <div className="flex flex-col items-center text-center space-y-3">
                                <div className="relative h-32 w-32 md:h-40 md:w-40 bg-background rounded-full p-2 border border-border shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-105 overflow-hidden">
                                    <Image
                                        src={badge.image}
                                        alt={badge.title}
                                        fill
                                        className="object-contain p-2"
                                    />
                                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="text-xs font-bold text-primary">View Full</span>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-sm font-bold leading-tight">{badge.title}</h3>
                                    <p className="text-xs text-muted-foreground">{badge.issuer}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedBadge && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                        onClick={() => setSelectedBadge(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-lg w-full bg-background rounded-2xl shadow-2xl overflow-hidden flex flex-col p-8"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="absolute top-4 right-4 z-10">
                                <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setSelectedBadge(null)}>
                                    <X className="h-5 w-5" />
                                </Button>
                            </div>

                            <div className="flex flex-col items-center text-center gap-6">
                                <div className="relative w-48 h-48 md:w-64 md:h-64">
                                    <Image
                                        src={selectedBadge.image}
                                        alt={selectedBadge.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold font-heading">{selectedBadge.title}</h3>
                                    <p className="text-lg text-primary font-semibold">{selectedBadge.issuer}</p>
                                    <Badge variant="secondary" className="mt-2 text-sm">{selectedBadge.date}</Badge>

                                    <div className="flex flex-wrap justify-center gap-2 mt-4">
                                        {selectedBadge.tags.map(tag => (
                                            <Badge key={tag} variant="outline" className="px-3 py-0.5">{tag}</Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
