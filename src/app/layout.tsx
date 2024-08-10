// Root layout

// Analytics
import { SpeedInsights } from "@vercel/speed-insights/next";

// Data types
import { ReactNode } from "react";

// Metadata & Fonts
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../styling/globals.css";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Justin Abuyuan",
  description:
    "I'm Justin Abuyuan, an undergraduate Management Engineering student at the University of Waterloo. I'm interested in software development and machine intelligence.",
};

// Theme provider
import ThemeProvider from "@/components/theme/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
