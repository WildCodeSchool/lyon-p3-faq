import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/Header.module.css";
import useModal from "../utils/useModal";
import Modal from "./ButtonAsk";
import * as FaIcons from "react-icons/fa";
import {HeaderData} from "./HeaderData";

export default function Header(props) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar)
  const [APIWork, setAPIWork] = useState({});
  const { isShowing, toggle } = useModal();
  useEffect(() => {
    setAPIWork(props.errorHandler.error);
  }, []);
  return (

    <header>
      <div className={styles.navbar}>

        <div className={styles.navcontainer}>
          <div className={styles.leftwrapnav}>
            <h1 className={styles.bigtittle}>
              <Link href="/">Les Freelances Lyonnais</Link>
            </h1>
          </div>
          <div className={styles.rightwrapnav}>
          <>
            {!APIWork && props.displayButton ? (
              <button onClick={toggle} className={styles.navbutton}>Poser une question</button>
            ) : null}
          </>
            <Modal isShowing={isShowing} hide={toggle} />
            <FaIcons.FaBars onClick={showSidebar} className={styles.iconpointer}/>
          </div>
        </div>

      </div>

      <nav className={sidebar ? styles["navmenuactive"] : styles["navmenu"] }>

        <ul className={styles["navmenuitems"]} onClick={showSidebar}>

            <li className={styles["navbartoggle"]}>
                <FaIcons.FaRegTimesCircle className={styles.iconpointer}/>
            </li>

            {HeaderData.map((item, index) => {
              return (
                <li key={index} className={'noselect ' + styles["navtextA"]}>

                  <Link as={item.path} href={item.path} className={styles.iconpointer}>
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
