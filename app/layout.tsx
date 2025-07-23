import type React from "react";
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
      <body className="bg-transparent text-white flex flex-col min-h-screen">
        <NextTopLoader
          zIndex={9999}
          easing="ease-in-out"
          speed={400}
          height={4}
          showSpinner={false}
          template={`<div class="bar bg-web-title" role="bar"><div class="peg"></div></div>`}
        />

        <header className="relative z-50 w-full">
          <Navbar />
        </header>

        <main className="flex-grow w-full relative z-10">{children}</main>

        {/* <footer className="bg-gray-900 text-white p-4 text-center relative z-20">
          <p>© 2025 My Website</p>
        </footer> */}
      </body>
    </html>
  );
}
