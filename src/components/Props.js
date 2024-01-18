import React from "react";

const Props=(props)=>{
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name} a.k.a {props.heroName}</h1>
            <p>{props.children}</p>
        </div>
    )
}

export default Props