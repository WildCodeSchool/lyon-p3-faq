import Link from "next/link";
import styles from "../styles/Header.module.css";


const Header = () => (
    <header className={styles.header}>
        <Link href="/"><h1> Les Freelances Lyonnais</h1></Link>
        <button>Poser une question</button>
    </header>
)

export default Header;