'use strict'

// Node Modules
import React from 'react'

export default ()=> {
  return (<footer role="footer" id="footer">
    <section className="footer-top"><div className="wrapper">
      <div className="footer-social">
        <strong className="text-uppercase">Connect with Kyle</strong>
        <ul className="list-inline">
          <li><a href="https://github.com/kylecarter" className="fa fa-github lnk lnk-white" rel="bookmark" role="link"><span className="sr-only">Follow me on Github</span></a></li>
          <li><a href="https://twitter.com/kyleacarter" className="fa fa-twitter lnk lnk-white" rel="bookmark" role="link"><span className="sr-only">Follow Kyle on Twitter</span></a></li>
        </ul>
      </div>
    </div></section>
    <section className="footer-bottom"><div className="wrapper">
      <span>&copy; 2018 Kyle A. Carter</span>
    </div></section>
  </footer>);
}
