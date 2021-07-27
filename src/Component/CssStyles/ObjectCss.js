import React, { Component } from 'react'

export default class ObjectCss extends Component {
    render() {
        const objectStyle = {
            backgroundColor: 'red',
            color: 'white',
            fontSize: '35px',
            padding: '44px',
            margin: '30px'
        }
        return (
            <div>
                <h1 className="textStyle">MOHAMMAD OSMAN GONI HERO--- I am Object Style Method</h1>

                <h1 style={objectStyle}>MOHAMMAD OSMAN GONI HERO--- I am Object Style Method</h1>

            </div>
        )
    }
}
