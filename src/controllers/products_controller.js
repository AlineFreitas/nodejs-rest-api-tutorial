const Product = require('../models/products');

module.exports = {
  async list(request, response){
    try {
      let products = await Product.find({});
      return response.json(products);
    } catch (error) {
      return response.status(400).json(error);
    }
  },

  async create(request, response){
    try {
      let product = await Product.create(request.body);
      return response.status(201).json(product);
    } catch(error) {
      return response.json(error);
    }
  },

  async getBySlug(request, response){
    Product.findOne({
        slug: request.params.slug,
        active: true
      }, 'slug title description price barcode tags')
    .then(data => {
      if(data) {
        return response.status(201).json(data);
      } else {
        return response.status(404).send();
      }
    })
    .catch(error => {
      return response.json(error);
    });
  }
}