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
    return (<main className="home-view">
      <h1 class="h1"><span class="wrapper"> ICT Website Design and Management (online) | Spring 2018</span></h1>
      <article className="wrapper">
        <Sidebar />
        <section className="content" id="content">
          <h2>Projects</h2>
          { !projects && <p>There are no projects to view yet.</p> }
          { projects && projects.length > 0 && <ul className="list-unstyled list-projects">
            { projects.map( ( project, index )=> <Project key={ 'key.react.' + project.id + '.' + index } viewMode="list" { ...project } /> ) }
          </ul> }
          { projects && projects.length < 1 && <p>There are no projects to view yet.</p> }
        </section>
      </article>
    </main>);
  }
}
