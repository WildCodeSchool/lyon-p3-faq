import * as FaIcons from "react-icons/fa";
import styles from "../styles/SearchBar.module.css";

export default function SearchBar({search, setSearch}) {

    function handleChange (event) {
        setSearch(event.target.value);
    }

    return (
        <>
        <div className={styles.searchbar}>
            <div className={styles.innersearchleft}>
            <FaIcons.FaSearch/>
            </div>
            <div className={styles.innersearchmid}>  
            <input 
            type="text" 
            placeholder="recherche" 
            className={styles.searchinput}
            value={search}
            onChange={handleChange}
            />
            </div>
            <div className={styles.innersearchright}>
              <FaIcons.FaTimes/>
            </div>
        </div>
        </>
    );
};

