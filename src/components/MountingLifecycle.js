import React, { Component } from 'react'
import MountingLifecycleChild from './MountingLifecycleChild'

class MountingLifecycle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Shahanshah'
        }
        console.log('Lifecycle --> Constructor..')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Lifecycle --> getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('Lifecycle --> componentDidMount')
    }


    render() {
        console.log('Lifecycle  --> render')
        return (
            <div>
                <h1>Mounting Lifecycle</h1>
                <MountingLifecycleChild />
            </div>
        )
    }
}

export default MountingLifecycle
