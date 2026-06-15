import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PAVAN T L — Software Engineer",
  description:
    "Portfolio of PAVAN T L — Software Engineer specializing in IoT, Cybersecurity, and Full-Stack Development. B.E. in CS-ICB.",
  keywords: [
    "PAVAN T L",
    "Software Engineer",
    "IoT",
    "Cybersecurity",
    "Full Stack Developer",
    "Portfolio",
  ],
  authors: [{ name: "PAVAN T L" }],
  openGraph: {
    title: "PAVAN T L — Software Engineer",
    description:
      "Portfolio of PAVAN T L — Software Engineer specializing in IoT, Cybersecurity, and Full-Stack Development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
