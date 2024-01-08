import React from "react";

function SuperHero(props){

    return (
    <div>
        <h1>Hello {props.prenom} a.k.a {props.superheros}</h1>
        <p>{props.children}</p>
    </div>
    )
}

export default SuperHero;