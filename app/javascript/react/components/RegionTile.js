import React from "react"
import { Link } from "react-router-dom"

const RegionTile = props => {
  return(
    <div>
    <a href={`/regions/${props.id}`}>
      <path name={props.name} d={props.svg}>
        <title>{props.name}</title>
      </path>
    </a>
    </div>
  )
}

export default RegionTile
