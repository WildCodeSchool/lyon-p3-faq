import * as FaIcons from "react-icons/fa";
import styles from "../styles/SearchBar.module.css";
import {useState, useEffect} from "react";


export default function SearchBar() {

    const [search, setSearch] = useState("");
    
    return (
        <div className={styles.searchbar}>
            <div className={styles.innersearchleft}>
            <FaIcons.FaSearch/>
            </div>
            <div className={styles.innersearchmid}>  
            <input 
            type="text" 
            placeholder="recherche" 
            className={styles.searchinput}
            />
            </div>
            <div className={styles.innersearchright}>
              <FaIcons.FaTimes/>
            </div>
        </div>

    );
};

