import React, { Component } from 'react'

class DestructState extends Component {
  render() {
      const {name, heroName}= this.props
    //   const {state1, state2} = this.state
    return (
        <div>
            <h1>
              DestructState : With Name : {name} and heroName: {heroName}
            </h1>      
        </div>
    )
  }
}

export default DestructState