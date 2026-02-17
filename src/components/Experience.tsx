"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
    {
        role: "Software Engineer",
        company: "NatWest Group (formerly Royal Bank of Scotland)",
        duration: "July 2024 – Present",
        description: [
            "Working on large-scale Trade and Transaction Reporting (TNTR) systems processing 90k–100k trades daily, ensuring regulatory accuracy and compliance.",
            "Implemented field-level validations, enrichments, and unit tests across reporting workflows, improving release stability and reducing production defects.",
            "Contributed to multiple regulatory flows including JRR, JFSA, FX MAS, Canada Rewrite, ETD (Exchange Traded Derivatives), SFTR, and Bonds.",
            "Led development of Japan Regulatory Reporting (JRR) and JFSA workflows, delivering 15+ JRR (Excel, DOCX) and 10+ JFSA (CSV) reports.",
            "Designed and implemented end-to-end report generation pipelines supporting Excel, DOCX, CSV, and XML formats across multiple regulators.",
            "Handled complex data mapping, enrichment, and schema compliance for MAS and Canada Rewrite XML-based reports.",
            "Upgraded legacy JRR system to Spring Boot 3.x and JDK 21, improving modularity, performance, and security compliance.",
            "Refactored multi-module Spring Boot ecosystem into a single-source, single-POM architecture for better maintainability."
        ],
        skills: ["Spring Boot", "Spring Integration", "MongoDB", "JDK 21", "AWS", "Swagger UI", "Git"]
    },
    {
        role: "Software Engineer Intern",
        company: "Newgen Software Technologies",
        duration: "Jan 2024 – June 2024",
        description: [
            "Customized enterprise workflow and document management solutions using Newgen OmniDocs and OmniFlow for client-specific business processes.",
            "Developed backend components using Java and Spring Boot to implement document lifecycles, workflow routing, and RESTful integrations.",
            "Debugged workflow and integration issues across document and process management modules, ensuring system stability."
        ],
        skills: ["Java", "Spring Boot", "ReactJS", "JavaScript", "REST API", "OmniDocs", "OmniFlow"]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-24">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Experience</h2>
                    <div className="w-20 h-1 bg-primary rounded-full" />
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Custom Bullet Point */}
                                <div className="absolute left-[-5px] md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full transform md:-translate-x-1.5 mt-1.5 ring-4 ring-background" />

                                <div className="flex-1 md:w-1/2 pl-6 md:pl-0">
                                    <Card className="h-full">
                                        <CardHeader>
                                            <div className="flex justify-between items-start flex-wrap gap-2">
                                                <div>
                                                    <CardTitle className="text-xl font-bold">{exp.role}</CardTitle>
                                                    <p className="text-primary font-medium">{exp.company}</p>
                                                </div>
                                                <Badge variant="outline">{exp.duration}</Badge>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm mb-4">
                                                {exp.description.map((desc, i) => (
                                                    <li key={i}>{desc}</li>
                                                ))}
                                            </ul>
                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {exp.skills.map(skill => (
                                                    <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Empty Space for Timeline Alignment */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
