import React, { useState, useEffect } from "react";
import styles from "../styles/Footer.module.css";
import Link from "next/link";
import useModal from "../utils/useModal";
import Modal from "./ButtonAsk";

export default function Footer(props) {
  const [APIWork, setAPIWork] = useState({});
  const { isShowing, toggle } = useModal();
  useEffect(() => {
    setAPIWork(props.errorHandler.error);
  }, []);
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
        <>
          {!APIWork && props.displayButton ? (
            <button onClick={toggle}>Poser une question</button>
          ) : null}
        </>
        <Modal isShowing={isShowing} hide={toggle} />
      </div>
    </footer>
  );
}
