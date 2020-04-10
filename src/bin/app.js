const app = require('express')();

const server = require('./server');

app.use(server);

module.exports= app;