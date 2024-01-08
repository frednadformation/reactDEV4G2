import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

function Services() {
  const location = useLocation()

  console.log(location);

  return (
    <div>
    Services
    <nav>
      <Link to="/services/marketing">Marketing</Link>
      <Link to="/services/developpement">Developpement</Link>
    </nav>

    <Outlet />
    
    </div>
  )
}

export default Services