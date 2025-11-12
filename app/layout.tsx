import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Hosein Kheradmand | Visual Artist",
  description: "Istanbul-based videographer and photographer. Available worldwide for videography, photography, and creative projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-black">
      <body className={`${inter.variable} font-sans antialiased bg-black text-white`}>
        <ScrollProgress />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
