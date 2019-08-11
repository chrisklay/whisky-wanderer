import React, { Component } from "react"
import { Link } from "react-router-dom"
import WhiskyRegionsContainer from './WhiskyRegionsContainer'
import CommentShowContainer from './CommentShowContainer'

class RegionShowContainer extends Component {
    constructor(props) {
      super(props)
      this.state = {
        regionObject: {}
      }
    }

    componentDidMount(){
      let regionName = this.props.match.params.id
      fetch(`/api/v1/regions/${regionName}`)
        .then(response => {
          if(response.ok){
            return response;
          } else {
            let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
            throw(error);
          }
        })
        .then(response => response.json())
        .then(region => {
          this.setState({ regionObject: region })
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

    render(){
      return(
        <div className="info">

        <Link className="button" to={`/`}>
          <div className="link">Back</div>
        </Link>

        <center>
        <h2>The Council Area: {this.state.regionObject.name}</h2>
        <br></br>
        <WhiskyRegionsContainer
          region={this.state.regionObject}
          addNewComment={this.addNewComment}
        />
        </center>
        <CommentShowContainer
          region={this.props.match.params.id}
          comment={this.state.commentsObject}
        />
        </div>

      )
    }
}

export default RegionShowContainer
