'use strict'

// Node Core
import path from 'path'

// Node Modules
import cors from 'cors'
import csrf from 'csurf'
import express from 'express'
import session from 'client-sessions'
import cookieParser from 'cookie-parser'

// Application > Server
import router from '../router'

const APP = express();
const ASSETS = express.static( path.join( __dirname.replace( /\/build\/server\/*$/, '' ), '/public' ) );

APP.use( cors() );
APP.use( ASSETS );
APP.use( cookieParser() );

APP.use(session({
  cookieName: 'session',
  secret: 'poolprosdealerspoolpros',
  duration: 30 * 60 * 1000,
  activeDuration: 1000 * 60 * 5
}));

APP.use(csrf({ cookie: true }));
APP.use(( req, res, next )=> {
  var token = req.csrfToken();
  res.cookie( 'XSRF-TOKEN', token );
  res.locals.csrfToken = token;
  next();
});

APP.get( '*', router );

export default APP;
