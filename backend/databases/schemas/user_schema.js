const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id_students: {type: String, required: true},
  password: {type: String, required: true},
}, {timestamps: true});

module.exports = mongoose.models.users || mongoose.model('users', userSchema);