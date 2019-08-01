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
        .then(regionHash => {
          this.setState({ regionObject: regionHash })
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

    render(){
      return(
        <div>
          <Link to={`/`}>
            <div>Back</div>
          </Link>
        </div>
      )
    }
}

export default RegionShowContainer
