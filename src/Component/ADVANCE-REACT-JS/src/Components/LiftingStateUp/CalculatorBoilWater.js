import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput';
import WaterBoil from './WaterBoil';
import { CelsiusTo, FahrenheitTo, converter } from './Converter/Converter';

class CalculatorBoilWater extends Component {

    state = { scale: "c", temperature: "" }

    handleTemperature = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        })
    }

    render() {
        const { scale, temperature } = this.state;

        const celsius = scale === 'f' ? converter(temperature, CelsiusTo) : temperature;

        const fahrenheit = scale === 'c' ? converter(temperature, FahrenheitTo) : temperature;

        return (
            <div>

                <TemperatureInput scale="c" temperature={celsius} handleTemperature={this.handleTemperature} />
                <TemperatureInput scale="f" temperature={fahrenheit} handleTemperature={this.handleTemperature} />

                <WaterBoil celsius={parseFloat(temperature)} />
            </div>
        );
    }
}
export default CalculatorBoilWater;