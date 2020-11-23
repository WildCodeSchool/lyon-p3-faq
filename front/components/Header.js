import {useState} from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import useModal from "../utils/useModal";
import Modal from "./ButtonAsk";
import * as FaIcons from "react-icons/fa";

export default function Header() {
  
  const [sidebar, setSidebar] = useState(false);
  const { isShowing, toggle } = useModal();
  const showSidebar = () => setSidebar(!sidebar);
  
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <h1>
          <Link href="/">Les Freelances Lyonnais</Link>
        </h1>
        <button onClick={toggle}>Poser une question</button>
        <Modal isShowing={isShowing} hide={toggle} />
      </div>
      <div className={styles.navbar}>
        <Link as="" href="" className={styles.menubar}> 
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={ sidebar ? "navmenu active" : "navmenu"  }>
        <ul className={styles.navmenuitems}>
            <li className={styles.navbar-toggle}>
              <Link as="" href="" className={styles.menubar}>
                <FaIcons.FaRegTimesCircle/>
              </Link>
            </li>
        </ul>
      </nav>
    </header>
  );
}
