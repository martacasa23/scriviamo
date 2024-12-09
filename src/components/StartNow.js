import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function StartNow() {
  // Stato per i dati del form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    content: '',
  });

  // Gestione modifiche nei campi di input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Gestione invio del form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Invia l'email utilizzando EmailJS
    try {
      const result = await emailjs.sendForm(
        'service_4d42mvs', // Servizio email configurato su EmailJS
      
      );

      console.log(result.text);
      alert('La tua storia è in fase di revisione! Ti avviseremo a breve.');

      // Reset del form dopo invio
      setFormData({
        name: '',
        email: '',
        title: '',
        content: '',
      });
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
          <button type="submit" className="btn btn-outline-dark">Invia la tua storia</button>
        </div>
      </form>
    </div>
  );
}

export default StartNow;
