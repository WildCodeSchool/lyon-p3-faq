import Link from "next/link";
import styles from "../styles/Sidebar.module.css"

export default function Sidebar () {
    return (
        <nav className={styles.sidebar}>
            <ul>
                <li><Link as="about-us" href="/about-us"><a>A propos</a></Link></li>
                <li><Link as="mention" href="/mentions"><a>Mentions légales</a></Link></li>
            </ul>
        </nav>
    );
}