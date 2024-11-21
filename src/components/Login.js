import React, { Component } from 'react'; 
import axios from 'axios';


class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMessage: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // Qui va la logica per inviare i dati al backend per l'autenticazione
    fetch('http://localhost:8000/api/auth/login/', {
      method: 'POST',
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'Login successful') {
        this.props.onLogin(true);
      } else {
        this.setState({ errorMessage: 'Credenziali errate' });
      }
    })
    .catch(err => {
      console.error('Errore:', err);
      this.setState({ errorMessage: 'Errore nella connessione al server' });
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mt-5">
              <div className="card-body">
                <h4 className="card-title text-center">Login</h4>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="username">Nome Utente</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Inserisci il tuo nome utente"
                      value={this.state.username}
                      onChange={(e) => this.setState({ username: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Inserisci la tua password"
                      value={this.state.password}
                      onChange={(e) => this.setState({ password: e.target.value })}
                      required
                    />
                  </div>
                  {this.state.errorMessage && (
                    <div className="alert alert-danger">{this.state.errorMessage}</div>
                  )}
                  <button type="submit" className="btn btn-primary btn-block">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;