"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Need to create Textarea and Input ui components or use native
import { Mail, Phone, Send } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    return (
        <section id="contact" className="py-24">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-primary rounded-full" />
                    <p className="mt-4 text-muted-foreground max-w-xl">
                        Have a project in mind or want to discuss modern backend architectures?
                        Feel free to reach out.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Contact Information</CardTitle>
                                <CardDescription>
                                    You can contact me through any of the following channels.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <Link
                                    href="mailto:suryanshhbtu@gmail.com"
                                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                                >
                                    <div className="p-2 bg-primary/10 rounded-full">
                                        <Mail className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Email</p>
                                        <p className="text-sm text-muted-foreground">suryanshhbtu@gmail.com</p>
                                    </div>
                                </Link>

                                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                                    <div className="p-2 bg-primary/10 rounded-full">
                                        <Phone className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Phone</p>
                                        <p className="text-sm text-muted-foreground">+91-9125224471</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Send a Message</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium">Name</label>
                                            <Input id="name" placeholder="John Doe" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                                            <Input id="email" type="email" placeholder="john@example.com" required />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                        <Input id="subject" placeholder="Project Discussion" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                                        <Textarea id="message" placeholder="Your message..." className="min-h-[120px]" required />
                                    </div>
                                    <Button type="submit" className="w-full">
                                        <Send className="mr-2 h-4 w-4" />
                                        Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
