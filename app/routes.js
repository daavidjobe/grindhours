import React from 'react'
import { Switch, Route } from 'react-router'
import App from './containers/App'
import StartPage from './containers/StartPage'

export default () => (
  <App>
    <Switch>
      <Route path="/" component={StartPage} />
    </Switch>
  </App>
)
