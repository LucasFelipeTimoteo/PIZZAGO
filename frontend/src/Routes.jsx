import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Home from './pages/Home'
import WizardForm from './pages/WizardForm'

export default function Routes() {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/wizard-form" component={WizardForm} />
          
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </>
  )
}
