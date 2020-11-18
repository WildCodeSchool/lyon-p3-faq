import Link from "next/link";
import styles from "../styles/Header.module.css";
import useModal from "../lib/useModal";
import Modal from "./ButtonAsk";

export default function Header() {
    const { isShowing, toggle } = useModal();
  return (
    <header className={styles.header}>
        <span className={styles.headerWrapper}>
        <Link href="/"><h1> Les Freelances Lyonnais</h1></Link>
        <button onClick={toggle}>Poser une question</button>
        <Modal isShowing={isShowing} hide={toggle} />
        <span>
        <img className={styles.menuHam}
              src="/sqaure_ham_menu_white.png"
              height="25px"
              width="25x"
              alt="Hamburger_menu_white"
            />
        </span>
        </span>
    </header>
  );
}
