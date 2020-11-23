import Link from "next/link";
import styles from "../styles/Header.module.css";
import useModal from "../lib/useModal";
import Modal from "./ButtonAsk";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { useState } from "react";
import {SidebarData} from "./SidebarData";



export default function Header() {

    const { isShowing, toggle } = useModal();
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

  return (
    <header className={styles.header}>
        <span className={styles.headerWrapper}>
        <Link href="/"><h1> Les Freelances Lyonnais</h1></Link>
        <img 
              className={styles.menuHam}
              src="/square_ham_menu_white.png"
              height="42"
              width="42"
              alt="Hamburger_menu_white"
            />
        <button onClick={toggle}>Poser une question</button>
        <Modal isShowing={isShowing} hide={toggle} />
        
        </span>
        <span className={styles.navbar}>
          <Link as="Home" href="/" className={styles.menu_bar}>
            <FaIcons.FaBars onClick={showSidebar}/>
          </Link>
        </span>
        <nav className={sidebar ? `{styles.nav-menu active}` : `{styles.nav-menu}`}>
            <ul className={styles.nav_menu_items}>
              <li className={styles.navbar-toggle}>
                  <Link as="Home" href="/"  className={styles.menu_bar}>
                    <AiIcons.AiOutlineCloseCircle />
                  </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link as={item.title} href={item.path}>
                      {item.icon}
                      <span className={styles.spantext}>{item.title}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
        </nav>
    </header>
  );
}
