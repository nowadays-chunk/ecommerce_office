import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OmniChannel E-Commerce & Admin Suite",
  description: "A comprehensive e-commerce platform with multiple design variances and a powerful administrative backoffice.",
  keywords: ["e-commerce", "admin dashboard", "multitheme", "retail technology"],
};

import { InteractivityProvider } from "./hooks/use-interactivity";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <InteractivityProvider>
          {children}
        </InteractivityProvider>
      </body>
    </html>
  );
}
