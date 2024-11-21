import Navbar from "./components/navbar";
import React, { Component } from 'react';
import Card from "./components/card";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login'; // Importa il componente Login
import Register from './components/Register'; // Importa il componente Register
 
import logo from './images/logo.png.png';
import book from './images/book.png';

class App extends Component {
  state = {
    cards: [
      { id: 0, autore: "Marta Casadei", titolo: 'La Biblioteca Di Fiori', immagine: book },
      { id: 1, autore: "Laura Rossi", titolo: 'Manuale di scrittura', immagine: logo },
    ],
    isLoggedIn: false,  // Stato per sapere se l'utente è loggato
    showRegister: false, // Stato per mostrare il form di registrazione
  }

  // Funzione per gestire l'autenticazione dopo il login
  handleLogin = (loginSuccess) => {
    if (loginSuccess) {
      this.setState({ isLoggedIn: true });
    }
  }

  // Funzione per mostrare il form di registrazione
  handleRegisterClick = () => {
    this.setState({ showRegister: true });
  }

  render() {
    return (
      <>
        <Navbar/>
        <div className='container'>
          <h1>Benvenuto su Scriviamo!</h1>
          <hr/>

          {/* Mostra il login o il form di registrazione */}
          {!this.state.isLoggedIn && !this.state.showRegister && (
            <>
              <h2>Login</h2>
              <Login onLogin={this.handleLogin} /> {/* Passa la funzione di login */}
              <button onClick={this.handleRegisterClick}>Registrati</button>
            </>
          )}

          {/* Se l'utente vuole registrarsi, mostra il form di registrazione */}
          {this.state.showRegister && (
            <>
              <h2>Registrazione</h2>
              <Register />
            </>
          )}

          {/* Se l'utente è loggato, mostra le card */}
          {this.state.isLoggedIn && (
            <>
              <h2>Pronto per la tua prossima storia?</h2>
              <div className="row">
                {this.state.cards.map(card => (
                  <Card key={card.id} card={card} />
                ))}
              </div>
            </>
          )}
        </div>
      </>
    );
  }
}

export default App;
