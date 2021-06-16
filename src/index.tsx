import '../assets/images/code.favico.png'

import App from 'containers/App'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from 'styles/global-styles'

const MainApp = () => (
  <Router>
    <GlobalStyle />
    <App />
  </Router>
)

ReactDOM.render(<MainApp />, document.getElementById('root'))
