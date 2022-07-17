import { Link } from "react-router-dom";

function Error404() {
  return (
    <section className="notfound">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className="notfound-link" to="/">
        Retourner sur la page d’accueil
      </Link>
    </section>
  );
}

export default Error404;
