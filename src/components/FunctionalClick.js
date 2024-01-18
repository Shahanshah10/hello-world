import React from "react";


function FunctionalClick(){

    function clickHandler() {
        console.log("Well u click functional component button...");
    }

    return(
        <div>
            <button onClick={clickHandler}>Click Functional Component</button>
        </div>
    )


}

export default FunctionalClick
