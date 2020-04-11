const router = require('express').Router();

router.get('/', (request, response) => {
  return response.send({
    message: "You've reached GET '/' endpoint on this server."
  })
});

router.use('/products', require('./products'));
router.use('/customers', require('./customers'));

module.exports= router;