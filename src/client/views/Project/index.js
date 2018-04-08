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
        <section role="main" className="content" id="content">
          <Project { ...project } viewMode="default" />
        </section>
      </div>);
    } else {
      return (<div id="main" className="project-view">
        <Navigation navigation={ navigation } />
        <section role="main" className="content" id="content">
          <p>Please use the navigation links to view a project.</p>
        </section>
      </div>);
    }
  }
}
