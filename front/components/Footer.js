import React from 'react';
import styles from '../styles/Footer.module.css';

export default function Footer() {
	return (
	<footer className={styles.footer}>
      <div className={styles.wrapper}>
        <ul>
          <li>A propos</li>
          <li>Mentions légales</li>
        </ul>
        <button>Poser une question</button>
      </div>
    </footer>
    );
}