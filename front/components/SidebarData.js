import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
    {
        title : "Home",
        path : "/",
        icon : <AiIcons.AiFillHome />,
        cName : "nav-text"
    },

    {
        title : "About-us",
        path : "/about-us",
        icon : <FaIcons.FaInfo />,
        cName : "nav-text"
    },

    {
        title : "Mentions-legales",
        path : "/mentions",
        icon : <FaIcons.FaBalanceScale />,
        cName : "nav-text"
    },
]