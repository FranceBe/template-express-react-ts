import Home from 'containers/Home'
import { Routable } from 'types/route'

export const routes: Routable[] = [
  {
    component: Home,
    exact: true,
    path: '/',
  },
]
