import React from "react";
import "../styles/globals.css";
import type { Metadata } from "next";
import { base, heading } from "@/constants/fonts";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { BuyMeCoffee } from "@/components/utils/buy-me-coffee";
import { ThemeProvider } from "@/components/utils/theme-provider";

export const metadata: Metadata = {
  title: "Sandipan Biswas",
  description: "Software Developer",
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
          "min-h-screen bg-background text-foreground antialiased font-heading relative",
          heading.variable,
          base.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <BuyMeCoffee />
        </ThemeProvider>
      </body>
    </html>
  );
}
