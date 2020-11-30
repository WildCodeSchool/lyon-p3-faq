import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/Header.module.css";
import useModal from "../utils/useModal";
import Modal from "./ButtonAsk";

export default function Header(props) {
  const [APIWork, setAPIWork] = useState({});
  const { isShowing, toggle } = useModal();
  useEffect(() => {
    setAPIWork(props.errorHandler.error);
  }, []);
  return (
    <header className={styles.header}>
      <span className={styles.headerWrapper}>
        <h1>
          <Link href="/">Les Freelances Lyonnais</Link>
        </h1>
        <>
          {APIWork != true && props.displayButton === true ? (
            <button onClick={toggle}>Poser une question</button>
          ) : null}
        </>
        <Modal isShowing={isShowing} hide={toggle} />
      </span>
    </header>
  );
}
