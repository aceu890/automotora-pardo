import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pardo Motors - Venta de Vehículos en Melipilla, Chile",
  description:
    "Pardo Motors es tu opción confiable en la compra y venta de vehículos en Melipilla, Chile. Especializados en camiones y autos de calidad, ofrecemos remates y una experiencia de compra única. Con precios competitivos y atención personalizada, facilitamos la adquisición de vehículos adaptados a tus necesidades y presupuesto. Descubre nuestras ofertas y contáctanos hoy para más información. ¡Tu satisfacción es nuestra prioridad!",
  keywords:
    "venta de vehículos, compra de camiones, remates en Melipilla, financiamiento de autos, autos en Chile, compra venta de vehiculos, ciudad melipilla, san antonio, santiago, pardo motors",
  other: {
    "google-site-verification": "VNR2ire25FC43yeKPnZarwWTuriDLRSmcgT3XInED-Q",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="VNR2ire25FC43yeKPnZarwWTuriDLRSmcgT3XInED-Q"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}

import { Navbar } from "./components/Navbar/Navbar";
import "./globals.css";
import Footer from "./components/Footer";
