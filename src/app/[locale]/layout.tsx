import "./globals.css";
import Providers from "./providers";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="rootId" className="font-standard scroll-smooth">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
