"use client"; // needed because we use state in ThemeProvider

import { ThemeProvider } from "@/context/ThemeContext";
import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rwanda EconTracker - Understanding Rwanda's Economy",
  description:
    "Your gateway to understanding Rwanda's economy in real time. Track key indicators, read insights, and learn economics.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={`${inter.className} bg-background text-foreground transition-colors duration-300`}>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
  
