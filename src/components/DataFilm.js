import React, {useState, useEffect} from 'react'

import axios from 'axios'

function DataFilm() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const [film, setFilm] = useState({})

    //recuperer le titre du film tapé
    const [filmTitle, setFilmTitle] = useState('')

    useEffect(() =>{
        // axios.get('http://www.omdbapi.com/?apikey=ea4ec43d&t=' + filmTitle)
        axios.get(`http://www.omdbapi.com/?apikey=ea4ec43d&t=${filmTitle}`)
        .then(
            response =>{
                setLoading(false);
                setError('');
                setFilm(response.data)
            }
        )
        .catch(error =>{
            setLoading(false);
            setError(error.message)
            setFilm({})
        });
    })

    const handleFilmTitleChange = event =>{
        setFilmTitle(event.target.value);
    }

  return (
    <React.Fragment>
        <form>
            <input type='text' onChange={handleFilmTitleChange} />
        </form>

        {loading ? 'Loading...' : film.Title}
        <br />
        {/* <img src={loading ? 'Loading...' : film.Poster} /> */}

        <br />
        {loading ? 'Loading...' : <img src={film.Poster} />}
        <br />
        {loading ? 'Loading...' : film.Year}
        <br />
        {loading ? 'Loading...' : film.BoxOffice}

    </React.Fragment>
  )
}

export default DataFilm