import React, { Component } from 'react';

class Condition extends Component {


    constructor() {
        super();
        this.state = true;
    }


    render() {
        return (
            <div>
                {this.state ? <h3>Condition is True</h3> : <h3>Condition is False</h3>}
            </div>
        )
    }
}

export default Condition;