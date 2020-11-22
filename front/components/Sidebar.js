import React, {useState} from "react";
import Link from "next/link";

function Sidebar () {

    const[sidebar, setSidebar] = useState(false);
    const ShowSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <div className="navbar">
                <Link to='#' className="menu-bar">
                    <img onClick={ShowSidebar}
                        src="/menu.png"
                        className="menu-icons"
                        alt="menu icon"
                        />
                </Link>

            </div>
            <nav className= { sidebar ? "nav-menu active": "nav-menu" }>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                        <Link to ="#" className="menu-bar">
                            <img
                                src="/close.png"
                                className="menu-icons"
                                alt="close icon"
                            />
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );  
}

export default Sidebar;