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
      localStorage.setItem("isLoggedIn", "true");  // Salva nello storage locale
    }
  }

  // Funzione per gestire il logout
  handleLogout = () => {
    this.setState({ isLoggedIn: false });
    localStorage.removeItem("isLoggedIn");  // Rimuovi dallo storage locale
  }

  componentDidMount() {
    // Verifica se l'utente è già loggato al caricamento
    if (localStorage.getItem("isLoggedIn")) {
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
              <button onClick={this.handleLogout}>Logout</button> {/* Aggiungi un bottone di logout */}
            </>
          )}
        </div>
      </>
    );
  }
}

export default App;
