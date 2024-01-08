import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

function FetchOneContact() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    //Donnée : Un contact
    const [contact, setContact] = useState({});

    //modification des données :
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleFirstname = event =>{
        setFirstname(event.target.value);
    }
    const handleLastname = event =>{
        setLastname(event.target.value);
    }
    const handleEmail = event =>{
        setEmail(event.target.value);
    }
    const handleMessage = event =>{
        setMessage(event.target.value);
    }

    
    //Recuprer les données de l'url
    const params = useParams();

    console.log(params.id);

    useEffect(()=>{
        // axios.get(`http://localhost:5000/formulaire/${params.id}`)
        axios.get('http://localhost:5000/formulaire/' + params.id)
        .then(response =>{
            setLoading(false);
            setError('');
            setContact(response.data)
            // console.log(response.data.firstName);
            setFirstname(response.data.firstName);
            setLastname(response.data.lastName);
            setEmail(response.data.email);
            setMessage(response.data.message);
        })
        .catch(error =>{
            setLoading(false);
            setError(error.message);
            setContact({});
        })
    }, [])
    
  return (
    <div>
        <h1>{loading ? 'Loading....' : contact.lastName}</h1>
        <h2>{loading ? 'Loading....' : contact.firstName}</h2>
        <p>{loading ? 'Loading....' : contact.email}</p>
        <p>{loading ? 'Loading....' : contact.message}</p>

    <form action={`http://localhost:5000/edit/${params.id}?_method=PUT`} method="post">
        <input type='hidden' name='_method' value="PUT" />
        first name <input type="text" name="firstName" value={firstName} onChange={handleFirstname} /><br/>
        last name <input type="text" name="lastName" value={lastName} onChange={handleLastname} /><br/>
        Email <input type="email" name="email" value={email} onChange={handleEmail} /><br/>
        Message 
        <textarea name="message" id="" cols="30" rows="10" value={message} onChange={handleMessage}>
        </textarea><br/>
        <input type="submit" value="Editer ma donnée" />
    </form>

    <form action={`http://localhost:5000/delete/${params.id}?_method=DELETE`} method="post">
        <input type='hidden' name='_method' value="DELETE" />
        <input type="submit" value="Supprimer" />
    </form>

    </div>
  )
}

export default FetchOneContact