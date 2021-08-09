import React from 'react';
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit',
}

function TemperatureInput({ scale, handleTemperature, temperature }) {

    return (
        <div>
            <fieldset>
                <legend>Enter Boiling Water Temperature:{scaleNames[scale]}</legend>
                <input type="text" value={temperature} onChange={(e) => handleTemperature(e, scale)} />
            </fieldset>
        </div>
    );

}
export default TemperatureInput;