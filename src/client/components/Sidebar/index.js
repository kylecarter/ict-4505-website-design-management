'use strict'

// Node Modules
import React from 'react'

export default ()=> {
  return (<section className="sidebar" id="sidebar">
    <div className="sidebar-block sidebar-avatar">
      <a href="/static/project_img/kylecarter_profile.JPG" rel="bookmark" target="_blank"><img className="img-responsive img-rounded" src="/static/project_img/kylecarter_profile_web.JPG" alt="Kyle Carter Headshot" /></a>
      <h2>Kyle A. Carter</h2>
    </div>
    <div className="sidebar-block sidebar-bio">
      <p style={{ marginBottom: 0 }}>An experienced front end developer versed driven by a desire to create scalable, innovative web applications that inspire and promote success</p>
    </div>
    <div className="sidebar-block sidebar-meta">
      <ul className="list-unstyled list-meta">
        <li className="ico ico-users">Web Developer</li>
        <li><a href="https://www.google.com/maps/place/Austin,+TX/@30.3076863,-97.8934865,11z/data=!3m1!4b1!4m5!3m4!1s0x8644b599a0cc032f:0x5d9b464bd469d57a!8m2!3d30.267153!4d-97.7430608" className="ico ico-map-marker-alt" rel="bookmark">Austin, TX</a></li>
        <li><a href="http://www.kylecarter.info" className="ico ico-link" rel="bookmark">http://www.kylecarter.info</a></li>
      </ul>
    </div>
  </section>);
}
