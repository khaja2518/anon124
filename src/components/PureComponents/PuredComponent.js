import React, { PureComponent, Component } from 'react'

export default class PuredComponent extends PureComponent {
    render() {
        console.log('Pure')
        return (<div> Pure Component= {this.props.comp}</div>)
    }
}