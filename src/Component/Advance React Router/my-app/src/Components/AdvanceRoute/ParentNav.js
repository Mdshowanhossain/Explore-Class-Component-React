import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
class ParentNav extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <NavLink exact activeStyle={{ color: 'red' }} to="/">HOME</NavLink>
                        </li>
                        <li>
                            <NavLink exact activeStyle={{ color: 'red' }} to="/about">ABOUT</NavLink>
                        </li>
                        <li>
                            <NavLink exact activeStyle={{ color: 'red' }} to="/contact/:name">CONTACT</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default ParentNav;