import React, { Component } from 'react'

export default class RegularComponent extends Component {
    render() {
        console.log('regular')
        return (<div> Regular Component = {this.props.comp}</div>)
    }
}