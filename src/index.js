'use strict'

// Node Modules
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

// Source > Routes
import Routes from './client/routes'

ReactDOM.hydrate((
  <Router>
    <Routes { ...window.__PROJECTS_INITIAL_STATE__ } />
  </Router>
), document.getElementById( 'app' ));
