import React, { Component } from 'react'

export default class MultipleInputs extends Component {

    constructor() {
        super();

        this.state = {
            fname: " ",
            lname: " ",
            email: " ",
            phone: " ",
            address: " ",
        }
    }

    onChangeHandler = (e) => {
        let inputName = e.target.name;
        let inputValue = e.target.value;

        this.setState({ [inputName]: inputValue })
    }

    render() {
        return (
            <div>
                <h1>Please Sign Up</h1>
                <p>First Name: {this.state.fname}</p>
                <p>Last Name: {this.state.lname}</p>
                <p>Email: {this.state.email}</p>
                <p>Phone: {this.state.phone}</p>
                <p>Address: {this.state.address}</p>

                <form>
                    <input onChange={this.onChangeHandler} name="fname" type="text" placeholder="First Name" /><br /><br />
                    <input onChange={this.onChangeHandler} name="lname" type="text" placeholder="Last Name" /><br /><br />
                    <input onChange={this.onChangeHandler} name="email" type="text" placeholder="Email" /><br /><br />
                    <input onChange={this.onChangeHandler} name="phone" type="text" placeholder="Phone" /><br /><br />
                    <input onChange={this.onChangeHandler} name="address" type="text" placeholder="Address" /><br /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
