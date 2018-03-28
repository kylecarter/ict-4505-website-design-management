'use strict'

// Node Modules
import { matchPath } from 'react-router-dom'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import underscore from 'underscore'
import React from 'react'

// Application > Server
import ROUTES from './routes'

// Application > Services
import MakePage from '../services/make-page'
import GetApi from '../services/get-api'

// Client > Routes
import Routes from '../client/routes'

// Client > Views
import { FiveHundredErrors } from '../client/views'

const _ = underscore;

export default ( req, res )=> {
  const MATCH = ROUTES.reduce( ( acc, route )=> matchPath( req.url, { path: route, exact: true } ) || acc, null );
  const DJANGO = req.protocol + '://' + process.env.DJANGO_HOST + ':' + process.env.DJANGO_PORT;

  let status = 200;
  if ( !MATCH ) status = 404;

  let title = null;
  let api = null;
  switch( true ) {
    case ( !MATCH ):
      title = "Page Not Found";
      api = DJANGO + '/api/v1/projects';
    default:
      title = 'Kyle A. Carter | ICT Website Design and Management (online) | Spring 2018';
      api = DJANGO + '/api/v1/projects';
      break;
  }

  GetApi.handler( req, res, DJANGO + '/api/v1/verify' ).then( resp => console.log( resp.data ) ).catch( err => console.log( err ) );

  return GetApi.handler( req, res, api ).then( resp => {
    const PROPS = _.extend( {}, resp.data );
    let context = {}

    let content = ReactDOMServer.renderToString(
      <StaticRouter context={ context } location={ req.url }>
        <Routes { ...PROPS } />
      </StaticRouter>
    );

    return res.status( 200 ).send( MakePage( title, content, PROPS ) );
  }).catch( err => {
    console.log( err );
    return res.status( 503 ).send( 'Internal Server Error.' );
  });
}
