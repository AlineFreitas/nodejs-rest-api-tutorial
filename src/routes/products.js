const router = require('express').Router();

router.get('/', (request, response, next) =>{
  response.json(request.body);
});

module.exports= router;