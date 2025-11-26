// layout.tsx
import type { Metadata } from "next";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";

import Footer from "@/components/Footer";
import HeaderWrapper from "@/components/HeaderWrapper"; // Import the new HeaderWrapper

export const metadata: Metadata = {
  title: "NeuraModa",
  description: "NeuraModa — bold looks, neural-inspired palettes, and elevated basics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <HeaderWrapper /> {/* Use HeaderWrapper here */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
