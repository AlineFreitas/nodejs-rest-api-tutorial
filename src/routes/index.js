const router = require('express').Router();

router.get('/', (request, response) => {
  return response.send({
    message: "You've reached GET '/' endpoint on this server."
  })
});

module.exports= router;