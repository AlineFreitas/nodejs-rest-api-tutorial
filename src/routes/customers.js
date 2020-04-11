const router = require('express').Router();

router.post('/', (request, response) => {
  return response.status(200).json({
    message: "You've reached POST /customers endpoint on this server"
  })
});

module.exports= router;