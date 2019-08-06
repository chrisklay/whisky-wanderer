import React from "react"

const WhiskyRegionTile = props => {
  return(
    <div>
      <h3>The Whisky Region: {props.title}</h3>
      <p>{props.description}</p>
    </div>
  )
}

export default WhiskyRegionTile
