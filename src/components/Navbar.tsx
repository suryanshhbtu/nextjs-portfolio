"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Certifications", href: "#certificates" },
    { name: "Badges", href: "#badges" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isResumeOpen, setIsResumeOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md border-b",
                    scrolled
                        ? "bg-background/80 border-border shadow-sm"
                        : "bg-transparent border-transparent"
                )}
            >
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link href="/" className="text-xl font-bold font-heading tracking-tight hover:opacity-80 transition-opacity">
                            Suryansh Srivastava
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm font-medium hover:text-primary transition-colors text-muted-foreground"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <ThemeToggle />
                            <div className="flex items-center gap-2">
                                <Button variant="outline" size="sm" onClick={() => setIsResumeOpen(true)}>
                                    View CV
                                </Button>
                                <Button variant="default" size="sm" asChild>
                                    <a href="/res/Suryansh26.pdf" download>Resume</a>
                                </Button>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center gap-4">
                            <ThemeToggle />
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-foreground focus:outline-none"
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden border-t bg-background/95 backdrop-blur-md">
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-lg font-medium py-2 border-b border-border/50 last:border-0"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Button variant="outline" className="w-full" onClick={() => { setIsResumeOpen(true); setIsOpen(false); }}>
                                View Resume
                            </Button>
                            <Button className="w-full" asChild>
                                <a href="/res/Suryansh26.pdf" download>Download Resume</a>
                            </Button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Resume Modal */}
            {isResumeOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                    <div className="relative w-full max-w-5xl h-[90vh] bg-background rounded-lg shadow-2xl overflow-hidden flex flex-col">
                        <div className="flex items-center justify-between p-4 border-b">
                            <h3 className="text-xl font-bold font-heading">Resume - Suryansh Srivastava</h3>
                            <div className="flex items-center gap-2">
                                <Button variant="outline" size="sm" asChild className="hidden md:flex">
                                    <a href="/res/Suryansh26.pdf" download>Download PDF</a>
                                </Button>
                                <Button variant="ghost" size="icon" onClick={() => setIsResumeOpen(false)}>
                                    <X className="h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                        <div className="flex-grow w-full">
                            <iframe
                                src="/res/Suryansh26.pdf#toolbar=0"
                                className="w-full h-full border-0"
                                title="Suryansh Srivastava Resume"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
