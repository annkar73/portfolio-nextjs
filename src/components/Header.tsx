"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import navLinks from "@/lib/navLinks";
import { useTranslations, useLocale } from "next-intl";
import ToggleSwitch from "./ToggleSwitch"; // rätt path
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("header");
  const locale = useLocale();

  return (
    <header
      style={{
        backgroundColor: "var(--color-foreground)",
        color: "var(--color-accent)",
      }}
      className="w-full px-6 py-4 flex justify-between items-center relative print:hidden"
    >
      <div className="flex items-center space-x-4">
        <Link href={`/${locale}`}>
          <Image
            src="/images/ak_logo_2.webp"
            alt="AK Logo"
            width="55"
            height="55"
            className="ml-2 md:ml-4 lg:ml-8"
          />
        </Link>
        <h1 className="font-bold text-2xl hidden lg:inline">{t(`title`)}</h1>
      </div>
      {/* Desktop: Container för nav + toggle, längst till höger */}
      <div className="hidden md:flex items-center space-x-4">
        <nav className="flex space-x-6 text-right font-semibold">
          {navLinks.map(({ href, labelKey }) => (
            <Link
              key={href}
              href={`/${locale}${href}`}
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
              href={`/${locale}${href}`}
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
