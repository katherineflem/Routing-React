import React, {Component} from 'react'

class FilmId extends Component{
    constructor(props){
        super(props);
        this.state={
            films:[]
        }
    }
componentDidMount(){
    console.log(this.props.match.params)
}

render(){
    return(
        <div className="row">
        <h3>Film</h3>
        </div>

    )
}

}
export default FilmId