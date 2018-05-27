'use strict'

// Node Modules
import { matchPath } from 'react-router-dom'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import underscore from 'underscore'
import slugify from 'slugify'
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
  const DJANGO = 'http://' + process.env.DJANGO_HOST + ':' + process.env.DJANGO_PORT;

  let status = 200;
  if ( !MATCH ) status = 404;

  let classList = [];
  let title = null;
  let api = null;
  switch( true ) {
    case MATCH && MATCH.url && MATCH.url === '/':
      title = 'ICT Website Design and Management (online) | Spring 2018';
      classList = [ 'front' ];
      api = DJANGO + '/api/v1/projects';
      break;
    case MATCH && MATCH.url && /project\/[0-9]+/.test( MATCH.url ):
      classList = [ 'model-project' ];
      api = DJANGO + '/api/v1/project/' + MATCH.params.id;
      break;
    case MATCH && MATCH.url && /restaurant(\/\w+)*/.test( MATCH.url ):
      api = DJANGO + '/api/v1/restaurant/page/' + MATCH.params.page;
      switch ( MATCH.params.page ) {
        case 'about':
          title = 'About | ';
          break;
        case 'contact':
          title = 'Contact | ';
          break;
        case 'catering':
          title = 'Catering | ';
          break;
        case 'contact':
          title = 'Contact | ';
          break;
        case 'menu':
          title = 'Menu | ';
          break;
        case 'locations':
          title = 'Locations | ';
          break;
        case 'specials':
          title = 'Specials | ';
          break;
        case 'styleguide':
          title = 'Styleguide | ';
          api = DJANGO + '/api/v1/restaurant/pages';
          break;
        default:
          title = '';
          break;
      }
      title += 'the Veagan Nom';
      classList = [ 'restaurant', 'restaurant-' + ( MATCH.params.page ? MATCH.params.page : 'front' ) ];
      break;
    default:
      classList = [ 'four-oh-four' ];
      title = "Page Not Found";
      api = DJANGO + '/api/v1/projects';
  }

  let description = "Welcome to the class project site for Kyle A. Carter.";

  return GetApi.handler( req, res, api ).then( resp => {
    const PROPS = _.extend( {}, resp.data );
    let context = {}

    let content = ReactDOMServer.renderToString(
      <StaticRouter context={ context } location={ req.url }>
        <Routes { ...PROPS } />
      </StaticRouter>
    );

    if ( MATCH && MATCH.url && /project\/[0-9]+/.test( MATCH.url ) ) {
      title = PROPS.project ? PROPS.project.title : '404';
      description = PROPS.project && PROPS.project.description ? PROPS.project.description : description;
      classList = PROPS.project ? classList.concat( [ 'project-' + PROPS.project.id, ( 'project-' + slugify( PROPS.project.title ) ).toLowerCase(), PROPS.project.landing_page ? 'full-width' : 'two-column' ] ) : classList.concat( [ 'four-oh-four' ] );
    }

    return res.status( 200 ).send( MakePage( title, description, content, PROPS, classList ) );
  }).catch( err => {
    console.log( err );
    return res.status( 503 ).send( 'Internal Server Error.' );
  });
}
