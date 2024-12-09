const [isSubmitting, setIsSubmitting] = useState(false); // Stato per sapere se la richiesta è in corso

const handleSubmit = async (e) => {
  e.preventDefault();

  setIsSubmitting(true); // Inizia l'invio

  const formPayload = new FormData();
  formPayload.append('name', formData.name);
  formPayload.append('email', formData.email);
  formPayload.append('title', formData.title);
  formPayload.append('content', formData.content);
  if (file) {
    formPayload.append('file', file);
  }

  try {
    const response = await fetch('https://145.223.80.233/api/stories/', {
      method: 'POST',
      body: formPayload,
    });

    const data = await response.json();

    if (response.ok) {
      alert('Storia inviata con successo!');
      setFormData({
        name: '',
        email: '',
        title: '',
        content: '',
      });
      setFile(null);
    } else {
      alert(`Errore: ${response.status} - ${data.detail || 'Errore generico'}`);
    }
  } catch (error) {
    console.error('Errore nella richiesta:', error);
    alert(`Si è verificato un errore nel tentativo di inviare la storia. Dettagli: ${error.message}`);
  } finally {
    setIsSubmitting(false); // Rimuovi l'indicatore di invio
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
        <button type="submit" className="btn btn-outline-dark" disabled={isSubmitting}>
          {isSubmitting ? 'Inviando...' : 'Invia la tua storia'}
        </button>
      </div>
    </form>
  </div>
);
