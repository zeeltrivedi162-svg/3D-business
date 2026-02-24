"use client";

import Link from "next/link";
import { useState } from "react";
import Gallery from "../Gallery/page";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <Link href="/">3D Studio</Link>
      </div>

      {/* Desktop Menu */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/service">service</Link>
        <Link href="/Gallery">Gallery</Link>
        <Link href="/contact">contact</Link>
      </nav>

      {/* Mobile Button */}
      <div
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>
    </header>
  );
}