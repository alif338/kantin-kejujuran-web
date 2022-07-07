const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: {type: String, required: true},
  imageUrl: {type: String, required: true},
  price: {type: String, required: true},
  description: {type: String, required: true},
  created_at: {type: String, required: true},
}, {timestamps: true});

module.exports = mongoose.models.items || mongoose.model('items', itemSchema);