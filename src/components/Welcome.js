import React, {Component} from "react";


class Welcome extends Component {
    
    render(){
        const {prenom, age} = this.props;
        return <h1>Welcome {prenom} class Component {age}</h1>
    }
}

export default Welcome;