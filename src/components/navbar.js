import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Scriviamo</a>
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
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              Leggi
            </a>
            <a className="nav-link" href="#">
              Pubblica
            </a>
            <a className="nav-link disabled" aria-disabled="true">
              Contatti
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
