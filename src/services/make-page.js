'use strict'

// Node Modules
import React from 'react'
import underscore from 'underscore'
import ReactDOMServer from 'react-dom/server'

const _ = underscore;

class Page extends React.Component {
  constructor( props ) {
    super( props );
    this.state = _.extend( {}, props );
  }

  render() {
    const { title, content, data } = this.state;
    return (<html className="no-js" lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>{ title ? title : 'Kyle A. Carter' }</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet" />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />
        <link href="/css/stylesheet.css" rel="stylesheet" />
      </head>
      <body>
        <div id="app">{ content }</div>
        <script type="text/javascript">
          window.__POOLPROS_INITIAL_STATE__ = { JSON.stringify( data ).replace( /</g, '\\u003c' ) };
          document.documentElement.className = document.documentElement.className.replace( 'no-js', 'js' );
        </script>
        <script type="text/javascript" src="/js/components.js"></script>
      </body>
    </html>);
  }
}


export default ( title, content, props )=> {
  return '<!DOCTYPE html>' + ReactDOMServer.renderToString(<Page title={ title } content={ content } data={ props } /> );
}
