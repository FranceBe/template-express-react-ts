import React from 'react'
import { Redirect, Route, Switch, withRouter } from 'react-router'
import { Routable } from 'types/route'
import { routes } from 'utils/routes'

export const App: React.FC = () => (
  <Switch>
    {routes.map((route: Routable, i: number) => (
      <Route
        key={i}
        path={route.path}
        exact={route.exact}
        render={(props) => <route.component {...props} />}
      />
    ))}
    <Route exact path={'/'} />
    <Route component={() => <Redirect to={'/'} />} />
  </Switch>
)

export default withRouter(App)
