import React, { Component } from "react"
import { Link } from "react-router-dom"

class RegionShowContainer extends Component {
    constructor(props) {
      super(props)
      this.state = {
        regionObject: {}
      }
    }

    componentDidMount(){
      let regionName = this.props.match.params.id
      fetch(`/api/v1/regions/${regionName}`)
        .then(response => {
          if(response.ok){
            return response;
          } else {
            let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
            throw(error);
          }
        })
        .then(response => response.json())
        .then(region => {
          this.setState({ regionObject: region })
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

    render(){
      return(
        <div><center>
          <div>{this.state.regionObject.name} is {this.state.regionObject.description}</div>
          <Link to={`/`}>
            <div>Back</div>
          </Link>
        </center></div>
      )
    }
}

export default RegionShowContainer
