import React, { Component } from 'react';
import axios from 'axios';

export default class GetData extends Component {

    constructor() {
        super();
        this.state = {
            setData: [],
        };
    }
    componentDidMount() {

        axios.get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                this.setState({ setData: response.data })
            })
            .catch(error => {
                console.log(error);
            })
    }
    render() {

        const listData = this.state.setData;
        const countryData = listData.map(country => {
            return <li key={country.name}>{country.name}</li>
        })
        return (
            <div>
                <h1>Load Data with AXIOS</h1>
                <ul>
                    {countryData}
                </ul>
            </div>
        )
    }
}
