import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('https://scriviamo.org/api/auth/login/', {
        username: username,
        password: password,
      });
      setLoading(false);
      setMessage(response.data.message); // Mostra il messaggio di successo
      if (response.data.message === "Login successful") {
        onLogin(true); // Notifica l'App che l'utente ha effettuato il login
      }
    } catch (error) {
      setLoading(false);
      setMessage('Login failed. Please check your credentials.');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
      <p>{message}</p>
    </form>
  );
};

export default Login;
