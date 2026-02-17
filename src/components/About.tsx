"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Server, Database, GraduationCap } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 bg-secondary/30">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-primary rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold mb-4">Professional Summary</h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            I am a Software Engineer with experience building enterprise-grade backend systems, regulatory reporting pipelines, and microservice architectures.
                            My expertise lies in Java, Spring Boot, Next.js, and cloud technologies. I am passionate about system performance, scalability, and clean architecture.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Currently working at <strong>NatWest Group</strong>, I handle large-scale trade reporting systems processing over 100k trades daily. Previously interned at <strong>Newgen Software</strong>, focusing on workflow automation.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="space-y-6"
                    >
                        <Card>
                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                <GraduationCap className="h-6 w-6 text-primary" />
                                <CardTitle className="text-base">Education</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <h4 className="font-semibold">Bachelor of Technology — Electronics Engineering</h4>
                                <p className="text-sm text-muted-foreground">Harcourt Butler Technical University</p>
                                <div className="flex justify-between items-center mt-2 text-sm">
                                    <span>2020 – 2024</span>
                                    <Badge variant="secondary">GPA: 8.645</Badge>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="grid grid-cols-2 gap-4">
                            <Card className="bg-background/50">
                                <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                                    <Server className="h-6 w-6 text-primary mb-1" />
                                    <span className="font-medium text-sm">Backend Systems</span>
                                </CardContent>
                            </Card>
                            <Card className="bg-background/50">
                                <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                                    <Database className="h-6 w-6 text-primary mb-1" />
                                    <span className="font-medium text-sm">Microservices</span>
                                </CardContent>
                            </Card>
                            <Card className="bg-background/50">
                                <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                                    <Code className="h-6 w-6 text-primary mb-1" />
                                    <span className="font-medium text-sm">Regulatory Tech</span>
                                </CardContent>
                            </Card>
                            <Card className="bg-background/50">
                                <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                                    <Code className="h-6 w-6 text-primary mb-1" />
                                    <span className="font-medium text-sm">System Design</span>
                                </CardContent>
                            </Card>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
