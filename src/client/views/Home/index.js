'use strict'

// Node Modules
import React from 'react'
import underscore from 'underscore'

// Source > Client > Components > Project
import Project from '../../components/Project'
import Sidebar from '../../components/Sidebar'

const _ = underscore;

export default class Home extends React.Component {
  constructor( props ) {
    super( props );
    this.state = _.extend( {}, props );
  }

  render() {
    const { projects } = this.state;
    return (<div id="main" className="home-view">
      <header className="home-marquee">
        <h1 class="h3" style={{ padding: '0 16px' }}>ICT Website Design and Management (online) | Spring 2018</h1>
      </header>
      <div className="wrapper">
        <Sidebar />
        <section role="main" className="content" id="content">
          <h2>Projects</h2>
          { !projects && <p>There are no projects to view yet.</p> }
          { projects && projects.length > 0 && <ul className="list-unstyled list-projects">
            { projects.map( ( project, index )=> <Project key={ 'key.react.' + project.id + '.' + index } viewMode="list" { ...project } /> ) }
          </ul> }
          { projects && projects.length < 1 && <p>There are no projects to view yet.</p> }
        </section>
      </div>
    </div>);
  }
}
