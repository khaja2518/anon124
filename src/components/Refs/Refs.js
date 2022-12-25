import React, { Component } from "react";
export default class Refs extends Component {

    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }

    componentDidMount() {
        this.inputRef.current.focus()
    }

    btnHandler = () => {
        console.log(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                <button onClick={this.btnHandler}>click</button>

            </div>
        )
    }
}