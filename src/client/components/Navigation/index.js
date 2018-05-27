'use strict'

// Node Modules
import React from 'react'
import underscore from 'underscore'

const _ = underscore;
const window = window || {};

const NavItem = ( props )=> {
  const { activeID, data } = props;
  return <li><a className={ activeID === data.id ? 'active' : '' } href={ '/project/' + data.id } rel="bookmark">{ data.title }</a></li>;
}

export default class Navigation extends React.Component {
  constructor( props ) {
    super( props );
    this.state = _.extend( {
      expose: false
    }, props );
    this.toggle = this.toggle.bind( this );
  }

  render() {
    const { activeID, expose, navigation } = this.state;
    return (<nav id="navigation" className={ expose ? 'navigation nav-open' : 'navigation' }><div className="wrapper">
      <a href="/" className="lnk lnk-toggle-nav" onClick={ this.toggle }><span className="ico ico-navicon"><span className="sr-only">Expose Menu</span></span></a>
      <ul className="list-unstyled list-menu">
        <li className="menu-home"><a href="/" rel="bookmark">Home</a></li>
        { navigation.map( ( data, index )=> <NavItem key={ 'react.nav.' + data.id + '.' + index } activeID={ activeID } data={ data } /> ) }
      </ul>
    </div></nav>);
  }

  toggle( e ) {
    if ( window.innerWidth > 991 ) return this;
    e.preventDefault();
    this.setState({
      expose: !this.state.expose
    });
  }
}
