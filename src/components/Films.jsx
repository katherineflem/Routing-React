import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import FilmId from './Id'

class Films extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: []
        }
    }

    componentDidMount() {
        console.log(this.props.match)
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(film => { this.setState({ films: film }) })
    }

    render() {
        return (
            <>
                <div className="row d-flex justify-content-center">
                    <h3>Films</h3>
                </div>
                {this.state.films.map((film) => {
                    return (
                        <div className="container d-flex justify-content-center">
                            <div className="row">
                                <div className="column md-12">
                                    <div className="card bg-light border-dark mb-5">
                                        <div className="card-body">
                                            <h2>{film.title}</h2>
                                            <p>{film.description}</p>
                                            <p>
                                                <Link to={'/film/:id'}>{film.id}</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )

                })}
                <Route exact path="/film/:id" component={FilmId}>

                </Route>
            </>
        )
    }
}


export default Films