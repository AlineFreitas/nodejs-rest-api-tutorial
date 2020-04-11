const router = require('express').Router(); // eslint-disable-line new-cap

const ordersController = require('../controllers/orders_controllers');

router.post('/', ordersController.create);

router.get('/', ordersController.list);

module.exports= router;