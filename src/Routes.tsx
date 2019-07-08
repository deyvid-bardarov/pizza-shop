import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Container } from "@material-ui/core"

import Home from "pages/Home"
import Login from "pages/Login"
import Register from "pages/Register"
import Navbar from "components/Navbar"
import Notifications from "components/Notifications"

const Routes = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Notifications />
        <Container className="mt-3">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </Container>
      </>
    </Router>
  )
}

export default Routes
