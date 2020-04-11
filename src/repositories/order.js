'use strict';

const Order = require('../models/order');

module.exports= {
  create(orderObject) {
    return Order.create(orderObject);
  },
  getAll() {
    return Order.find({});
  },
  getById(id) {
    return Order.findById(id);
  },
  update(id, data) {
    return Order.findOneAndUpdate(id, data, {new: true});
  },
  delete(id) {
    return Order.findByIdAndDelete(id);
  },
};