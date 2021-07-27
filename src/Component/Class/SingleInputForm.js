import React, { Component } from 'react'

export default class SingleInputForm extends Component {

    constructor() {
        super();

        this.state = {
            name: " "
        };
    }

    onchangeHandler = (e) => {
        const newValue = e.target.value;

        this.setState({ name: newValue });
    }
    render() {
        return (
            <div>
                <h2>My First Form</h2>
                <h4>{this.state.name}</h4>
                <form >
                    <input onChange={this.onchangeHandler} type="text" placeholder="Your Name" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
