import React from "react"
import { Link } from "react-router-dom"

const RegionTile = props => {
  return(
    <div>
      <Link to={`/regions/${props.id}`}>
        {props.name}
      </Link>
    </div>
  )
}

export default RegionTile
