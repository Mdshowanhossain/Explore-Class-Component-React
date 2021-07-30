import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {

    constructor() {
        super();
        this.state = {
            passMyData: 'IamYourPassData',
        }
    }

    render() {

        const data = "/aboutPage/" + this.state.passMyData

        return (
            <div>
                <h1>I am About Page</h1>
                <button><Link to={data}>Pass My Name</Link></button>
            </div>
        );
    }
}

export default About;