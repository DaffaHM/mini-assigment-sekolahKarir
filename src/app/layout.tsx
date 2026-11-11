import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Karier di Sekolah Karir - Bangun Masa Depan Bersama Kami",
  description:
    "Bantu lebih banyak talenta menghubungkan potensi, keterampilan, dan peluang di dunia kerja bersama Sekolah Karir.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <body
        className="min-h-screen bg-[#F2EEE7] text-[#001133] antialiased font-sans selection:bg-[#075CF0] selection:text-white"
        style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
