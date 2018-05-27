'use strict'

// Node Modules
import React from 'react'

export default ()=> {
  return (<footer id="footer">
    <section className="footer-top"><div className="wrapper">
      <div className="footer-social">
        <h2 className="h4 text-uppercase">Connect with Kyle</h2>
        <ul className="list-inline">
          <li><a href="https://github.com/kylecarter" className="fab fa-github-alt lnk lnk-white" rel="bookmark"><span className="sr-only">Follow me on Github</span></a></li>
          <li><a href="https://twitter.com/kyleacarter" className="fab fa-twitter lnk lnk-white" rel="bookmark"><span className="sr-only">Follow Kyle on Twitter</span></a></li>
        </ul>
      </div>
    </div></section>
    <div className="footer-bottom"><div className="wrapper">
      <h6 className="p">&copy; 2018 Kyle A. Carter</h6>
    </div></div>
  </footer>);
}
