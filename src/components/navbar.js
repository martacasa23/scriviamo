import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import 'bootstrap/dist/css/bootstrap.min.css';



function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
      <Link className="navbar-brand" to="/">Scriviamo</Link>
      <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/published-stories">
              Leggi
            </Link>
            <Link className="nav-link" to="/start-now">
              Pubblica
            </Link>
            <Link className="nav-link"  to="/learn-more">
              Contatti
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
