'use strict'

// Node Modules
import React from 'react'
import underscore from 'underscore'

const _ = underscore;
const window = window || {};

const NavItem = ( props )=> {
  const { activeID, data } = props;
  return <li><a className={ activeID === data.slug ? 'active lnk lnk-nav' : 'lnk lnk-nav' } href={ '/restaurant/' + data.slug } rel="bookmark">{ data.title }</a></li>;
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
    return (<nav id="navigation" className={ expose ? 'nav nav-open' : 'nav' }>
      <div className="nav-top">
        <ul className="wrapper list-unstyled">
          <li className="locations"><a href="/restaurant/locations" rel="bookmark" className="lnk lnk-nav"><span>Two Locations in the Austin Area</span></a></li>
          <li className="hours"><a href="/restaurant/locations" rel="bookmark" className="lnk lnk-nav"><span>Open Tues. - Sun. 8am to 8pm</span></a></li>
        </ul>
      </div>
      <div className="nav-bottom"><div className="wrapper">
        <a href="/restaurant" className="logo logo-default"><span className="sr-only">The Vegan Nom</span></a>
        <ul className="list-unstyled list-nav">
          { navigation.map( ( data, index )=> <NavItem key={ 'react.nav.' + data.id + '.' + index } activeID={ activeID } data={ data } /> ) }
        </ul>
        <a href="/restaurant" className="lnk lnk-toggle-nav" onClick={ this.toggle }><span className="ico ico-navicon"><span className="sr-only">Expose Menu</span></span></a>
      </div></div>
    </nav>);
  }

  toggle( e ) {
    if ( window.innerWidth > 991 ) return this;
    e.preventDefault();
    this.setState({
      expose: !this.state.expose
    });
  }
}
