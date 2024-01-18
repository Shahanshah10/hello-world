import { Component } from 'react'

class UserGreetings extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggin: true
      }
    }
    

  render() {

    // if(this.state.isLoggin){
    //     return "You are loggin Welcome back!!"
    // }
    // else{
    //     return 'You are Guest!!'
    // }

    //   let message;
    //   if(this.state.isLoggin){
    //       message=<div>You are loggin Welcome back!!</div>
    //   }
    //   else{
    //       message=<div>You are Guest!!</div>
    //   }
    //   return <div>{message}</div>


    // return this.state.isLoggin ? 
    // (<div>You are loggin Welcome back!!</div>)
    //     : (<div>You are Guest!!</div>)
   return this.state.isLoggin && <div>Welcome Back!!</div>
  }
}

export default UserGreetings