"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-12">
            <div className="container px-4 md:px-6 flex flex-col items-center justify-between gap-6 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    © {currentYear} Suryansh Srivastava. All rights reserved.
                </p>

                <div className="flex items-center gap-4">
                    <Link
                        href="https://github.com/suryanshhbtu"
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link
                        href="https://linkedin.com/in/suryanshhbtu"
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link
                        href="mailto:suryanshhbtu@gmail.com"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                    </Link>
                </div>

                <Button
                    variant="outline"
                    size="icon"
                    onClick={scrollToTop}
                    className="hidden md:flex"
                    aria-label="Back to top"
                >
                    <ArrowUp className="h-4 w-4" />
                </Button>
            </div>
        </footer>
    );
}
