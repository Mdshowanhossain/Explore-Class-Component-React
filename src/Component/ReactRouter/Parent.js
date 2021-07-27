import React, { Component } from 'react'
import Home from './Home'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import About from './About';
import Contact from './Contact';

export default class Parent extends Component {
    render() {
        return (
            <Router>

                <ul>
                    <li><Link to="/home">HOME</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Switch>
            </Router>
        )
    }
}
