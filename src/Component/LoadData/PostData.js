import React, { Component } from 'react'
import axios from 'axios';


export default class PostData extends Component {
    constructor() {
        super();
        this.state = {
            inputData: "",
            postData: " ",
        };
    }

    handleChangeData = (e) => {
        const data = e.target.value;
        this.setState({ inputData: data });
    }

    handlePostData = () => {
        axios.post('https://restcountries.eu/rest/v2/all', this.state.inputData)
            .then(response => {
                this.setState({ postData: response.data })
                alert(this.state.postData)
            })
            .catch(error => {
                alert("Something went wrong")
            })
    }

    render() {
        return (
            <div>
                <input onChange={this.handleChangeData} type="text" name="" id="" />
                <button onClick={this.handlePostData}>Send Data</button>
            </div>
        )
    }
}
