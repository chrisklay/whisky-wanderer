import React from "react"
import { Link } from "react-router-dom"

const RegionTile = props => {
  return(
      <a href={`/regions/${props.id}`}>
        <path  d={props.svg} id={props.code} name={props.name}>
        </path>
      </a>
  )
}

export default RegionTile
