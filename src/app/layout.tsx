import React from "react";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { base, heading } from "@/constants/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import "../styles/globals.css";

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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
