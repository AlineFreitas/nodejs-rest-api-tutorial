const router = require('express').Router(); // eslint-disable-line new-cap
const customersController = require('../controllers/customers_controller');

router.post('/', customersController.create);

module.exports= router;