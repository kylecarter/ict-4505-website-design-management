'use strict'

// Node Modules
import React from 'react'
import underscore from 'underscore'

const _ = underscore;

class Tag extends React.Component {
  constructor( props ) {
    super( props );
    this.state = _.extend( {}, props );
  }

  render () {
    const { term } = this.state;
    return (<li className={ 'lang-' + term.toLowerCase() }>{ term }</li>);
  }
}

class Project extends React.Component {
  constructor( props ) {
    super( props );
    this.state = _.extend( {}, props );
  }

  render() {
    const { description, tags, title, url } = this.state;
    return (<li><div className="project">
      <h4>{ title }</h4>
      { description && <p>{ description }</p> }
      <a href={ url }></a>
      { tags && <ul className="list-inline list-tags">{ tags.map( ( term, index )=> <Tag key={ 'key.react.' + id + '.' + index } term={ term } /> ) }</ul>}
    </div></li>)
  }
}

export default class Home extends React.Component {
  constructor( props ) {
    super( props );
    this.state = _.extend( {}, props );
  }

  render() {
    const { projects } = this.state;
    console.log( projects );
    return (<main role="main" id="main" className="home-view">
      <section className="home-marquee">
        <h3 style={{ padding: '16px' }}>ICT Website Design and Management (online) | Spring 2018</h3>
      </section>
      <div className="wrapper">
        <section className="sidebar" id="sidebar">
          <div className="sidebar-block sidebar-avatar">
            <a href="/assets/img/kylecarter_profile.JPG" role="link" rel="bookmark" target="_blank"><img className="img-responsive img-rounded" src="/assets/img/kylecarter_profile_web.JPG" alt="Kyle Carter Headshot" /></a>
            <h1>Kyle A. Carter</h1>
          </div>
          <div className="sidebar-block sidebar-bio">
            <p style={{ marginBottom: 0 }}>An experienced front end developer versed driven by a desire to create scalable, innovative web applications that inspire and promote success</p>
          </div>
          <div className="sidebar-block sidebar-meta">
            <ul className="list-unstyled list-meta">
              <li className="ico ico-users">Web Developer</li>
              <li><a href="https://www.google.com/maps/place/Austin,+TX/@30.3076863,-97.8934865,11z/data=!3m1!4b1!4m5!3m4!1s0x8644b599a0cc032f:0x5d9b464bd469d57a!8m2!3d30.267153!4d-97.7430608" className="ico ico-map-marker-alt" role="link" rel="bookmark">Austin, TX</a></li>
              <li><a href="http://www.kylecarter.info" className="ico ico-link" rel="bookmark" role="link">http://www.kylecarter.info</a></li>
            </ul>
          </div>
        </section>
        <section className="content" id="content">
          <h2>Projects</h2>
          { !projects && <p>There are no projects to view yet.</p> }
          { projects && projects.length > 0 && <ul className="list-unstyled list-projects">
            { projects.map( ( project, index )=> <Project key={ 'key.react.' + project.id + '.' + index } { ...project } /> ) }
          </ul> }
          { projects && projects.length < 1 && <p>There are no projects to view yet.</p> }
        </section>
      </div>
    </main>);
  }
}
