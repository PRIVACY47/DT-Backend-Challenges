const connectdb = require('../Helpers/DbConnection');

async function createEvent(req, res) {
  try {
    const db = await connectdb();
    const collection = db.collection("Events");
    req.body.images = req.files;
    let result = await collection.insertOne(req.body);
    return res.send(result.insertedId);
  } 
  
  
  catch (error) {
    console.error('Error inserting document:', error);
    return res.status(500).send('Error inserting document');
  }
}

module.exports = createEvent;
