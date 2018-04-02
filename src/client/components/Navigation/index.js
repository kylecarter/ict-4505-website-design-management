'use strict'

// Node Modules
import React from 'react'

const NavItem = ( data, index )=> {
  return <li key={ 'react.nav.' + data.id + '.' + index }><a href={ '/project' + data.id } rel="bookmark" role="link">{ data.title }</a></li>;
}

export default ( props )=> {
  return (<nav role="navigation" id="navigation" className="navigation">
    <ul className="list-unstyled list-menu">
      <li className="menu-home"><a href="/" rel="bookmark" role="link">Home</a></li>
      { props.navigation.map( NavItem ) }
    </ul>
  </nav>);
}
