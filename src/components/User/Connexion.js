import React from 'react'

function Connexion() {
  return (
    <div>
        <form action="https://expressbackenddev4g2-jv4h.onrender.com/api/connexion" method="post">
        <label for="">Username</label>
        <input type="text" name="username"/>
        <label for="">Password</label>
        <input type="password" name="password"/>

        <input type="submit" value="Connexion"/>
    </form>

    </div>
  )
}

export default Connexion