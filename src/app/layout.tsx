import type { Metadata } from "next";
import { Public_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

// Ornate "found manuscript" display face — used sparingly, for select
// oversized moments only (see .font-manuscript in globals.css). Fraunces'
// high-contrast italic and wonky/soft optical-size axes give it real
// character without sacrificing legibility at large sizes.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: "variable",
  style: ["italic", "normal"],
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: "Prose Florals | Boston Wedding & Event Florist",
  description:
    "Boston-based wedding and event florist. Modern-romantic florals that highlight our couples' style & story. Full-service design, setup, and coordination.",
  openGraph: {
    title: "Prose Florals | Boston Wedding & Event Florist",
    description:
      "Modern-romantic wedding florals for the romantics. Based in Boston, MA.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${publicSans.variable} ${fraunces.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
