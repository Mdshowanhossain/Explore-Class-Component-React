import React, { Component } from "react";


class State3 extends Component {

    constructor() {
        super();

        let myObj = {
            name: "SOHAN",
            age: ["23", "33", "43", "53", "62", "66"],
            home: "Khulna",
            learn: {
                one: "React JS",
                two: "Angular",
                three: "Vue JS",
                age: ["23", "33", "43", "53", "62", "66"]
            }
        };

        this.state = myObj;
    }

    render() {
        return (
            <div>
                <h1>Name: {this.state.name}</h1>
                <h2>My Age is: {this.state.age[4]}</h2>
                <h3>My Home Town: {this.state.home}</h3>
                <h4>To Learn: {this.state.learn.two}</h4>
                <h4>To Learn: {this.state.learn.age[2]}</h4>

            </div>
        )
    }
}
export default State3;