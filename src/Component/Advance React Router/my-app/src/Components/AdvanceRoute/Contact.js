import React, { Component } from 'react';

class Contact extends Component {

    constructor({ match }) {
        super();
        this.state = {
            myPassData: match.params.name
        };
    }

    render() {
        return (
            <div>
                <h1>I am Contact Page</h1>
                <h3>{this.state.myPassData}</h3>
            </div>
        );
    }
}

export default Contact;