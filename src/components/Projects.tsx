"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        title: "Cycle Renting System",
        description: "A full-stack rental platform with QR scanning capabilities for seamless bike rentals.",
        image: "/placeholder-project.jpg", // Placeholder
        tags: ["Node.js", "MongoDB", "React", "Android", "Express"],
        links: {
            github: "https://github.com/suryanshhbtu", // Using profile link as placeholder provided
            demo: "#"
        },
        features: [
            "User Authentication",
            "Real-time Cycle Tracking",
            "Role-based Access Control",
            "Cross-platform Integration"
        ]
    },
    // Adding placeholder project to fill the grid
    {
        title: "Portfolio Website",
        description: "Modern developer portfolio built with Next.js 14, Tailwind CSS, and Framer Motion.",
        image: "/placeholder-portfolio.jpg",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        links: {
            github: "https://github.com/suryanshhbtu",
            demo: "#"
        },
        features: [
            "Responsive Design",
            "Dark Mode Support",
            "SEO Optimized",
            "Performance Focused"
        ]
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-primary rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50">
                                <CardHeader>
                                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                                    <CardDescription className="mt-2">{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <div className="mb-6">
                                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                            {project.features.map((feature, i) => (
                                                <li key={i}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <Badge key={tag} variant="secondary">{tag}</Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="flex gap-4 pt-6 border-t bg-secondary/10">
                                    <Button variant="outline" size="sm" asChild>
                                        <Link href={project.links.github} target="_blank">
                                            <Github className="mr-2 h-4 w-4" />
                                            Code
                                        </Link>
                                    </Button>
                                    <Button size="sm" asChild>
                                        <Link href={project.links.demo} target="_blank">
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            Live Demo
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
