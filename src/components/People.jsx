import React, { Component } from 'react'

class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: []
        }
    }

    componentDidMount() {
        console.log(this.props.match)
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(person => { this.setState({ people: person }) })
    }

    render() {
        return (<>
            <div className="row d-flex justify-content-center">
                <h3>People</h3>
            </div>
            {this.state.people.map((person) => {
                return (
                    <div key={person.id} className="container d-flex justify-content-center">
                        <div className="row">
                            <div className="column md-12">
                                <div className="card bg-light border-dark mb-5">
                                    <div className="card-body">
                                        <h2>{person.name}</h2>
                                        <ul>
                                            <li>{person.gender}</li>
                                            <li>{person.age}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
        )
    }
}




export default People