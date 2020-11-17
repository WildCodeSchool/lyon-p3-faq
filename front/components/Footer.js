import React from 'react';
import styles from '../styles/Footer.module.css';
import Link from "next/link";
export default function Footer() {
	return (
	<footer className={styles.footer}>
      <div>
        <ul>
          <Link href="/about-us"><li>A propos</li></Link>
          <Link href="/mentions"><li>Mentions légales</li></Link>
        </ul>
        <button>Poser une question</button>
      </div>
    </footer>
    );
}