const connectdb = require('../Helpers/DbConnection')
const ObjectId = require('mongodb').ObjectId;

async function updateEvent(req,res) {
  try {
            const db = await connectdb()
            req.body.images = req.files;
            const collection = db.collection("Events");
            const filter = { _id: new ObjectId(req.params.id) };
            const update = { $set: req.body };
            const result = await collection.updateOne(filter, update);
            return res.json({"message":`Updated ${result.modifiedCount} document(s)`})
    } 
    catch (error) {
      res.status(500).json({"message":"Internal server error"})
    } 
}

module.exports = updateEvent;