import React, { Component } from 'react'

export default class SelectOption extends Component {

    constructor() {
        super();
        this.state = {
            city1: 'Dhaka',
            city2: 'Khulna',
            city3: 'Borishal',
            city4: 'Chittagong',
            city5: 'Rongpur',
            city6: 'Rajshahi',
            showCity: ' ',
            autoSelect: 'Dhaka',
        };
    }

    onChangeHandler = (e) => {
        let selectedCity = e.target.value;

        this.setState({ showCity: selectedCity, autoSelect: selectedCity });
    }
    render() {
        return (
            <div><br /><br />
                <select onChange={this.onChangeHandler} value={this.state.autoSelect} >
                    <option>{this.state.city1}</option>
                    <option>{this.state.city2}</option>
                    <option>{this.state.city3}</option>
                    <option>{this.state.city4}</option>
                    <option>{this.state.city5}</option>
                    <option>{this.state.city6}</option>
                </select>
                <h1>{this.state.showCity}</h1>
            </div>
        )
    }
}
// https://www.youtube.com/watch?v=qZno3Yk8QKc