'use strict'

// Node Modules
import request from 'axios'

export default {
  handler( req, res, api ) {
    if ( !api ) {
      return (new Promise( ( resolve, reject )=> {
        resolve( {} );
        reject( 'There was a problem processing your request.' );
      }));
    }
    return request.get( api );
  }
}
