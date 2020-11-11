import Link from "next/link";
import header from "../styles/header.module.css";


const Header = () => (
    <header className={header.header}>
        <h1> Les Freelances Lyonnais</h1>
        <button>Poser une question</button>
    </header>
)

export default Header;