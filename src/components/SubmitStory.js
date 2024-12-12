import React, { useState } from 'react';
import axios from 'axios';

const SubmitStory = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [story, setStory] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !story) {
      alert('Compila tutti i campi');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('/.netlify/functions/submit-story', {
        name,
        email,
        story,
      });

      alert(response.data.message); // Messaggio di successo dalla funzione
    } catch (error) {
      console.error(error);
      setError('Si è verificato un errore durante l\'invio della storia.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        placeholder="Scrivi la tua storia"
        value={story}
        onChange={(e) => setStory(e.target.value)}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Caricamento...' : 'Invia'}
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default SubmitStory;
