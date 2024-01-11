import axios from 'axios';
import React, { useEffect, useState } from 'react'

function UserPage() {
    const [jwt, setJWT] = useState({});

    useEffect(()=>{
        axios.get('https://expressbackenddev4g2-jv4h.onrender.com/getJWT', {withCredentials:true })
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