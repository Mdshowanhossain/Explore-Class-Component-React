import React, { Component } from 'react'

export default class JsonListItem extends Component {


    render() {

        const jsonElement = [
            {
                country: "Bangladesh",
                city: "Dhaka",
                zip: "123"
            },
            {
                country: "India",
                city: "Delli",
                zip: "3456"
            },
            {
                country: "Nepal",
                city: "KathMundu",
                zip: "7891"
            },
        ];

        const dataItemCountry = jsonElement.map(data => {
            return <option>{data.country}</option>
        });

        const dataItemCity = jsonElement.map(data => {
            return <option>{data.city}</option>
        })


        const dataItemZip = jsonElement.map(data => {
            return <option>{data.zip}</option>
        })

        return (
            <div>

                <select name="" id="">{dataItemCountry}</select>

                <select name="" id="">{dataItemCity}</select>

                <select name="" id="">{dataItemZip}</select>
            </div>
        )
    }
}
