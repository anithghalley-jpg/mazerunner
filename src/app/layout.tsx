import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maze Runner - Autonomous Robotics Simulator",
  description:
    "An educational robotics simulator for autonomous maze solving using Python, Pyodide WebAssembly, and HTML5 Canvas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script
          src="https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className="antialiased bg-[#090d16] text-slate-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
