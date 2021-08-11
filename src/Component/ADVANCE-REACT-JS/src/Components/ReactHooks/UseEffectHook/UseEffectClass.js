import React, { Component } from 'react';

class UseEffectClass extends Component {
    state = {
        count: 0,
        date: new Date(),
    }

    updateDateCount = () => {
        this.setState(({ count }) => ({ count: count + 1 }))
    }

    componentDidMount() {
        const { count } = this.state;
        document.title = `I am Your Updated Count ${count}`;
        setInterval(() => this.timeUpdate(), 1000)
    }

    componentDidUpdate() {
        const { count } = this.state;
        document.title = `I am Your Updated Count ${count}`;
    }

    timeUpdate = () => {
        this.setState({
            date: new Date(),
        })
    }

    render() {
        const { count, date } = this.state;
        return (
            <div>
                <h1>Time: {date.toLocaleTimeString()}</h1>
                <h1>{count}</h1>
                <button onClick={this.updateDateCount}>Update Count</button>
            </div>
        );
    }
}

export default UseEffectClass;