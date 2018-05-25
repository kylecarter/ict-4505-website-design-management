'use strict'

export default ( num, no_symbol = false )=> {
    if ( isNaN( num ) ) return '';
    return no_symbol ? num.toLocaleString( 'en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'symbol' } ).replace( /^\$/g, '' ) : num.toLocaleString( 'en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'symbol' });
}