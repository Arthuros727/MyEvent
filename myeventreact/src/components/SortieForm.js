import React, { useState } from 'react';

function SortieForm() {
  const [formData, setFormData] = useState({
    uid: indexedDB.uid,
    // creator: '',
    participant: '',
    private: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyer les données au backend (Laravel) ici
    fetch('http://127.0.0.1:8000/addsortie', {
        method: 'POST', // Utiliser la méthode POST
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then(response => {
          if (response.ok) {
            console.log('Données ajoutées avec succès.');
          } else {
            console.error('Erreur lors de l\'ajout des données.');
          }
        })
        .catch(error => {
          console.error('Erreur réseau :', error);
        });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>UID:</label>
        <input
          type="text"
          name="uid"
          value={formData.uid}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Créateur:</label>
        <input
          type="text"
          name="creator"
          value={formData.creator}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Participant:</label>
        <input
          type="text"
          name="participant"
          value={formData.participant}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Privé:</label>
        <input
          type="text"
          name="private"
          value={formData.private}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default SortieForm;
