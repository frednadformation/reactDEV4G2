import React, { Component } from 'react'

class AdminTest extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         admin: true
      }
    }

  render() {
    return (
      this.state.admin ? 
      <div><button>Edit</button></div> 
      : 
      <div>Veuillez vous connecter en tant qu'admin</div>
    )
  }
}

export default AdminTest