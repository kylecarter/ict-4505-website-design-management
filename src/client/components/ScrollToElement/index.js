'use strict'

// Node Modules
import React from 'react'
import jQuery from 'jquery'
import underscore from 'underscore'

const $ = jQuery;
const _ = underscore;

export default class ScrollToElement extends React.Component {
  constructor( props ) {
    super( props );
    this.state = _.extend( {}, props );
    this.scroll = this.scroll.bind( this );
  }

  render() {
    return <a href={ this.state.target } rel="nofollow" className="scroll-to ico ico-chevron-down" onClick={ this.scroll }>Scroll Down</a>
  }

  scroll( e ) {
    e.preventDefault();
    $( 'html, body' ).animate({
      scrollTop: $( this.props.target ).offset().top
    }, 600);
  }
}
