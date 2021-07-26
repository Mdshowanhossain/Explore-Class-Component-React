import React, { Component } from 'react';
import ReactDom from 'react-dom';



class ReactHydreteMethod extends Component {

    hydreteMethod() {

        const hydreteContainer = document.getElementById("hydrete");

        const hydreteElement = <h1>Hello! i am Hydrete-Method</h1>

        const hydrateCallback = function () {
            alert("Than You For Changing Me")
        }
        ReactDom.hydrate(hydreteElement, hydreteContainer, hydrateCallback)
    }
    render() {
        return (
            <div>
                <h1 id="hydrete">I am Hydrete Method</h1>
                <button onClick={this.hydreteMethod}>Change Me</button>
            </div>
        )
    }
}

export default ReactHydreteMethod;