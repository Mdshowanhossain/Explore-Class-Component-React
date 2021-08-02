import React, { Component } from 'react'

export default class StateLifeCycle extends Component {

    state = {
        date: new Date(),
        locale: "bn-BD",
    }

    componentDidMount() {
        setInterval(() => this.updateTime(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.updateTime);
    }

    translateTime = () => {
        this.setState({
            locale: "en-US",
        })
    }


    updateTime() {
        this.setState({
            date: new Date(),
        })
    }

    render() {
        const { date, locale } = this.state;

        return (
            <div>
                <h1>Clock- {date.toLocaleTimeString(locale)}</h1>
                <button onClick={this.translateTime}>Translate Time</button>
            </div>
        )
    }
}
