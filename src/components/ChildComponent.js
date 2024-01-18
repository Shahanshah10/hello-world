import React from 'react'
 
function ChildComponent(props) {
  return (
    <div>
      {/* <button onClick={props.greetHandler}>Greet Person</button> */}
      <button onClick={()=>props.greetHandler('All')}>Greet Person</button>
    </div>
  )
}

export default ChildComponent


