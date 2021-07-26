import React, { Component } from 'react';

class Refresh extends Component {


    constructor() {
        super();

        this.refreshTheNumber = this.refreshTheNumber.bind(this);
    }
    refreshTheNumber() {
        this.forceUpdate();
    }
    render() {
        return (
            <div>
                <br /><br />
                <button onClick={this.refreshTheNumber}>Change The Number</button>
                <h2>{Math.random()}</h2>
            </div>
        )


    }
}
export default Refresh;