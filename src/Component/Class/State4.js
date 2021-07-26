import React, { Component } from 'react';


class State4 extends Component {

    constructor() {
        super();

        this.state = {
            name: 'SOHAN',
            age: '20'
        }

    }


    ChangeName(a) {
        this.setState({ name: a })
    }



    render() {
        // const ChangeName = (a) => {
        //     this.setState = { name: a }
        // }
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age}</h3>
                <button onClick={this.ChangeName.bind(this, 'I am OSMAN')}>Change Name</button>
            </div>
        )
    }
}
export default State4;