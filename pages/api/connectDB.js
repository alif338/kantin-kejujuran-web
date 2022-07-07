const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://alif338:test123@cluster0.smf7h.mongodb.net/sea';

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
