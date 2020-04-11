const router = require('express').Router();
const productController = require('../controllers/products_controller.js');

router.get('/', productController.list);
router.get('/:slug', productController.getBySlug);
router.post('/', productController.create);

module.exports= router;