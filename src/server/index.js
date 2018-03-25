'use strict'
import app from './app'
const PORT = process.env.PORT || 3000;
app.listen( PORT );
console.log(`Application is listening at port ${PORT}.`);
