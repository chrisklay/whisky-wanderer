import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import RegionsIndexContainer from '../containers/RegionsIndexContainer'
import RegionShowContainer from '../containers/RegionShowContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={RegionsIndexContainer} />
        <Route exact path="/regions/:description" component={RegionShowContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
