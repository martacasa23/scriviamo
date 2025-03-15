import React from 'react';
import emailjs from 'emailjs-com';  // Importa emailjs

function PublishedStories() {
  // Esempio di storie statiche
  const stories = [
    {
      id: 1,
      title: 'La Storia del Vento',
      name: 'Giovanni Rossi',
      content: 'Questa è una breve descrizione della trama della storia...'
    },
    {
      id: 2,
      title: 'Il Viaggio Magico',
      name: 'Anna Bianchi',
      content: 'Un racconto che parla di un viaggio incredibile attraverso terre lontane...'
    }
  ];

  // Funzione per inviare la storia via email
  const handleSendStory = async (story) => {
    try {
      // Invio dell'email con i dettagli della storia
      const result = await emailjs.send(
        'service_4d42mvs', // Servizio email configurato su EmailJS
        'template_xwrce7n', // Modello di email configurato su EmailJS
        {
          name: story.name,
          title: story.title,
          content: story.content,
        },
        'WeY24eWJBOcmUfy4y' // Il tuo ID utente EmailJS
      );

      console.log(result.text);
      alert('La tua storia è stata inviata per la revisione!');

    } catch (error) {
      console.error('Errore nell\'invio dell\'email:', error);
      alert('Si è verificato un errore nel tentativo di inviare la storia.');
    }
  };

  return (
    <div className="story-container bg-warning-subtle">
      <h1 className="text-center">Storie Pubblicate</h1>
      <div className="row justify-content-center">
        {stories.length > 0 ? (
          stories.map((story) => (
            <div className="col-md-6 col-lg-4 mb-4 d-flex justify-content-center" key={story.id}>
              <div className="card border-dark text-center" style={{ width: '18rem' }}>
                <div className="card-body">
                  <h5 className="card-title">{story.title}</h5>
                  <p className="card-text">Autore: {story.name}</p>
                  <p className="card-text">{story.content.substring(0, 100)}...</p>
                  <button 
                    className="btn btn-outline-dark" 
                    onClick={() => handleSendStory(story)}
                  >
                    Invia per revisione
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Non ci sono storie pubblicate al momento.</p>
        )}
      </div>
    </div>
  );
}

export default PublishedStories;
