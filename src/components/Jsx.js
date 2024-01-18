import React from "react"
const Jsx1=()=>{
// with
    // return(
    //     <div id="firstId",class="firstClass">
    //         <h3>Using JSX Rendering the page</h3>
    //     </div>
    // )
// without
        return React.createElement(
            'div',{id:'firstId',className:"firstClass"},
            React.createElement('h1',null,'Hello Without JSX')
        )

}

export default Jsx1