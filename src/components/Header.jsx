import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="wrapper">
        <nav>
          <div className="logo">
            <img src="/img/kasa.png" alt="Kasa Logo" width="210" height="70" />
          </div>
          <Link to="/">Accueil</Link>
          <Link to="/a-propos">À propos</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
