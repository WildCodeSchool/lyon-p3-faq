import React from "react";
import styles from "../styles/Foot.module.css";
import Link from "next/link";





export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <ul>
          <li>
            <Link href="/about-us">A propos</Link>
          </li>
          <li>
            <Link href="/mentions">Mentions légales</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
