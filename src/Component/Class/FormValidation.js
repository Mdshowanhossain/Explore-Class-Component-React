import React, { Component } from 'react'

export default class FormValidation extends Component {

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

        if (inputName === "fname") {

            let nameValid = /^([a-z,A-Z]){2,30}$/;

            if (!nameValid.test(inputValue)) {
                this.setState({ fname: "First Name is not Valid" })
            }
        }
        else if (inputName === "lname") {
            let lNameValid = /^([a-zA-Z]){2,30}$/;

            if (!lNameValid.test(inputValue)) {
                this.setState({ lname: "Last Name is not Valid" });
            }
        }
        else if (inputName === "email") {
            let emailValid = /^([a-zA-Z]){2,30}$/;

            if (!emailValid.test(inputValue)) {
                this.setState({ email: "Your Email is not Valid" });
            }
        }
        else if (inputName === "phone") {
            let phoneValid = /^([a-zA-Z]){2,30}$/;
            if (!phoneValid.test(inputValue)) {
                this.setState({ phone: "Your email is not Valid" })
            }
        }
        else if (inputName === "address") {
            let addressValid = /^([a-zA-Z]){2,30}$/;
            if (!addressValid.test(inputValue)) {
                this.setState({ address: "Your address is not Valid" });
            }
        }
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
