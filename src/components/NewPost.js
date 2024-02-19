import axios from 'axios';
import React, { useState } from 'react'

function NewPost() {
    const [titre, setTitre] = useState('');
    const [auteur, setAuteur] = useState('');
    const [file, setFile] = useState(null);

    const handleTitreChange = (event) => {
        setTitre(event.target.value);
    };

    const handleAuteurChange = (event) => {
        setAuteur(event.target.value);
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('image', file);
        formData.append('titre', titre);
        formData.append('auteur', auteur);
        axios.post('http://localhost:5000/nouveaupost', formData)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Titre</label>
            <input type="text" onChange={handleTitreChange}/>
            <label>Auteur</label>
            <input type="text" onChange={handleAuteurChange}/>
            <label>Image :</label>
            <input type="file" onChange={handleFileChange}/>
            <input type='submit' value="envoyer" />
        </form>
    </div>
  )
}

export default NewPost