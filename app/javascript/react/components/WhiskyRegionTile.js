import React from "react"

const WhiskyRegionTile = props => {
  return(
    <div>
      <h2>The Whisky Region: {props.title}</h2>
      <p>{props.description}</p>
    </div>
  )
}

export default WhiskyRegionTile
