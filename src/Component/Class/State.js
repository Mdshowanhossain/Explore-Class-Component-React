import React, { Component } from 'react';


class State extends Component {

    constructor() {
        super();
        this.state = {
            name: "SOHAN",
            age: 23,
            home: "Khulna",
            learn: "React JS"
        }
    }

    render() {
        return (
            <div>
                <h1>Name: {this.state.name}</h1>
                <h2>My Age is: {this.state.age}</h2>
                <h3>My Home Town: {this.state.home}</h3>
                <h5>To Learn: {this.state.learn}</h5>
            </div>
        )
    }
}

export default State;