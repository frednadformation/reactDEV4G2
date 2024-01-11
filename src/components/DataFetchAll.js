import React, { useEffect, useState } from 'react'

import axios from 'axios';

function DataFetchAll() {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  //Liste des contacts
  const [contacts, setContacts] = useState({});

  useEffect(()=>{
    axios.get('https://expressbackenddev4g2-jv4h.onrender.com/')
    .then((response)=>{
      setLoading(false);
      setError('');
      setContacts(response.data);
    })
    .catch((error)=>{
      setLoading(false);
      setError(error.message);
      setContacts({});
    });
  }, [])

  return (
    <div>
      {loading ? 'Loading...' : contacts.map((contact)=>{
          return (
            <div>
                <h2>{contact.firstName}</h2>
                <p>{contact.email}</p>
            </div>
          )
      })}
    </div>
  )

}

export default DataFetchAll