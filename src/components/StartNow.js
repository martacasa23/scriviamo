import React, { useState } from 'react';

function StartNow() {
  // Stato per i dati del form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    content: '',
  });

  // Stato per il file selezionato
  const [file, setFile] = useState(null);

  // Stato per la gestione degli errori
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Gestione modifiche nei campi di input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Gestione selezione file
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  // Gestione invio del form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crea un oggetto FormData per inviare i dati del modulo
    const form = e.target;
    const formDataToSend = new FormData(form);

    if (file) {
      formDataToSend.append('file', file);
    }

    try {
      // Invia i dati a Formspree
      const response = await fetch('https://formspree.io/f/mvgonaep', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setSuccess(true);
        alert('La tua storia è stata inviata con successo!');
        // Pulisce il form dopo l'invio
        setFormData({
          name: '',
          email: '',
          title: '',
          content: '',
        });
        setFile(null);
      } else {
        setError('Si è verificato un errore durante l\'invio.');
      }
    } catch (error) {
      setError('Si è verificato un errore durante l\'invio.');
    }
  };

  return (
    <div className="container-fluid text-center mt-5">
      <h1>Inviaci la tua storia!</h1>
      <p>Pubblica le tue storie e condividi la tua creatività con la community.</p>

      {/* Se c'è un errore, lo mostriamo */}
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Se la submission ha avuto successo, mostriamo un messaggio di successo */}
      {success && <div className="alert alert-success">La tua storia è stata inviata con successo!</div>}

      <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
        <div>
          <input
            type="text"
            placeholder="Nome"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Titolo della storia"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <textarea
            placeholder="Raccontaci la trama"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            rows="4"
            required
          />
        </div>
        <div>
          <input
            type="file"
            onChange={handleFileChange}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-outline-dark">
            Invia la tua storia
          </button>
        </div>
      </form>
    </div>
  );
}

export default StartNow;
