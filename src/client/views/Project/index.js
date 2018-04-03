'use strict'

// Node Modules
import React from 'react'
import underscore from 'underscore'

// Source > Client > Components > Project
import Project from '../../components/Project'
import Navigation from '../../components/Navigation'

const _ = underscore;

export default class ProjectPage extends React.Component {
  constructor( props ) {
    super( props );
    this.state = _.extend( {}, props );
  }

  render() {
    const { project, navigation } = this.state;
    if ( project ) {
      return (<div id="main" className="project-view">
        <Navigation navigation={ navigation } activeID={ project.id } />
        <main role="main" className="content" id="content">
          <Project { ...project } viewMode="default" />
        </main>
      </div>);
    } else {
      return (<div id="main" className="project-view">
        <Navigation navigation={ navigation } />
        <main role="main" className="content" id="content">
          <h1>404, project not found</h1>
          <p>Please use the navigation links to view a project.</p>
        </main>
      </div>);
    }
  }
}
