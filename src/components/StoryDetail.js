import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';  // Per ottenere i parametri dell'URL

function StoryDetail() {
  const { id } = useParams();  // Ottieni l'ID della storia dall'URL
  const [story, setStory] = useState(null);

  useEffect(() => {
    const fetchStoryDetail = async () => {
      try {
        const response = await fetch(`http://145.223.80.233/api/stories/${id}/`);
        if (response.ok) {
          const data = await response.json();
          setStory(data);  // Salva la storia nel componente
        } else {
          console.error('Errore nel recupero dei dettagli della storia.');
        }
      } catch (error) {
        console.error('Errore:', error);
      }
    };

    fetchStoryDetail();
  }, [id]);

  return (
    <div className="container mt-5">
      {story ? (
        <>
          <h1>{story.title}</h1>
          <h4>Autore: {story.name}</h4>
          <p>{story.content}</p>
        </>
      ) : (
        <p>Caricamento...</p>
      )}
    </div>
  );
}

export default StoryDetail;
