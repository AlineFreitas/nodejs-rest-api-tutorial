'use strict'

const app = require('./src/app');
const port = process.env.PORT || 3333;

console.log(`Starting app on port ${port}`);
app.listen(port);