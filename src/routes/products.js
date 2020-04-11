const router = require('express').Router();
const productController = require('../controllers/products_controller.js');

router.get('/', productController.list);
router.get('/:slug', productController.getBySlug);
router.get('/tags/:tag', productController.getByTag);

router.post('/', productController.create);

router.put('/:id', productController.update);

module.exports= router;