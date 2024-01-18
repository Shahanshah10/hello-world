import React from "react"

// const DestructProps= ({name, heroName})=>{
//     return(
//         <div>
//             <h1>
//                 Destructing props : name : {name} and heroName : {heroName}
//             </h1>
//         </div>
//     )
// }

const DestructProps  = (props) => {
    const {name, heroName} = props
    return(
        <div>
            <h2>
                Hi Destructing Props : {name} and {heroName}
            </h2>
        </div>
    )
}

export default DestructProps