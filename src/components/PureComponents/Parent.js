import React, { Component, PureComponent } from 'react'
import RegularComponent from './RegularComponent'
import PuredComponent from './PuredComponent'

export default class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = { name: 'something' }
    }

    componentDidMount() {
        setInterval(() => {
            console.log('parent component')
            this.state.name = "something"
        }, 2000)
    }
    render() {
        return (<div>
            <PuredComponent comp={this.state.name} ></PuredComponent>
            <RegularComponent comp={this.state.name}></RegularComponent>
        </div>
        )
    }
}