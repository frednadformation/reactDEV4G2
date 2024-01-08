import React, { Component } from 'react'
import "./newsletter.css";

export class Newsletter extends Component {

    
    constructor(props) {
        super(props)

        this.state = {
            nom: "",
            prenom: "",
            email: ""

        }
    }

    handlePrenomChange = (event) => {
        console.log(event.target.value);
        this.setState({
            prenom: event.target.value
        })
    }
    handleNomChange = (event) => {
        // console.log(event.target.value.length);
        console.log(event.target);

        if (event.target.value.length <= 3){
            event.target.className = "borderRed";
        }
        else{
            event.target.className = "borderGreen";
        }

        event.target.className = event.target.value.length <= 3 ? "borderRed" : "borderGreen";

        this.setState({
            nom: event.target.value
        })
    }
    handleEmailChange = (event) => {
        console.log(event.target.value);
        this.setState({
            email: event.target.value
        })
    }

    handleSubmitChange = (event) => {
        alert(`Merci, ${this.state.nom} ${this.state.prenom} d’avoir pris contact avec nous. Nous reviendrons vers vous à cet email : ${this.state.email}`)
        event.preventDefault();
    }


    render() {
        // let borderColor = this.state.nom.length <= 3 ? "borderRed" : "borderGreen";
        return (
            <div>
                <form onSubmit={this.handleSubmitChange}>
                    
                    <label>Nom</label>
                    <input type="text" onChange={this.handleNomChange} />
                    
                    <label>Prénom</label>
                    <input type="text" onChange={this.handlePrenomChange} />
                    <label>Email</label>
                    <input type="email" onChange={this.handleEmailChange} />

                    <input type='submit' value="envoyer" />
                </form>

            </div>
        )
    }
}

export default Newsletter