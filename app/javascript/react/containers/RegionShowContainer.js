import React, { Component } from "react"
import { Link } from "react-router-dom"
import WhiskyRegionsContainer from './WhiskyRegionsContainer'

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
      console.log(this.state.regionObject)
      return(

        <div className="info">

        <Link className="button" to={`/`}>
          <div className="link">Back</div>
        </Link>

        <center>
        <WhiskyRegionsContainer
          region={this.state.regionObject}
        />
        </center>
        </div>

      )
    }
}

export default RegionShowContainer
