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
            selectCity: ''
        };
    }


    onChangeHandler = (e) => {
        let selectedCity = e.target.value;
    }

    render() {
        return (
            <div><br /><br />
                <h1>{this.state.selectCity}</h1>
                <select onChange={this.onChangeHandler} value={this.state.selectCity}>
                    <option value="">{this.state.city1}</option>
                    <option value="">{this.state.city2}</option>
                    <option value="">{this.state.city3}</option>
                    <option value="">{this.state.city4}</option>
                    <option value="">{this.state.city5}</option>
                    <option value="">{this.state.city6}</option>
                </select>
            </div>
        )
    }
}
