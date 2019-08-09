import React, { Component } from "react"
import WhiskyRegionTile from '../components/WhiskyRegionTile'
import FormCommentContainer from './FormCommentContainer'

class WhiskyRegionsContainer extends Component {
    constructor(props) {
      super(props)
      this.state = {
        whiskyRegionObject: []
      }
    }

    componentDidMount(){
      let regionName = "/w/api.php?action=query&format=json&origin=*&prop=extracts&titles=Scotch%20whisky%7CIslay%20whisky%7CLowland%20single%20malts%7CCampbeltown%20single%20malts%7CSpeyside%20single%20malt%7CList%20of%20Highland%20single%20malts%7CIsland%20single%20malt&exsentences=5&exintro=1&explaintext=1"
      fetch(`https://en.wikipedia.org${regionName}`)
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
        .then(whiskyRegion => {
          let whiskyRegionsObject = whiskyRegion.query.pages
          var whiskyRegionsArray = []
          for (var key in whiskyRegionsObject) {
              whiskyRegionsArray.push(whiskyRegionsObject[key]);
          }
          this.setState({ whiskyRegionObject: whiskyRegionsArray })
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

    render(){
      let regionsTiles = this.state.whiskyRegionObject.map (region => {
        if (region.title.includes(this.props.region.description)) {
          return(
            <WhiskyRegionTile
            key={region.pageid}
            id={region.pageid}
            title={this.props.region.description}
            description={region.extract}
             />
          )
        }
      })

      return(
        <div className="text">
          <div>{regionsTiles}</div>
          <div>
          <FormCommentContainer
            region={this.props.region}
            addNewComment={this.props.addNewComment}
          />
          </div>
        </div>
      )
    }
}

export default WhiskyRegionsContainer
