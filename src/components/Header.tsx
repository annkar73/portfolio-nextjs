"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      style={{ backgroundColor: "var(--color-foreground)", color: "var(--color-background)" }}
      className="w-full px-6 py-4 flex justify-between items-center relative"
    >
      <h1 className="font-bold text-xl">
        <Link href="/" style={{ color: "var(--color-accent)" }}>
          Anna Karlsen - Portfolio
        </Link>
      </h1>

      {/* Desktop nav */}
      <nav className="hidden md:flex space-x-6 text-right">
        <Link href="/" className="hover:underline" style={{ color: "var(--color-accent)" }}>
          Hem
        </Link>
        <Link href="/om" className="hover:underline" style={{ color: "var(--color-accent)" }}>
          Om
        </Link>
        <Link href="/kontakt" className="hover:underline" style={{ color: "var(--color-accent)" }}>
          Kontakt
        </Link>
      </nav>

      {/* Hamburger button mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        className="md:hidden p-2"
        style={{ color: "var(--color-accent)" }}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <nav
          style={{ backgroundColor: "var(--color-foreground)" }}
          className="absolute top-full left-0 right-0 text-right flex flex-col p-4 pr-10 space-y-4 md:hidden z-50 shadow-md"
        >
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="hover:underline"
            style={{ color: "var(--color-accent)" }}
          >
            Hem
          </Link>
          <Link
            href="/om"
            onClick={() => setIsOpen(false)}
            className="hover:underline"
            style={{ color: "var(--color-accent)" }}
          >
            Om
          </Link>
          <Link
            href="/kontakt"
            onClick={() => setIsOpen(false)}
            className="hover:underline"
            style={{ color: "var(--color-accent)" }}
          >
            Kontakt
          </Link>
        </nav>
      )}
    </header>
  );
}
