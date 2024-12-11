import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';

// Crea il client di Supabase
const supabaseUrl = 'https://kbepvpaowkcxmpuasmmm.supabase.co'; // Usa il tuo URL di Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtiZXB2cGFvd2tjeG1wdWFzbW1tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM4NDU1NTUsImV4cCI6MjA0OTQyMTU1NX0.3cLjj6V8ubKF0MBALH1_ECZ1qAbMLf5I-4VFoGvwgQE'; // Usa la tua chiave pubblica
const supabase = createClient(supabaseUrl, supabaseKey);

function StartNow() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isLogin, setIsLogin] = useState(true); 
  const navigate = useNavigate();// Stato per login o registrazione

  // Funzione per gestire il login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: username,  // username come email
        password: password,
      });

      if (error) {
        setError('Credenziali errate');
      } else {
        localStorage.setItem('user', JSON.stringify(data.user));  // Salva i dati dell'utente
        setSuccess(true);
        setError('');
        navigate('/submit-story');  // Reindirizza alla pagina di invio storia
      }
      
    } catch (err) {
      console.error(err); 
      setError('Errore durante il login');  // Gestione dell'errore
      setSuccess(false);
    }
  };

  // Funzione per gestire la registrazione
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { user, error } = await supabase.auth.signUp({
        email: username,  // username come email
        password: password,
      });

      if (error) {
        setError(error.message);
      } else {
        localStorage.setItem('user', JSON.stringify(user)); 
        setSuccess(true);
        setError('');
      }
    } catch (err) {
      console.error(err);
      setError('Errore durante la registrazione');
    }
  };

  return (
    <div>
      <h1>{isLogin ? 'Login' : 'Registrazione'}</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{isLogin ? 'Login riuscito!' : 'Registrazione riuscita! Conferma la tua mail'}</p>}

      <form onSubmit={isLogin ? handleLogin : handleRegister}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">{isLogin ? 'Accedi' : 'Registrati'}</button>
      </form>
      {/* Bottone per passare dalla registrazione al login e viceversa */}
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Non hai un account? Registrati' : 'Hai già un account? Accedi'}
      </button>
    </div>
  );
}

export default StartNow;
