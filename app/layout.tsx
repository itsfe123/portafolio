import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Navbar from "@/components/navbar";
import Header from "@/components/header";

const urbanish = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TarreDev Landing page 🤣",
  description: "Landing page made by TarreDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanish.className}>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
