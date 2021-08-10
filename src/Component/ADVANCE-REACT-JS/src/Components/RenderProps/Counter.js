import React, { Component } from 'react';

class Counter extends Component {

    state = {
        counter: 0,
    }

    handleCounter = () => {
        this.setState((prevCount) => ({ counter: prevCount.counter + 1 }));
    }

    render() {

        const { render } = this.props;
        const { counter } = this.state;

        return render(counter, this.handleCounter);
    }
}

export default Counter;