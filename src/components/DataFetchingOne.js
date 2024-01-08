import React, {useState, useEffect} from 'react'

import axios from 'axios'

function DataFetchingOne() {
    //Loading et error
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    //Recuperation des données
    const [post, setPost] = useState({});

    useEffect(()=> {
        axios.get("https://jsonplaceholder.typicode.com/posts/100")
        .then(
            response =>{
                setLoading(false);
                setError('');
                setPost(response.data);
            }
        )
        .catch( error =>{
            setLoading(false);
            setError(error.message);
            // setError('Something went wrong !');
            setPost({})
        });

    }, [])



  return (
    <div>
        <h1>{loading ? 'loading..........' : post.title}</h1>
        {loading ? 'loading..........' : post.body}
        <br />
        userID : {loading ? 'loading..........' : post.userId}
        {error ? error : null}

    </div>
  )
}

export default DataFetchingOne