import Image from "next/image";
import styles from "./Nav.module.scss";

const navLinks = ["Discover", "Creators", "Sell", "Stats"];

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Image src="/Logo.svg" alt="Logo" width={55} height={55} />
      <ul className={styles.links}>
        {navLinks.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} data-text={link}>{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
