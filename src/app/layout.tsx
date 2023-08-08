"use client";
import { ReactNode, Suspense } from "react";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Head } from "./Head";
import Navbar from "@/components/Header";
import { Footer } from "@/components/Footer";
import Loading from "./loading";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <Head />

      <body className={poppins.className}>
        <Navbar />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
