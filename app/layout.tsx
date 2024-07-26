import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Santosh Neupane",
  description: "Portfolio site of fullstack developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel='icon' type='image/png' href='/favicon-32x32.png' sizes="32x32" />
      <link rel='icon' type='image/png' href='/favicon-16x16.png' sizes="16x16" />

      <link rel='icon' type='image/png' href='/android-chrome-192x192.png' sizes="192x192" />
      <link rel='icon' type='image/png' href='/android-chrome-512x512.png' sizes="512x512" />

      <link rel='icon' type='image/png' href='/apple-touch-icon.png' sizes="180x180" />

      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

      <link rel="manifest" href="/site.webmanifest" />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
