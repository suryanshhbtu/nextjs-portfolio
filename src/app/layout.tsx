import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Outfit for headings, Inter for body
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: {
    default: "Suryansh Srivastava | Software Engineer",
    template: "%s | Suryansh Srivastava",
  },
  description: "Portfolio of Suryansh Srivastava - Senior Backend Developer & Software Engineer specializing in scalable systems, Java, Spring Boot, and Next.js.",
  keywords: ["Software Engineer", "Backend Developer", "Java", "Spring Boot", "Next.js", "Microservices", "Suryansh Srivastava", "Portfolio"],
  authors: [{ name: "Suryansh Srivastava", url: "https://my-portfolio-harcourtains-projects.vercel.app" }],
  creator: "Suryansh Srivastava",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://my-portfolio-harcourtains-projects.vercel.app",
    title: "Suryansh Srivastava | Software Engineer",
    description: "Building scalable backend systems and enterprise-grade reporting solutions.",
    siteName: "Suryansh Srivastava Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suryansh Srivastava | Software Engineer",
    description: "Building scalable backend systems and enterprise-grade reporting solutions.",
    creator: "@suryanshhbtu", // Assuming handle based on provided links
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.variable,
          outfit.variable,
          "font-sans antialiased bg-background text-foreground"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
