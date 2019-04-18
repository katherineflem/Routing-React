import React, {Component} from 'react'

class FilmId extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
componentDidMount(){
    console.log(this.props.match.params)
}

render(){
    return(
        <div className="row">

        </div>

    )
}

}
export default FilmId