import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "../components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

const matterLight = localFont({
  src: "./fonts/Matter-Light.woff",
  variable: "--font-matter-light",
});

const Khula = localFont({
  src: "./fonts/Khula-Light.ttf",
  variable: "--font-khula",
});

export const metadata: Metadata = {
  title: "Guillemoto.io",
  description: "Développeur web freelance expérimenté",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //<body className="bg-gradient-to-r from-blue-500 to-teal-500">
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${matterLight.variable} ${Khula.variable}  bg-gradient-to-tl from-deep-sea-900 to-black text-white`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
