import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Mikael Fernandez Olsson, Portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <Providers>
          <div
            className="
              fixed inset-0 -z-10 pointer-events-none 
              transition-colors duration-500 dark:bg-[radial-gradient(ellipse_at_top_left,rgba(0,255,255,0.08)_0%,transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(0,200,255,0.05)_0%,transparent_60%)]
            "
          />

          {children}
        </Providers>
      </body>
    </html>
  );
}
