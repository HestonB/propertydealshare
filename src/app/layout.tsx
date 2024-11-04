"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/ui/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  metadataBase: new URL("https://propertydealshare.co.uk"),
  title: "PropertyDealShare - Your Property Investment Network",
  description:
    "Connect with verified property sourcers and investors in one professional platform.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://propertydealshare.co.uk",
    title: "PropertyDealShare - Your Property Investment Network",
    description:
      "Connect with verified property sourcers and investors in one professional platform.",
    siteName: "PropertyDealShare",
  },
  twitter: {
    card: "summary_large_image",
    title: "PropertyDealShare - Your Property Investment Network",
    description:
      "Connect with verified property sourcers and investors in one professional platform.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/logo192.png" />
        </head>
        <body className={inter.className}>
          <Navbar />
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
