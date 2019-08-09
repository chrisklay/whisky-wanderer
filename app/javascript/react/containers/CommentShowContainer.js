import React, { Component } from "react"
import { Link } from "react-router-dom"
import CommentTile from '../components/CommentTile'


class CommentShowContainer extends Component {
    constructor(props) {
      super(props)
      this.state = {
        commentsObject: []
      }
    }

    componentDidMount(){
      let regionID = this.props.region
      fetch(`/api/v1/regions/${regionID}/comments`)
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
        .then(comments => {
          this.setState({ commentsObject: comments })
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
        <center>
        {comments}
        </center>
        </div>

      )
    }
}

export default CommentShowContainer
