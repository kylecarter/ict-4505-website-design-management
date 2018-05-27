'use strict'

// Node Modules
import React from 'react'
import underscore from 'underscore'
const _ = underscore;

export default ( title, description, content, props, classList )=> {
  return (`<!DOCTYPE html><html class="no-js" lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <meta name="description" content="${ description }" />
      <title>${ title ? title + ' | Kyle A. Carter' : 'Kyle A. Carter' }</title>
      <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i|Roboto+Slab:700|Roboto+Condensed:700,700i" rel="stylesheet" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
      <link href="/css/stylesheet.css" rel="stylesheet" />
    </head>
    <body class="${ classList.join( ' ' ) }">
      ${ content }
      <script>
        window.__PROJECTS_INITIAL_STATE__ = ${ JSON.stringify( props ).replace( /</g, '\\u003c' ) };
        document.documentElement.className = document.documentElement.className.replace( 'no-js', 'js' );
      </script>
      <script src="/js/components.js"></script>
    </body>
  </html>`);
}
