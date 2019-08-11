import React from "react"
import { Link } from "react-router-dom"

const CommentTile = props => {
  return(
    <div className="comment">
      <p>{props.comment.description} </p>
    </div>
  )
}

export default CommentTile
