const Transaction = require('../../../backend/databases/schemas/transaction_schema');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await Transaction.create(req.body);
      res.status(200).json({ name: 'Transaction success', body: req.body });
    } catch(err) {
      console.log(err);
      res.status(500).json({message: err});
    }
  } else {
    res.status(400).json({ message: 'Bad Request' });
  }
}
