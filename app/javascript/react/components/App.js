import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import RegionsIndexContainer from '../containers/RegionsIndexContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={RegionsIndexContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
