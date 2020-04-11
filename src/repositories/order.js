'use strict';

const Order = require('../models/order');

module.exports= {
  create(orderObject) {
    return Order.create(orderObject);
  },
  getAll() {
    return Order.find({});
  },
};