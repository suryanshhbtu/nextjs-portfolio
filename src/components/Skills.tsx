"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
    {
        title: "Languages",
        skills: ["Java", "Python", "JavaScript", "XML", "HTML", "CSS", "SQL"],
    },
    {
        title: "Frameworks",
        skills: ["Spring Boot", "Spring MVC", "React", "Next.js", "Node.js", "Express", "Tailwind CSS"],
    },
    {
        title: "Tools & DevOps",
        skills: ["Git", "AWS", "Docker", "Jenkins", "Jira", "Confluence", "IntelliJ IDEA", "Postman", "Swagger"],
    },
    {
        title: "Core Expertise",
        skills: ["Microservices", "System Design", "RESTful APIs", "Regulatory Reporting", "Data Structures", "Algorithms", "Backend Architecture"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-secondary/30">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-primary rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <CardTitle>{category.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
