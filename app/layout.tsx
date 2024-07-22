import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "./globals.css";

import { ThemeProvider } from "@/components/providers/theme-provider";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "teb's web",
  description: "Collection of my web art.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
