import React, { Component } from 'react'

export default class TextArea extends Component {

    constructor() {
        super();
        this.state = {
            desc: 'My Text',
            myText: ''
        };
    }

    handleTextArea = (e) => {
        let textArea = e.target.value;
        this.setState({ myText: textArea });
    }


    render() {
        return (
            <div><br /><br />
                <textarea onChange={this.handleTextArea} name="name" />
                <h2>{this.state.myText}</h2>
            </div>
        )
    }
}
