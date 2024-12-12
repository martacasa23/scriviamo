import React, { useState } from 'react';

function SubmitStory() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [plot, setPlot] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('plot', plot);
    formData.append('file', file);

    try {
      const response = await fetch('https://scriviamo.org/upload-story', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      if (result.success) {
        alert('Storia inviata con successo!');
      } else {
        alert('Errore nell\'invio della storia.');
      }
    } catch (err) {
      console.error(err);
      alert('Errore nell\'invio della storia.');
    }
  };

  return (
    <div>
      <h2>Invia la tua storia</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Titolo" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Autore" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        <textarea placeholder="Trama" value={plot} onChange={(e) => setPlot(e.target.value)} required />
        <input type="file" onChange={(e) => setFile(e.target.files[0])} required />
        <button type="submit">Invia Storia</button>
      </form>
    </div>
  );
}

export default SubmitStory;
