import React from "react";

function Greet({prenom, age, children}){
    // console.log(props);
    // console.log(props.prenom);

    return (
    <div>
        <h1>Hello {prenom} vous avez {age}</h1>
        {children}
    </div>
    )
}

export default Greet;