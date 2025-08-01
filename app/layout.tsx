
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { TaskProvider } from "@/src/contexts/TaskContext";
import { Header } from "@/src/components/Layaut/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next-Crud-App",
  description: "Next-Crud-App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="es" translate="no">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TaskProvider>
          <Header />
          {children}
        </TaskProvider>
      </body>
    </html>
  );
}
