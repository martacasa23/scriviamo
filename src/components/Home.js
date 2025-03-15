import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; // Importa Link
import 'animate.css'; // Per animazioni
import './Home.css';  // Importa il file CSS personalizzato

function Home() {
  return (
    <div className="home-container">
      <div className="container text-center">
        <h1 className="display-4 mb-4 animate__animated animate__fadeIn">
          Benvenuto su Scriviamo!
        </h1>
        <p className="lead mb-4 animate__animated animate__fadeIn animate__delay-1s">
          Se sei un appassionato di scrittura o lettura, questo è il posto giusto per te.
          Pubblica le tue storie, leggi quelle degli altri, e unisciti a una community di scrittori.
        </p>
        <p className="mb-5 animate__animated animate__fadeIn animate__delay-2s">
          Racconta la tua storia. Diventa parte di qualcosa di speciale.
        </p>

        {/* Pulsanti di azione */}
        <div className="d-grid gap-2 col-6 mx-auto">
          <Link to="/start-now" className="btn btn-light btn-lg animate__animated animate__fadeIn animate__delay-3s">
            Inizia ora
          </Link>
          <Link to="/learn-more" className="btn btn-outline-light btn-lg mt-3 animate__animated animate__fadeIn animate__delay-4s">
            Scopri di più
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;