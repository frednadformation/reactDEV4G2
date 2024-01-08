import React, { Component } from 'react'

class UserGreetings extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false,
      }
    }

    clickHandler(){
        this.setState({
            isLoggedIn : true
        })
    }

  render() {
    

    // if(this.state.isLoggedIn){
    // return (
    //         <div>Welcome Fréd</div>
    //       )
    // }
    // else{
    //     return (
    //         <div>
    //         Welcome Guest !
    //         <button onClick={()=>this.clickHandler()}>Se Connecter</button>
    //         </div>
    //       )
    // }

    // return this.state.isLoggedIn ? (<div>Welcome Fréd</div>) : (<div>Welcome Guest !</div>)
    // return this.state.isLoggedIn && (<div>Welcome Fréd</div>)

    let message;
    if(this.state.isLoggedIn){
        message = <div>Welcome Fréd</div>
          
    }
    else{
    message = <div>
            Welcome Guest !
            <button onClick={()=>this.clickHandler()}>Se Connecter</button>
            </div>
    }
    return <div> {message}</div>
  }
}

export default UserGreetings