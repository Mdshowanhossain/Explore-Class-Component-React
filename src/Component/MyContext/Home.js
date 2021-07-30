import React, { Component } from 'react';
import About from './About';

class Home extends Component {
    render() {
        return (
            <div>
                {/* <h1>I am Home {this.props.value}</h1> */}
                <About />
            </div>
        );
    }
}

export default Home;