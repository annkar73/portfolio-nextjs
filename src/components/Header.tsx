"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/navLinks";
import { useTranslations } from "next-intl";
import ToggleSwitch from "./ToggleSwitch"; // rätt path

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("header");

  return (
    <header
      style={{
        backgroundColor: "var(--color-foreground)",
        color: "var(--color-background)",
      }}
      className="w-full px-6 py-4 flex justify-between items-center relative"
    >
      <h1 className="font-bold text-xl">
        <Link href="/" style={{ color: "var(--color-accent)" }}>
          {t("title")}
        </Link>
      </h1>

      {/* Desktop: Container för nav + toggle, längst till höger */}
      <div className="hidden md:flex items-center space-x-4">
        <nav className="flex space-x-6 text-right font-semibold">
          {navLinks.map(({ href, labelKey }) => (
            <Link
              key={href}
              href={href}
              className="text-[var(--color-accent)] hover:underline hover:text-[var(--color-secondary-accent)]"
            >
              {t(labelKey)}
            </Link>
          ))}
        </nav>
        <ToggleSwitch />
      </div>

      {/* Mobil: Toggle före hamburger */}
      <div className="flex md:hidden items-center space-x-4">
        <ToggleSwitch />
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="p-2"
          style={{ color: "var(--color-accent)" }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <nav
          className="absolute top-full left-0 right-0 text-right flex flex-col p-4 pr-10 space-y-4 md:hidden z-50 shadow-md"
          style={{ backgroundColor: "var(--color-foreground)" }}
        >
          {navLinks.map(({ href, labelKey }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="hover:underline"
              style={{ color: "var(--color-accent)" }}
            >
              {t(labelKey)}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
