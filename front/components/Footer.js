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
          <li>
            <Link href="/about-us">A propos</Link>
          </li>
          <li>
            <Link href="/mentions">Mentions légales</Link>
          </li>
        </ul>
        <button onClick={toggle}>Poser une question</button>
        <Modal isShowing={isShowing} hide={toggle} />
      </div>
    </footer>
  );
}
