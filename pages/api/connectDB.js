const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGODB_URL;

export default function handler(req, res) {
  mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('connected to db');
    res.status(200).json({message: 'connected to db'});
  }).catch(err => {
    console.log(err);
    res.status(500).json({message: err});
  });
}
