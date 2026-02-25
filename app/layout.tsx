import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tanksley Automotive | Quality Auto Repair in Greenwell Springs Since 1996",
  description: "Family-owned, Jasper Certified auto repair shop in Greenwell Springs, LA. A+ BBB rated with 29 years of trusted service. Specializing in transmission, A/C, brakes, and diagnostics.",
  keywords: "auto repair Greenwell Springs, mechanic Central Louisiana, car repair 70739, transmission repair, Jasper certified",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
