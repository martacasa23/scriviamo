import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Importa EmailJS

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
    console.log("File selezionato:", selectedFile);
  };

  // Gestione invio del form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formPayload = new FormData();
    formPayload.append('name', formData.name);
    formPayload.append('email', formData.email);
    formPayload.append('title', formData.title);
    formPayload.append('content', formData.content);

    // Aggiungi il file se presente
    if (file) {
      formPayload.append('file', file);
    }

    try {
      // Usa emailjs.send con il payload serializzato
      await emailjs.send(
        'service_4d42mvs', // ID del tuo servizio EmailJS
        'template_xwrce7n', // ID del template EmailJS
        {
          name: formData.name,
          email: formData.email,
          title: formData.title,
          content: formData.content,
          file: file ? file.name : '', // Nome del file (se presente)
        },
        'WeY24eWJBOcmUfy4y' // Chiave pubblica EmailJS
      );

      alert('La tua storia è stata inviata con successo!');
    } catch (error) {
      console.error('Errore durante l\'invio:', error);
      alert('Si è verificato un errore durante l\'invio della storia.');
    }
  };

  return (
    <div className="container-fluid text-center mt-5">
      <h1>Inviaci la tua storia!</h1>
      <p>Pubblica le tue storie e condividi la tua creatività con la community.</p>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
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
