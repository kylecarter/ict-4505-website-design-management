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
import { FiveHundredErrors, FourOhFour, Home, Project } from '../views'

// Source > Client > Components
import Footer from '../components/Footer'

const _ = underscore;

export default class Routes extends React.Component {

  constructor( props ) {
    super( props );
    this.state = _.extend( {}, props );
  }

  render() {
    return (<article id="article">
      <Switch>
        <Route path="/" exact render={ ()=> (<Home projects={ this.state.projects || [] } />) } />
        <Route path="/project/:id" exact render={ ()=> (<Project project={ this.state.project || null } navigation={ this.state.navigation } />) } />
        <Route render={ ()=> <FourOhFour projects={ this.state.projects || [] } /> } />
      </Switch>
      <Footer />
    </article>);
  }
}
