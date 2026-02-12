"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Nav.module.scss";

const navLinks = ["Discover", "Creators", "Sell", "Stats"];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`${styles.wrapper} ${isOpen ? styles.open : ""} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.spacer} />
      <nav className={styles.nav}>
        <a href="#" className={styles.logo}>
          <Image src="/Logo.svg" alt="Logo" width={53} height={53} />
          <span className={styles.brandName}>DiveSea</span>
        </a>
        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} data-text={link}>
                {link}
              </a>
            </li>
          ))}
        </ul>
        <button
          className={`${styles.burger} ${isOpen ? styles.burgerOpen : ""}`}
          aria-label={isOpen ? "Close menu" : "Menu"}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span />
        </button>
      </nav>
      <div className={styles.mobileMenu}>
        <ul className={styles.mobileLinks}>
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
