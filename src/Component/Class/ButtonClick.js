import React, { Component } from 'react';

class ButtonClick extends Component {

    render() {
        const buttonClick = (c) => {
            alert(c);
        }
        return (
            <div>
                <button onClick={() => buttonClick('I am Class Component')}>Click me</button>
            </div>
        )
    }
}

export default ButtonClick;