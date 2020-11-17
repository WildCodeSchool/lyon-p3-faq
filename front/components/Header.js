import Link from "next/link";
import styles from "../styles/Header.module.css";

const Header = () => (
    <header className={styles.header}>
        <span className={styles.headerWrapper}>
        <Link href="/"><h1> Les Freelances Lyonnais</h1></Link>
        <button>Poser une question</button>
        </span>
    </header>
)

export default Header;