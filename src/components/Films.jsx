import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Films extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: []
        }
    }

    componentDidMount() {
        // console.log(this.props.match)
        fetch("https://ghibliapi.herokuapp.com/films") //gets this endpoint
            .then(res => res.json()) //converts json to javascript
            .then(film => { this.setState({ films: film }) })
    }

    render() {
        return (

            <>
                <div className="row d-flex justify-content-center">
                    <h3 className="text-center mb-2">Films</h3>
                </div>
        
                {this.state.films.map((film) => {
                    //map through the state
                    return (
                        <div key={film.id} title={film.title} className="container d-flex justify-content-center">
                            <div className="row">
                                <div className="column md-12">
                                    <div className="card bg-light border-dark mb-5">
                                        <div className="card-body">
                                            <h2>{film.title}</h2>
                                            <p>{film.description}</p>
                                            <Link to={`/films/${film.id}/details`}className="btn btn-secondary">Get Details</Link>
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