"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { navigationLinks } from "@/lib/site";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header-shell">
      <div className="container">
        <div className="header-bar panel">
          <Link href="/" className="brand" onClick={() => setIsOpen(false)}>
            <div className="brand-logo">
              <Image src="/images/logo.JPG" alt="Logo Sonia Construction" fill sizes="56px" />
            </div>
            <div className="brand-copy">
              <strong>Sonia Construction</strong>
            </div>
          </Link>

          <nav className="desktop-nav" aria-label="Navigation principale">
            {navigationLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className="menu-toggle"
              onClick={() => setIsOpen((value) => !value)}
              aria-expanded={isOpen}
              aria-label="Ouvrir le menu"
            >
              <span className="menu-toggle-icon" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen ? (
            <motion.div
              className="mobile-shell panel"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <nav className="mobile-nav" aria-label="Menu mobile">
                {navigationLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
