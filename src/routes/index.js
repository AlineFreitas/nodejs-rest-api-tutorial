const router = require('express').Router(); // eslint-disable-line new-cap

router.get('/', (request, response) => {
  return response.send({
    message: 'You\'ve reached GET '/' endpoint on this server.',
  });
});

router.use('/products', require('./products'));
router.use('/customers', require('./customers'));
router.use('/orders', require('./orders'));

module.exports= router;