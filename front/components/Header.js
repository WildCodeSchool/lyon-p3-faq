import Link from "next/link";
import styles from "../styles/Header.module.css";
import useModal from "../utils/useModal";
import Modal from "./ButtonAsk";

export default function Header() {
  const { isShowing, toggle } = useModal();
  return (
    <header className={styles.header}>
      <span className={styles.headerWrapper}>
        <h1>
          <Link href="/">Les Freelances Lyonnais</Link>
        </h1>
        <button onClick={toggle}>Poser une question</button>
        <Modal isShowing={isShowing} hide={toggle} />
      </span>
    </header>
  );
}
