'use strict';

const Product = require('../models/products');

module.exports = {
  findAll() {
    return Product.find({});
  },

  findBySlug(slug) {
    return Product.findOne({
      slug: slug,
      active: true
    }, 'slug title description price barcode tags')
  },

  create(params) {
    return Product.create(params);
  },

  findById(id){
    return Product.findById(id);
  }
}