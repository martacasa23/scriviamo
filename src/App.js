import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        {/* Aggiungi qui il contenuto principale della tua applicazione */}
        <h1>Benvenuto su Scriviamo!</h1>
        <p>Inizia a leggere o pubblicare storie.</p>
      </div>
    </div>
  );
}

export default App;
