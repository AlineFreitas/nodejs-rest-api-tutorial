'use strict';

const Customer = require('../models/customer');

module.exports= {
  create(customerObject) {
    return Customer.create(customerObject);
  },
  getAll() {
    return Customer.find({});
  },
  getById(id) {
    return Customer.findById(id);
  },
  findOneAndUpdate(id, data) {
    return Customer.findOneAndUpdate(id, data, {new: true});
  },
  findOneAndDelete(id) {
    return Customer.findOneAndDelete(id);
  },
};