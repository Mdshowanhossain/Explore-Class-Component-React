import React, { Component } from 'react';

class HoverCounter extends Component {

    render() {
        const { counter, handleCounter } = this.props;
        return (
            <div>
                <h1 onMouseOver={handleCounter}>Hover Counter.......{counter}</h1>
            </div>
        );
    }
}

export default HoverCounter;