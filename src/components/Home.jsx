import React, { Component } from 'react'
import {  Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <>
            <div>
                <h1 className="text-center">Routing in React</h1>
            </div>
               <div className="col-md-12">
               <nav className="navbar navbar-expand-lg bg-light d-flex d-inline justify-content-center">
                   <div className="btn-group d-flex justify-space-around">
                       <Link className="btn btn-primary border-light" to={"/"}>Go Home</Link>

                       <Link className="btn btn-primary border-light" to={"/films"}>View Films</Link>

                       <Link className="btn btn-primary border-light" to={"/people"}>View People</Link>
                   </div>
               </nav>
           </div>
           </>
        )
    }

}


export default Home