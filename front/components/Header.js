import {useState} from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import useModal from "../utils/useModal";
import Modal from "./ButtonAsk";
import * as FaIcons from "react-icons/fa";
import {HeaderData} from "../components/HeaderData";

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
      <div className="navbar">
        {/* <Link as="" href="/" className="menubar">  */}
          <FaIcons.FaBars onClick={showSidebar} />
        {/* </Link> */}
      </div>
      <nav className={ sidebar ? "navmenu active": "styles.navmenu"  }>
        <ul className="navmenuitems" onClick={showSidebar}>
            <li className="navbar-toggle">
              {/* <Link as="" href="/" className="menubar"> */}
                <FaIcons.FaRegTimesCircle/>
              {/* </Link> */}
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
