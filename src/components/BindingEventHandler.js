import React, { Component } from 'react'

class BindingEventHandler extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "Hi Shahanshah"
        }

        // this.clickHandler=this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message: 'Thanks for clicking button'
    //     })
    //     console.log(this)
    // }

    clickHandler=()=>{
        this.setState({
            message:'Clicked!!'
        })  
    }

  render() {
    return (
        <div>
            <p>{this.state.message}</p>
            {/* <button onClick={this.clickHandler.bind(this)}>Click Me</button> */}
            {/* <button onClick={() => this.clickHandler()}>Click Me</button> */}
            <button onClick={this.clickHandler}> Click Me</button>
        </div>
    )
  }
}

export default BindingEventHandler