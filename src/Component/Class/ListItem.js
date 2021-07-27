import React, { Component } from 'react'

export default class ListItem extends Component {

    selectData = (data) => {
        return <option>{data}</option>
    };
    render() {
        const myArr = ['SOHAN', 'OSMAN', 'RUMI', 'ASHIK', 'MOHAMMAD', 'HOSSAIN'];
        const listItem = myArr.map(list => {
            return <h1>{list}</h1>
        })
        const listItems = myArr.map(this.selectData)

        return (
            <div><br /><br />
                <select >
                    {listItems}
                </select>
                <h1>{listItem}</h1>
            </div>
        )
    }
}
