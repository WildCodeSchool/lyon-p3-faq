import {useState} from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css"
import * as FaIcons from "react-icons/fa";
import {HeaderData} from "../components/HeaderData";


export default function Navbar() {
  
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  
  return (
    <header>
      <div className={styles.navbar}>
          <FaIcons.FaBars onClick={showSidebar} />
      </div>

      <nav className={sidebar ? styles["navmenuactive"] : styles["navmenu"] }>

        <ul className={styles["navmenuitems"]} onClick={showSidebar}>

            <li className={styles["navbartoggle"]}>
                <FaIcons.FaRegTimesCircle/>
            </li>

            {HeaderData.map((item, index) => {
              return (
                <li key={index} className={styles["navtextA"]}>
                  
                  <Link as={item.path} href={item.path}>
                    <div>
                    {item.icon}
                    <span className={styles["myspan"]}>{item.title}</span>
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
