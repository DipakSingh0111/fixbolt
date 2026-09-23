import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/data";
import TopBar from "./common/TopBar";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import SmoothScrollProvider from "./components/SmoothScrollProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: site.siteMeta.metaTitle,
  description: site.siteMeta.metaDescription,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="flex flex-col font-sans min-h-screen overflow-x-hidden">
        <SmoothScrollProvider>
          <header className="sticky top-0 z-50">
            <TopBar />
            <Navbar />
          </header>
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
