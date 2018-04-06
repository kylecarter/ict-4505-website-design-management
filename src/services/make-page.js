'use strict'

// Node Modules
import React from 'react'
import underscore from 'underscore'
const _ = underscore;

export default ( title, description, content, props )=> {
  return (`<!DOCTYPE html><html class="no-js" lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <meta name="description" content="${ description }" />
      <title>${ title ? title : 'Kyle A. Carter' }</title>
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Roboto+Slab" rel="stylesheet" />
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />
      <link href="/css/stylesheet.css" rel="stylesheet" />
    </head>
    <body>
      <div id="app">${ content }</div>
      <script>
        window.__PROJECTS_INITIAL_STATE__ = ${ JSON.stringify( props ).replace( /</g, '\\u003c' ) };
        document.documentElement.className = document.documentElement.className.replace( 'no-js', 'js' );
      </script>
      <script src="/js/components.js"></script>
    </body>
  </html>`);
}
