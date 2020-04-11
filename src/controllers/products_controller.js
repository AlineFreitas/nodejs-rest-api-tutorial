const productRepository = require('../repositories/products');

module.exports = {
  async list(request, response){
    try {
      let products = await productRepository.findAll();
      return response.json(products);
    } catch (error) {
      return response.status(400).json(error);
    }
  },

  async create(request, response){
    try {
      let product = await productRepository.create(request.body);
      return response.status(201).json(product);
    } catch(error) {
      return response.json(error);
    }
  },

  async getBySlug(request, response){
    productRepository.findBySlug(request.params.slug)
    .then(product => {
      if(product) {
        return response.status(201).json(product);
      } else {
        return response.status(404).send();
      }
    })
    .catch(error => {
      return response.json(error);
    });
  }
}