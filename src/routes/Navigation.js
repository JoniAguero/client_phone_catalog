import React, { useEffect } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import routes from "./Routes"
import { map } from "lodash"
import { useDispatch, useSelector } from "react-redux"
import { startChecking } from "../redux/actions/authActions"

export default function Navigation() {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startChecking())
  }, [dispatch])

  return (
    <Router>
      <Switch>
        {map(routes, (route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <route.layout>
                <route.component {...props} />
              </route.layout>
            )}
          />
        ))}{" "}
      </Switch>
    </Router>
  )
}
