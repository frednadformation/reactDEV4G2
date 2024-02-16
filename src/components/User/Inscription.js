import React, {useState} from 'react'


function Inscription() {

   const [password, setPassword] = useState("");
   const [message, setMessage] = useState("");

   function handleChange(event){
      setPassword(event.target.value)
      const regExp= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/

      const validPassword = regExp.test(password)
      if(validPassword){
         setMessage("Password valid !")
      }
      else{
         setMessage("Invalid password !")
      }
   }
  return (
    <form action="https://expressbackenddev4g2-jv4h.onrender.com/api/inscription" method="post">
        <label for="">Username</label>
        <input type="text" name="username"/>
        <br/>
        <label for="">email</label>
        <input type="email" name="email"/>
        <br/>
        <label for="">password</label>
        <input type="password" name="password" onChange={handleChange}/>
                                 <p>{message}</p>
        <br/>
        <input type="radio" name="admin" value="true" id="admin"/>
        <label for="admin">Administrateur</label>
        <input type="radio" name="admin" value="false" id="user"/>
        <label for="user">Utilisateur</label>
        <br/>
        <input type="submit" value="Nouveau Utilisateur"/>
    </form>
  )
}

export default Inscription