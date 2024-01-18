import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            comment: '',
            course: ''
        }
    }

    handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentChanges = event => {
        this.setState({
            comment: event.target.value
        })
    }
    handleCourseChanges = event => {
        this.setState({
            course: event.target.value
        })
    }
    handleSubmit = event => {
        alert(` ${this.state.username} -> ${this.state.comment} -> ${this.state.course}`)
        event.preventDefault() //preserving the input after submit form
    }

    render() {
        const { username, comment, course } = this.state  // assign all the values from state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username: </label>
                    {/* <input type="text" value={this.state.username} onChange={this.handleUsernameChange} /> */}
                    <input type="text" value={username} onChange={this.handleUsernameChange} />
                    <br></br>
                    <label>Comments</label>
                    <textarea value={comment} onChange={this.handleCommentChanges}></textarea>
                    <br></br>
                    <label>Select Course</label>
                    <select value={course} onChange={this.handleCourseChanges}>
                        <option>Java</option>
                        <option>React</option>
                        <option>Angular</option>
                        <option></option>
                    </select>
                </div>
                <button type="submit">ubmit</button>
            </form>
        )
    }
}

export default Form
