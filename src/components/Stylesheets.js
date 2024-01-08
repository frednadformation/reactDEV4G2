import React from 'react'

import './mystyle.css'

function Stylesheets(props) {
  let couleur = props.primary ? "primary" : ""
  return (
    <div>
    <h1 className={couleur}>Stylesheets</h1>
    </div>
  )
}

export default Stylesheets