import type { Metadata } from "next";
import { Nunito, Italianno, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "./(home)/_components/Navbar";

const nunito = Nunito({
  variable: "--text",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--sub-title",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

const italianno = Italianno({
  variable: "--title",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Psicóloga Francine Sanches Novaes",
  description: "Psicóloga Francine Sanches Novaes — Terapia online para ajudar você a superar desafios emocionais. Agende sua sessão.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${nunito.variable} ${cormorantGaramond.variable} ${italianno.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
