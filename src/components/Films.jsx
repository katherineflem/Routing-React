import React, { Component } from "react";
import { BrowserRouter as Link } from 'react-router-dom';

class Films extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: []
        }
    }

    componentDidMount() {
        // console.log(this.props.match)
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
                        <div key={film.id} className="container d-flex justify-content-center">
                            <div className="row">
                                <div className="column md-12">
                                    <div className="card bg-light border-dark mb-5">
                                        <div className="card-body">
                                            <h2>{film.title}</h2>
                                            <p>{film.description}</p>
                                            <Link to={`/films/${film.id}/details`}>{film.id}</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                })}

            </>
        )
    }
}


export default Films