import Link from "next/link";
import styles from "../styles/Header.module.css";


const Header = () => (
    <header className={styles.header}>
        <h1> Les Freelances Lyonnais</h1>
        <button>Poser une question</button>
    </header>
)

export default Header;