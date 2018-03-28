'use strict'
import app from './app'
const PORT = process.env.PORT || 3000;
app.listen( PORT );
if ( process.env.NODE_ENV === 'production' ) {
  console.log( 'Application is running.' );
} else {
  console.log(`Application is listening at port ${PORT}.`);
}
