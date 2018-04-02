'use strict'

// Node Core
import path from 'path'

// Node Modules
import cors from 'cors'
import express from 'express'
import httpProxy from 'http-proxy'
import session from 'client-sessions'
import cookieParser from 'cookie-parser'

// Application > Server
import router from '../router'

const ASSETS = express.static( path.join( __dirname.replace( /\/build\/server\/*$/, '' ), '/backend/assets' ) );
const PROXY = httpProxy.createProxyServer({
  target: 'http://' + process.env.DJANGO_HOST + ':' + process.env.DJANGO_PORT,
  ws: true
});
const APP = express();

APP.use( cors() );
APP.use( ASSETS );
APP.use( cookieParser() );

APP.use(session({
  cookieName: 'session',
  secret: 'poolprosdealerspoolpros',
  duration: 30 * 60 * 1000,
  activeDuration: 1000 * 60 * 5
}));

// Proxy admin
APP.use('/admin', (req, res) => {
  PROXY.web(req, res, {target: 'http://' + process.env.DJANGO_HOST + ':' + process.env.DJANGO_PORT + '/admin'});
});

// All other routes
APP.get( '*', router );

export default APP;
