import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Films from './Films';
import People from './People';
import Home from './Home'
import FilmId from './Id'


class App extends Component {


    render() {
        return (
            //have to render router component around the part that contains routes
            <Router>
                <Home />
                <Switch>
                    {/* <Route exact path="/" component={Home}></Route> */}
                    <Route exact path="/films" component={Films}></Route>
                    <Route exact path="/films/:id/details" component={FilmId}></Route>
                    <Route exact path="/people" component={People}></Route>
                </Switch>

            </Router >
        )
    }

    //params hold all matching params where the key is the name we specified when creating the route and the value is the actual value in the URL


}

export default App