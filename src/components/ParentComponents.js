import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponents extends Component {
    constructor(props) {
      super(props)
      this.state = {
         parentName: 'Mahdi'
      }
      this.greetPerson= this.greetPerson.bind(this)
    }

    greetPerson(childName){
        alert(`Salam ${this.state.parentName} from ${childName}`)
    }
    
    render() {
        return (
        <div>
            <ChildComponent greetHandler={this.greetPerson} />
        </div>
        )
    }
}

export default ParentComponents
