const Transaction = require('../../../backend/databases/schemas/transaction_schema');

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const items = await Transaction.find();
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({message: "success",data: items});
    } catch(err) {
      
    }
  } else {
    res.status(400).json({ message: 'Bad Request' });
  }
}
