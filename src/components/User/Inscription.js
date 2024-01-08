import React from 'react'

const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

function Inscription() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const validate = () => {
     if (!validEmail.test(email)) {
        setEmailErr(true);
     }
     if (!validPassword.test(password)) {
        setPwdError(true);
     }
  };
  return (
     <div>
        <input
           type="email"
           placeholder="Email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
        />
        <input
           type="password"
           placeholder="Password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
        />
        <div>
           <button onClick={validate}>Validate </button>
        </div>
        {emailErr && <p>Your email is invalid</p>}
        {pwdError && <p>Your password is invalid</p>}
     </div>
  );
  
  // return (
  //   <form action="http://localhost:5000/api/inscription" method="post">
  //       <label for="">Username</label>
  //       <input type="text" name="username"/>
  //       <br/>
  //       <label for="">email</label>
  //       <input type="email" name="email"/>
  //       <br/>
  //       <label for="">password</label>
  //       <input type="password" name="password"/>
  //       <br/>
  //       <input type="radio" name="admin" value="true" id="admin"/>
  //       <label for="admin">Administrateur</label>
  //       <input type="radio" name="admin" value="false" id="user"/>
  //       <label for="user">Utilisateur</label>
  //       <br/>
  //       <input type="submit" value="Nouveau Utilisateur"/>
  //   </form>
  // )
}

export default Inscription