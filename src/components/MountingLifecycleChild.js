import React, { Component } from 'react'

class MountingLifecycleChild extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Shahanshah'
        }
        console.log('Lifecycle --> child--> Constructor..')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Lifecycle --> child--> getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('Lifecycle--> child --> componentDidMount')
    }


    render() {
        console.log('Lifecycle --> child --> render')
        return (
            <div>Mounting Lifecycle child</div>
        )
    }
}

export default MountingLifecycleChild
