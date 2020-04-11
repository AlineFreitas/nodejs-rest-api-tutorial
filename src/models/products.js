const mongoose = require('../database');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    trim: true,
    index: true,
    unique: true,
  },
  barcode: {
    type: String,
    require: true,
    unique: true,
    max: 12,
    min: 12,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: [0, 'price cannot be negative'],
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
  tags: [{
    type: String,
    required: true,
  }],
  createdAt: {
    type: Date,
    require: true,
    default: Date.now,
  }
});

const productModel = new mongoose.model('Product', productSchema);

module.exports= productModel;