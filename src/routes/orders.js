const router = require('express').Router(); // eslint-disable-line new-cap

router.post('/', (request, response) => {
  return response.status(200).json({
    message: 'You\'ve reached POST /orders endpoint',
  });
});

module.exports= router;