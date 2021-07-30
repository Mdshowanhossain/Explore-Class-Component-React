import React, { Component } from 'react';
import About from './About';
import Contact from './Contact';
import Home from './Home';

class PropsParent extends Component {
    render() {
        return (
            <div>
                <Home />
                <About />
                <Contact />
            </div>
        );
    }
}

export default PropsParent;