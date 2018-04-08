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

    return (<div className="project-view">
      <Navigation navigation={ navigation } activeID={ project.id } />
      <main className="content" id="content">
        { project && <Project { ...project } viewMode="default" /> }
        { !project && <p>Please use the navigation links to view a project.</p> }
      </main>
    </div>);
  }
}
