const express = require('express');

const server = express();

server.get('/', (request, response, next) => {
  return response.send({
    message: "You've reached GET '/' endpoint on this server."
  })
});

module.exports = server;