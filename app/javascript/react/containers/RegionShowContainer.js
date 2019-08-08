import React, { Component } from "react"
import { Link } from "react-router-dom"
import WhiskyRegionsContainer from './WhiskyRegionsContainer'
import CommentTile from '../components/CommentTile'


class RegionShowContainer extends Component {
    constructor(props) {
      super(props)
      this.state = {
        regionObject: {},
        commentsObject: []
      }
      this.addNewComment = this.addNewComment.bind(this)
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

    addNewComment(formPayload) {
      let regionName = this.props.match.params.id
      fetch(`/api/v1/regions/${regionName}/comments`, {
        method: 'POST',
        body: JSON.stringify(formPayload),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          if (response.ok) {
            return response;
          } else {
            let errorMessage = `${response.status} (${response.statusText})`,
             error = new Error(errorMessage);
            throw(error);
          }
        })
        .then(response => response.json())
        .then(comment => {
          let allComments = this.state.commentsObject
          this.setState({ commentsObject: allComments.concat(comment) })
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
      }


    render(){
      let comments = this.state.commentsObject.map(comment => {
        return(
          <CommentTile
            key={comment.id}
            id={comment.id}
            comment={comment}
          />
        )
      })

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
        {comments}
        </div>

      )
    }
}

export default RegionShowContainer
