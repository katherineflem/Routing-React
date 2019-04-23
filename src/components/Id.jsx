import React, { Component } from 'react'
class FilmId extends Component {
    constructor(props) {
        super(props);
        this.state = {
            film: {},
        }
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(film => {
                this.setState({ film })
                // console.log({ film })
            })
    }



    render() {
        return (
            <>
                <div>
                    <h3>Film Details</h3>
                </div>
                <div className="container bg-light">
                    <div className="card-header bg-dark text-white">Title: {this.state.film.title}</div>
                    <div className="card-body">Description: {this.state.film.description}
                        <div className="card-text">
                            <ul>
                                <li>Director: {this.state.film.director}</li>
                                <li>Producer: {this.state.film.producer}</li>
                                <li>Release-Date: {this.state.film.release_date}</li>
                                <li> rt-score: {this.state.film.rt_score}</li>
                            </ul>                
                    </div>
                    </div>
                    </div>


            </>
                )
        
        
            }
        }
        
export default FilmId