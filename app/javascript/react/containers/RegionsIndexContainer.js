import React, { Component } from "react"
import { Link } from 'react-router-dom'
import RegionTile from '../components/RegionTile'

class RegionsIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      regions: []
    }
  }

  componentDidMount() {
  fetch('/api/v1/regions')
  .then(response => {
    if (response.ok) {
      return response
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
      throw(error);
    }
  })
  .then(response => response.json())
  .then(regions => {
    this.setState({ regions: regions })
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
}

render(){
  let scotland = this.state.regions.map(region => {
      return(
        <RegionTile
        key={region.id}
        id={region.id}
        name={region.name}
        code={region.code}
        description={region.description}
        svg={region.svg}
        />
      )
    })
  return(
    <section className="region-container">
      <h1 className="title">Map of Scotland</h1>
      <svg className="box" baseProfile="tiny" fill="#7c7c7c" height="1000" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" version="1.2" viewBox="-125 270 1000 1000" width="1000" xmlns="http://www.w3.org/2000/svg">
        <g className="region">
          {scotland}
        </g>
      </svg>
    </section>
  )
  }
}

export default RegionsIndexContainer;
