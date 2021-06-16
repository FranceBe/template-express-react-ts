import React from 'react'
import { RouteComponentProps, RouteProps } from 'react-router'

export interface Routable extends RouteProps {
  component: React.FC<RouterProps>
  routes?: string[]
}

export interface RouterProps extends RouteComponentProps {
  routes?: string[]
}
