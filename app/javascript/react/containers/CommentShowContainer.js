import React, { Component } from "react"
import { Link } from "react-router-dom"
import CommentTile from '../components/CommentTile'
import FormCommentContainer from './FormCommentContainer'


class CommentShowContainer extends Component {
    constructor(props) {
      super(props)
      this.state = {
        commentsObject: []
      }
      this.addNewComment = this.addNewComment.bind(this)
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

    addNewComment(formPayload) {
      let regionID = this.props.region
      fetch(`/api/v1/regions/${regionID}/comments`, {
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
          let allComments = this.state.commentsObject.concat(comment)
          this.setState({ commentsObject: allComments })
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
        <FormCommentContainer
          region={this.props.region}
          addNewComment={this.addNewComment}
        />
        <center>
        {comments}
        </center>
        </div>

      )
    }
}

export default CommentShowContainer
