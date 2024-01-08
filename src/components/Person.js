import React from 'react'
import './person.css'

function Person({person, colorText}) {
  const colorPersoText = {
    color : colorText
  }

  let dianaStyle = person.name === 'Diana' ? 'diana' : 'others';

  // if(person.name == 'Diana'){
  //   let dianaStyle = 'diana';
  // }
  // else{
  //   let dianaStyle = 'others';
  // }


  return (
    <div>
    <h2 className={dianaStyle} style={colorPersoText}>
        Je suis : {person.name}, j'ai {person.age} ans. Je connais {person.skill}
    </h2>
    </div>
  )
}

export default Person