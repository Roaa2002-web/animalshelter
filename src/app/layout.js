import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // ا��تيراد مكون التذيي
import ThemeProvider from "@/components/ThemeProvider"; // استيراد مكون الوضع الليلي

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Animals Shelter",
  description: "Adopt your new best friend!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider /> {/* مكون مسؤول عن تحميل الوضع الليلي */}
        <Navbar /> {/* إضافة الناف بار */}
        {children}
        <Footer/>
      </body>
    </html>
  );
}
