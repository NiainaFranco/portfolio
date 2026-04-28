"use client"

import "./globals.css";
import Providers from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="rootId" className="scroll-smooth">
        {children}
      </body>
    </html>
  );
}
