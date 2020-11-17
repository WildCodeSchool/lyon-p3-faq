import Link from "next/link";
import styles from "../styles/Header.module.css";
import useModal from "./use";
import Modal from "./ButtonAsk";

export default function Header() {
    const { isShowing, toggle } = useModal();
  return (
    <header className={styles.header}>
        <span className={styles.headerWrapper}>
        <Link href="/"><h1> Les Freelances Lyonnais</h1></Link>
        <button onClick={toggle}>Poser une question</button>
        <Modal isShowing={isShowing} hide={toggle} />
        </span>
    </header>
  );
}
