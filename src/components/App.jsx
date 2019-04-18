import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Films from './Films';
import People from './People';
import Home from './Home'
import FilmId from './Id'


class App extends Component {


    render() {
        return (
            //have to render router component around the part that contains routes 
            <Router>
                <Route exact path="/" component={Home}></Route>

                <div className="col-md-12">
                    <nav className="navbar navbar-expand-lg bg-primary d-flex d-inline justify-content-center">
                        <div className="btn-group d-flex justify-space-around">
                            <button>
                                <Link to={"/"}>Go Home</Link>
                            </button>
                            <button>
                                <Link to={"/films"}>View Films</Link>
                            </button>
                            <button>
                                <Link to={"/people"}>View People</Link>
                            </button>
                        </div>
                    </nav>
                </div>

                <Switch>
                    <Route exact path="/films" component={Films}>
                    </Route>
                    <Route exact path="/film/:id/details" component={FilmId}>
                    </Route>
                    <Route exact path="/people" component={People}>
                    </Route>
                   

                </Switch>
            </Router >
        )
    }




}

export default App