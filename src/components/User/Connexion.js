import React, { useState } from 'react'

function Connexion() {

  return (
    <div>
        <form action="https://expressbackenddev4g2-jv4h.onrender.com/api/connexion" method="post">
        <label>Username</label>
        <input type="text" name="username"/>
        <label>Password</label>
        <input type="password" name="password"/>
        <input type="submit" value="Connexion"/>
    </form>

      <img src='http://localhost:5000/captcha' alt='svg-captcha'/>

      <form action='http://localhost:5000/verify' method='post'>
        <label>Prouvez que vous êtes un humain !</label>
        <input type="text" name="captcha"/>

        <input type="submit" value="Prouvez le !!!!"/>
      </form>



    </div>
  )
}

export default Connexion