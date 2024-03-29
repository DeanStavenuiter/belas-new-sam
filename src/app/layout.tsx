import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Barlow } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  style: ['normal', 'italic'],
  
});

export const metadata: Metadata = {
  title: "Belas VOF - Home",
  description: "Belas VOF - Beter lassen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl-NL">
      <body className={`${barlow.className}`} >{children}</body>
    </html>
  );
}
