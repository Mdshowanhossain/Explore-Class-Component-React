import React, { Component } from "react";
import ReactDom from "react-dom";


class ReactDomRender extends Component {

    renderMethod() {
        let renderContainer = document.getElementById("renderId");

        let renderElement = <h2>I am Render-Method</h2>

        const renderCallback = () => {
            alert("Thank You For Changing Me")
        }
        ReactDom.render(renderElement, renderContainer, renderCallback)
    }

    render() {
        return (
            <div>
                <h1 id="renderId">I am React Render Method</h1>
                <button onClick={this.renderMethod}>Click Me</button>
            </div>
        )
    }
}

export default ReactDomRender;