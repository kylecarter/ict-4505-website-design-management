'use strict';

// Node Modules
import React from 'react'
import underscore from 'underscore'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'

// Source > Client > Views
import {
  FiveHundredErrors,
  FourOhFour,
  Home,
  LandingPage,
  Project
} from '../views'

// Source > Client > Components
import Footer from '../components/Footer'

const _ = underscore;

export default class Routes extends React.Component {

  constructor( props ) {
    super( props );
    this.state = _.extend( {}, props );
  }

  render() {
    return (<div id="app">
      <div className="react-app"><Switch>
        <Route path="/" exact render={ ()=> (<Home projects={ this.state.projects || [] } />) } />
        <Route path="/project/:id" exact render={ ()=> {
          if ( this.state.project && this.state.project.landing_page ) {
            return (<LandingPage project={ this.state.project || null } navigation={ this.state.navigation } />)
          }
          return (<Project project={ this.state.project || null } navigation={ this.state.navigation } />);
        }} />
        <Route render={ ()=> <FourOhFour projects={ this.state.projects || [] } /> } />
      </Switch></div>
      <Footer />
    </div>);
  }
}
