import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="rootId" className="font-standard scroll-smooth">
          {children}
      </body>
    </html>
  );
}
