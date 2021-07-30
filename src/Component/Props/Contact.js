import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <h1>I am Contact {this.props.value}</h1>
            </div>
        );
    }
}

export default Contact;