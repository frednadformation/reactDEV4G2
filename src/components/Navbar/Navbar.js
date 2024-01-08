import React from 'react'

import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <nav>
        <Link to="/">Acceuil</Link>
        <Link to="/services">Services</Link>
        <Link to="/profil/max">Profil de max</Link>
    </nav>
  )
}

export default Navbar