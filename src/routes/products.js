const router = require('express').Router(); // eslint-disable-line new-cap
const productController = require('../controllers/products_controller.js');

router.get('/', productController.list);
router.get('/:slug', productController.getBySlug);
router.get('/tags/:tag', productController.getByTag);

router.post('/', productController.create);

router.put('/:id', productController.update);

router.delete('/:id', productController.delete);

module.exports= router;