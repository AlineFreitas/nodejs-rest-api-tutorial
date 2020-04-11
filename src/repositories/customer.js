'use strict';

const Customer = require('../models/customer');

module.exports= {
  create(customerObject){
    return Customer.create(customerObject);
  }
}