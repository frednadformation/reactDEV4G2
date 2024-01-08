import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Admin() {

  return (
    <div>
    Admin
    
    <nav>
        <Link to="/admin/dashboard">Dashboard</Link>
        <Link to="/admin/gestionpost">GestionPost</Link>
    </nav>
    <Outlet />
    </div>
  )
}

export default Admin