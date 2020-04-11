const router = require('express').Router(); // eslint-disable-line new-cap
const customersController = require('../controllers/customers_controller');

router.post('/', customersController.create);

router.get('/', customersController.list);
router.get('/:id', customersController.getById);

module.exports= router;