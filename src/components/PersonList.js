import React, { Component } from 'react'
import Person from './Person'

class PersonList extends Component {
  render() {
    const persons = [{

      name: "Shahanshah",
      age: 24,
      role: "Full Stack Developer"
    }, {
      name: "Dipu",
      age: 25,
      role: "Android Developer"
    }, {
      name: "Sachin",
      age: 32,
      role: "Kabaddi player"
    }]
    const personList = persons.map(person => <Person key={person.name} person={person} />)
    return <div> {personList}</div>
  }
}

export default PersonList
