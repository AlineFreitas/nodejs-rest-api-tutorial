const router = require('express').Router(); // eslint-disable-line new-cap
const customersController = require('../controllers/customers_controller');

router.post('/', customersController.create);

router.get('/', customersController.list);
router.get('/:id', customersController.getById);

router.patch('/:id', customersController.update);

module.exports= router;