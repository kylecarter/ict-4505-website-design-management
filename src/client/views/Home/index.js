'use strict'

// Node Modules
import React from 'react'
import underscore from 'underscore'

const _ = underscore;

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
        <h3>ICT Website Design and Management (online) | Spring 2018</h3>
      </section>
      <div className="wrapper">
        <section className="sidebar" id="sidebar">
          <div className="sidebar-block sidebar-avatar">
            <a href="/assets/img/kylecarter_profile.JPG" role="link" rel="bookmark" target="_blank"><img className="img-responsive img-rounded" src="/assets/img/kylecarter_profile_web.JPG" alt="Kyle Carter Headshot" /></a>
            <h1>Kyle A. Carter</h1>
          </div>
          <div className="sidebar-block sidebar-bio">
            <p>An experienced front end developer versed driven by a desire to create scalable, innovative web applications that inspire and promote success</p>
          </div>
          <div className="sidebar-block sidebar-meta">
            <ul className="list-unstyled">
              <li className="ico ico-users">Web Developer</li>
              <li><a href="https://www.google.com/maps/place/Austin,+TX/@30.3076863,-97.8934865,11z/data=!3m1!4b1!4m5!3m4!1s0x8644b599a0cc032f:0x5d9b464bd469d57a!8m2!3d30.267153!4d-97.7430608" className="ico ico-map-marker-alt" role="link" rel="bookmark">Austin, TX</a></li>
              <li><a href="http://www.kylecarter.info" className="ico ico-link" rel="bookmark" role="link">http://www.kylecarter.info</a></li>
            </ul>
          </div>
        </section>
        <section className="content" id="content">
          <h2>Projects</h2>
          <ul className="list-unstyled list-projects">
            <li><div className="project">
              <h4>Project Name</h4>
              <p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>
              <ul className="list-inline list-tags">
                <li className="lang-python">Python</li>
                <li className="lang-javascript">Javascript</li>
                <li className="lang-html">HTML</li>
                <li className="lang-css">CSS</li>
                <li className="lang-sass">Sass</li>
                <li className="lang-jsx">JSX</li>
              </ul>
            </div></li>
          </ul>
        </section>
      </div>
    </main>);
  }
}
