import React, { Component } from 'react';
import { HashRouter, Route, Router, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import NotFound from './NotFound';

class ParentRoute extends Component {
    render() {
        return (
            <div>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route path="/" component={NotFound} />
                </Switch>

            </div>
        );
    }
}

export default ParentRoute;