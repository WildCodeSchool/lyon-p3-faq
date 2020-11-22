
function Sidebar () {
    return (
        <>
            <div className="navbar">
                <Link to='#' className="menu-bar">
                    <img 
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
                            
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );  
}

export default Sidebar;