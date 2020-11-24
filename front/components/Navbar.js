import {useState} from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import * as FaIcons from "react-icons/fa";
import {HeaderData} from "../components/HeaderData";

export default function Header() {
  
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <h1>
          <Link href="/">Les Freelances Lyonnais</Link>
        </h1>
      </div>
      <div className={styles.navbar}>
        <Link as="" href="" className={styles.menubar}> 
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={ sidebar ? `${styles.navmenu}` : `${styles.navmenu}`}>
        <ul className={styles.navmenuitems} onClick={showSidebar}>
            <li className="styles.navbar-toggle">
              <Link as="" href="" className={styles.menubar}>
                <FaIcons.FaRegTimesCircle/>
              </Link>
            </li>

            {HeaderData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  
                  <Link as={item.path} href={item.path}>
                    <div>
                    {item.icon}
                    <span>{item.title}</span>
                    </div>
                  </Link>
                </li>
              );
            })}

        </ul>
      </nav>
    </header>
  );
}
