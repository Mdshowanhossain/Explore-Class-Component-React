import React, { Component } from 'react';

class Class1 extends Component {

    render() {

        return (
            <div>
                <h3>Hello, i am Class Component {this.props.name} And age-{this.props.age}</h3>
            </div>
        )
    }
}
export default Class1;