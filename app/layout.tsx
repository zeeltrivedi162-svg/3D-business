import type { Metadata } from "next";
import "./globals.css"; // ✅ Important

import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "3D Studio",
  description: "Modern 3D Website built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="layout-body">
        <Header />
        <main className="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}