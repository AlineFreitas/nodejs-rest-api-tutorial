'use strict'

const express = require('express');
const app = express();

const server = require('./src/server');

const port = process.env.PORT || 3333;

console.log(`Starting app on port ${port}`);
app.use(server);
app.listen(port);