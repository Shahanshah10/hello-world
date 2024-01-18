import React,{ Component } from "react";

class Message extends Component{
    constructor(){
        super()
        this.state={
            message:"Welcome to state"
        }
    }

    changeMessage(){
        this.setState({
            message: "You clicked button"
        })
    }

    render(){
        return (
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeMessage()}>Well Done</button>
        </div>
        )
    }
}

export default Message