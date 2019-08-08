import React from "react"
import { Link } from "react-router-dom"

const CommentTile = props => {
  let date = props.comment.created_at.slice(0, 10)
  let time = props.comment.created_at.slice(11, 19)
  return(
    <div className="comment">
      <p><u>Posted at: {date} {time}</u></p>
      <p>{props.comment.description} </p>
    </div>
  )
}

export default CommentTile
