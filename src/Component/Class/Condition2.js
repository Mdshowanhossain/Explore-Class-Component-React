import React, { Component } from 'react';

class Condition2 extends Component {
    constructor() {
        super();
        this.state = {
            name: true,
        }
    }
    render() {

        if (this.state.name === true) {
            return <h1>Your 'if' Condition is true</h1>

        } else {
            return <h1>Your Condition 'if' is False</h1>
        }
    }
}
export default Condition2;