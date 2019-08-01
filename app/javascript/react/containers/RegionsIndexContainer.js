import React, { Component } from "react"
import { Link } from 'react-router-dom'
import RegionTile from '../components/RegionTile'
require('../../../assets/Scotland.svg');

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
        description={region.description}
        svg={region.svg}
        />
      )
    })
  return(
    <section className="region-container">
      <h1 className="title">Map of Scotland</h1>
      <p>Select a region:</p>
      <div className="scotland">
        {scotland}
      </div>
    </section>
  )
  }
}

export default RegionsIndexContainer;