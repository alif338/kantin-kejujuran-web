const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  title: {type: String, required: true},
  date_time: {type: String, required: true},
  nominal: {type: Number, required: true},
}, {timestamps: true});

module.exports = mongoose.models.transactions || mongoose.model('transactions', transactionSchema);