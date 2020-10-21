import React from "react";
import '../styles/style.css';
import Ask from './Ask';
function Header(){
    return(
        <header>
        <div className="wrapper">
          <h1>
            <a href="#" title="Mon site">
              <span>Les Freelances Lyonnais</span>
            </a>
          </h1>
          <button>Poser une question</button>
          <nav>
            <ul>
              <li><strong>Menu</strong></li>
              <li><a href="#" title="Accueil">Accueil</a></li>
              <li><a href="#" title="A propos">A propos</a></li>
              <li><a href="#" title="Menu">Mentions légales</a></li>
            </ul>
          </nav>
          <div id="hamburger"><span></span> <span></span> <span></span></div>
        </div>
      </header>
    );
}

export default Header;