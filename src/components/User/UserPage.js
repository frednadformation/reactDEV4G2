import axios from 'axios';
import React, { useEffect, useState } from 'react'

function UserPage() {
    const [jwt, setJWT] = useState({});

    useEffect(()=>{
        axios.get('http://localhost:5000/getJWT', {withCredentials:true })
        .then(response =>{
            setJWT(response.data);
            console.log(response.data);
        })
        .catch(err =>{
            setJWT('');
        })
    }, [])


  return (
    <div>
    
    {jwt.username}
    <br/>
    {jwt.id}
    <br/>
    {jwt.admin ? "Welcome admin" : "Welcome User" }
    
    </div>
  )
}

export default UserPage