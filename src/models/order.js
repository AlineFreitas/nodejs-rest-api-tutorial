const mongoose = require('../database');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  number: {
    type: String,
    required: true,
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
  },
  status: {
    type: String,
    required: true,
    enum: [
      'pending', 'paid', 'done',
    ],
    default: 'pending',
  },
  items: [{
    quantity: {
      type: Number,
      required: true,
      default: 1,
    },
    price: {
      type: Number,
      required: true,

    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
  }],
  createdAt: {
    type: Date,
    require: true,
    default: Date.now,
  },
});

module.exports= mongoose.model('Order', orderSchema);