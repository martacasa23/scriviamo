import React, { useState } from 'react';
import emailjs from 'emailjs-com';  // Importa emailjs

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
  };

  // Gestione invio del form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crea un oggetto FormData per inviare i dati in modo corretto
    const formPayload = new FormData();
    formPayload.append('name', formData.name);
    formPayload.append('email', formData.email);
    formPayload.append('title', formData.title);
    formPayload.append('content', formData.content);
    if (file) {
      formPayload.append('file', file);
    }

    // Invio della richiesta email via emailjs
    try {
      const result = await emailjs.sendForm(
        'service_4d42mvs',  // Servizio email configurato su EmailJS
        'template_xwrce7n',  // Modello di email configurato su EmailJS
        e.target,            // Passa l'elemento form al terzo parametro
        'WeY24eWJBOcmUfy4y'       // Il tuo ID utente EmailJS
      );

      console.log(result.text);
      alert('La tua storia è stata inviata per la revisione!');

    } catch (error) {
      console.error('Errore nell\'invio dell\'email:', error);
      alert('Si è verificato un errore nel tentativo di inviare la storia.');
    }
  };

  return (
    <div className="container-fluid text-center mt-5">
      <h1>Inviaci la tua storia!</h1>
      <p>Pubblica le tue storie e condividi la tua creatività con la community.</p>
      <form onSubmit={handleSubmit}>
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
          <button type="submit" className="btn btn-outline-dark">Invia la tua storia</button>
        </div>
      </form>
    </div>
  );
}

export default StartNow;
