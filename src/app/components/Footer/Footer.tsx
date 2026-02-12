import Image from "next/image";
import styles from "./Footer.module.scss";

const footerLinks = ["Privacy Policy", "Term & Conditions", "About Us", "Contact"];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <a href="#" className={styles.brand}>
          <Image src="/Logo.svg" alt="Logo" width={65} height={65} className={styles.logo} />
          <span className={styles.brandName}>DiveSea</span>
        </a>
        <ul className={styles.links}>
          {footerLinks.map((link) => (
            <li key={link}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </div>
      <hr className={styles.divider} />
      <div className={styles.bottom}>
        <span className={styles.copyright}>
          &copy; 2023
          <span className={styles.copyrightExtra}> DiveSea All Rights Reserved.</span>
        </span>
      </div>
    </footer>
  );
}
