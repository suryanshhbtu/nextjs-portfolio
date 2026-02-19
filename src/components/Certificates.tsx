"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const certificates = [
    {
        title: "AWS Certified Machine Learning - Associate",
        issuer: "Amazon Web Services",
        image: "/res/certificates/AWS_ml_associate.png",
        tags: ["Cloud", "AWS", "Machine Learning"],
        issueDate: "February 18, 2026",
        expirationDate: "February 18, 2029",
    },
    {
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        image: "/res/certificates/AWS_accp_certificate.jpg",
        tags: ["Cloud", "AWS"],
        issueDate: "March 21, 2025",
        expirationDate: "March 21, 2028",
    },
    {
        title: "1st Position - Red Pencil Event",
        issuer: "Technika, HBTU",
        image: "/res/certificates/Technika_hbtu_1st_pos_red_pencil.jpg",
        tags: ["Competition", "Winner"],
        issueDate: "September 2022",
        expirationDate: "Non-expiring",
    },
    {
        title: "Java Masterclass",
        issuer: "Udemy",
        image: "/res/certificates/java_udemy.jpg",
        tags: ["Java", "Backend"],
        issueDate: "Dec 2, 2023",
        expirationDate: "Non-expiring",
    },
    {
        title: "React - The Complete Guide",
        issuer: "Udemy",
        image: "/res/certificates/react_udemy.jpg",
        tags: ["React", "Frontend"],
        issueDate: "Feb 15, 2023",
        expirationDate: "Non-expiring",
    },
    {
        title: "The Complete SQL Bootcamp",
        issuer: "Udemy",
        image: "/res/certificates/sql_udemy.png",
        tags: ["SQL", "Database"],
        issueDate: "Nov 26, 2023",
        expirationDate: "Non-expiring",
    },
];

export default function Certificates() {
    const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

    return (
        <section id="certificates" className="py-24">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Certifications & Awards</h2>
                    <div className="w-20 h-1 bg-primary rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => setSelectedCert(cert)}
                            className="cursor-pointer"
                        >
                            <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col">
                                <div className="relative h-48 w-full overflow-hidden bg-muted flex-shrink-0">
                                    <Image
                                        src={cert.image}
                                        alt={cert.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="text-white text-sm font-medium border border-white px-3 py-1 rounded-full">View Certificate</span>
                                    </div>
                                </div>
                                <CardHeader className="p-4 pb-2 flex-grow">
                                    <div className="flex justify-between items-start mb-2">
                                        <Badge variant="secondary" className="text-xs text-nowrap overflow-hidden text-ellipsis max-w-full">{cert.issuer}</Badge>
                                    </div>
                                    <CardTitle className="text-lg line-clamp-2" title={cert.title}>
                                        {cert.title}
                                    </CardTitle>
                                    {(cert.issueDate || cert.expirationDate) && (
                                        <div className="text-xs text-muted-foreground mt-2 space-y-1">
                                            {cert.issueDate && <p>Issued: {cert.issueDate}</p>}
                                            {cert.expirationDate && <p>Expires: {cert.expirationDate}</p>}
                                        </div>
                                    )}
                                </CardHeader>
                                <CardContent className="p-4 pt-0 mt-auto">
                                    <div className="flex flex-wrap gap-1 mt-2">
                                        {cert.tags.map((tag) => (
                                            <Badge key={tag} variant="outline" className="text-[10px] px-2 py-0 h-5">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-4xl w-full max-h-[90vh] bg-background rounded-lg shadow-2xl overflow-hidden flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="absolute top-2 right-2 z-10">
                                <Button variant="outline" size="icon" className="rounded-full bg-background/50 hover:bg-background" onClick={() => setSelectedCert(null)}>
                                    <X className="h-4 w-4" />
                                </Button>
                            </div>
                            <div className="relative w-full h-full flex-grow min-h-[50vh]">
                                <Image
                                    src={selectedCert.image}
                                    alt={selectedCert.title}
                                    fill
                                    className="object-contain" // Changed to contain to ensure full certificate is visible
                                />
                            </div>
                            <div className="p-4 bg-background border-t">
                                <h3 className="text-xl font-bold">{selectedCert.title}</h3>
                                <p className="text-muted-foreground">{selectedCert.issuer}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
