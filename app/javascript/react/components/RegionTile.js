import React from "react"
import { Link } from "react-router-dom"

const RegionTile = props => {
  return(
      <Link to={`/regions/${props.id}`}>
        <path  d={props.svg} id={props.code} name={props.name}>
        </path>
      </Link>
  )
}

export default RegionTile
