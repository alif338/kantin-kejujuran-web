const mongoose = require('mongoose');

export default function handler(req, res) {
  mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db via index.js');
    res.status(200).json({message: 'connected to db via index.js'});
  }).catch(err => {
    console.log(err);
    res.status(500).json({message: err});
  });
}