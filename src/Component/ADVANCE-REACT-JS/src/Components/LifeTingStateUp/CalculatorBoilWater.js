import React, { Component } from 'react';
import WaterBoil from './WaterBoil';

class CalculatorBoilWater extends Component {
    state = {
        temperature: ""
    }
    handleTemperature = (e) => {
        this.setState({
            temperature: e.target.value
        })
    }
    render() {
        const { temperature } = this.state;
        return (
            <div>
                <fieldset>
                    <legend>Enter Your Boiling Water Temperature:</legend>
                    <input type="text" value={temperature} onChange={this.handleTemperature} />
                </fieldset>
                <WaterBoil celsius={parseFloat(temperature)} />
            </div>
        );
    }
}
export default CalculatorBoilWater;