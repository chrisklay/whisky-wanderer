import React from "react"
import { Link } from "react-router-dom"

const RegionTile = props => {
  return(
    <div>
      <Link to={`/regions/${props.description}`}>
        {props.name}
      </Link>
    </div>
  )
}

export default RegionTile
