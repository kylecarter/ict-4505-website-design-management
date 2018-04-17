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
      <Navigation navigation={ navigation } activeID={ project && project.id || '' } />
      <main className="content" id="content">
        { project && <Project { ...project } viewMode="default" /> }
        { !project &&
          <header className="project-header">
            <h1 className="h1 page-title">404, project not found.</h1>
            <p className="project-description">Please use the navigation links to view a project.</p>
          </header>
        }
      </main>
    </div>);
  }
}
