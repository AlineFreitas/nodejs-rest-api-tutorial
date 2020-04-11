const router = require('express').Router();
const customers_controller = require('../controllers/customers_controller');

router.post('/', customers_controller.create);

module.exports= router;