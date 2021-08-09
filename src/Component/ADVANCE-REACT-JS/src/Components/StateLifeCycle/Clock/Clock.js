import React, { Component } from 'react';
import Button from './Button';

class Clock extends Component {

    state = ({
        date: new Date(),
        locale: "bn-BD",
    })
    componentDidMount() {
        this.clockTimer = setInterval(() => this.timeUpdate(), 1000)
    }
    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }
    timeUpdate() {
        this.setState({
            date: new Date()
        })
    }
    handleClick = (locale) => {
        this.setState({
            locale,
        })
    }
    render() {
        const { date, locale } = this.state;

        return (
            <div>
                <h2>{date.toLocaleTimeString(locale)}</h2>

                {
                    locale === "bn-BD" ? <Button handleClick={this.handleClick} locale="en-US" /> : <Button handleClick={this.handleClick} locale="bn-BD" />
                }


            </div >
        );
    }
}
export default Clock;