import React, { Component } from 'react'

export default class EventHandling extends Component {

    constructor() {
        super();
        this.state = {
            userName: ' '
        }
    }

    handleChange = (e) => {

        let myName = e.target.name;
        let myValue = e.target.value;
        this.setState({ [myName]: myValue })
    }

    handleSubmit = () => {
        alert(this.state.userName);
    }

    render() {
        return (
            <div>
                <h1>My First Form</h1><br />
                <h2>{this.state.userName}</h2>
                <form onSubmit={this.handleSubmit}>
                    <input name="userName" onChange={this.handleChange} type="text" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
