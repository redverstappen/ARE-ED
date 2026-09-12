import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Noto_Sans_Thai as NotoSansThai,
  Noto_Sans_Thai_Looped as NotoSansThaiLooped,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoThai = NotoSansThai({
  variable: "--font-noto-thai",
  subsets: ["thai"],
  weight: ["300", "400", "500", "600", "700"],
});

const notoThaiLooped = NotoSansThaiLooped({
  variable: "--font-noto-thai-looped",
  subsets: ["thai"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ARE_ED",
  description: "ARE_ED — Developer / Creator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoThai.variable} ${notoThaiLooped.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
