const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGODB_URL;

const connect = async () => {
  console.log(MONGO_URI);
  await mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('connected to db');
  }).catch(err => {
    console.log(err);
  });
}

module.exports = connect;