import "./header.css";
import { Link } from "react-router-dom";
import SportSeeLogo from "../../assets/SportSeeLogo.png";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={SportSeeLogo} alt="SportSee" width={178} height={60} />
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/profil">Profil</Link>
          </li>
          <li>
            <Link to="/reglage">Réglage</Link>
          </li>
          <li>
            <Link to="/communaute">Communauté</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
