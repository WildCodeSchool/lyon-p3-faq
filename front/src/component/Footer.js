import React from 'react';
import '../styles/style.css';

function Footer() {
    return(
        <footer>
      <div className="wrapper">
        <nav>
        <ul>
          <li>A propos</li>
          <li>Mentions légales</li>
        </ul>
      </nav>
        <button>Poser une question</button>
      </div>
    </footer>
    );
}
export default Footer;