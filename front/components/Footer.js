import React from "react";
import styles from "../styles/Footer.module.css";
import Link from "next/link";
import useModal from "../utils/useModal";
import Modal from "./ButtonAsk";
export default function Footer() {
  const { isShowing, toggle } = useModal();
  return (
    <footer className={styles.footer}>
      <div>
        <ul>
          <Link href="/about-us">
            <li>A propos</li>
          </Link>
          <Link href="/mentions">
            <li>Mentions légales</li>
          </Link>
        </ul>
        <button onClick={toggle}>Poser une question</button>
        <Modal isShowing={isShowing} hide={toggle} />
      </div>
    </footer>
  );
}
