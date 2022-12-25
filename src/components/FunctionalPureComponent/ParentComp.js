import React, { Component } from 'react'
import FunctionalMemo from './FunctionalMemo'

export default class ParentComp extends Component {
    constructor(props) {
        super(props)
        this.state = { name: 'khaja' }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ name: 'khaja' })
        }, 2000)
        
    }
    render() {
        console.log('Parent Comp')
        return (<div>
            <FunctionalMemo name={this.state.name}></FunctionalMemo>
        </div>)
    }
}