import { X } from "lucide-react";

import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Navbar } from "./components/layout/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>My Website</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-[rgb(var(--md-accent),0.04)] text-white flex flex-col min-h-screen">
        <NextTopLoader
          zIndex={1000}
          easing="ease-in-out"
          speed={400}
          height={4}
          showSpinner={false}
          template={`<div class="bar bg-web-title" role="bar"><div class="peg"></div></div>`}
        />
        <Navbar />
        <main className="flex-grow w-full">{children}</main>
        <footer className="bg-gray-900 text-white p-4 text-center">
          <p>© 2025 My Website</p>
        </footer>
      </body>
    </html>
  );
}
