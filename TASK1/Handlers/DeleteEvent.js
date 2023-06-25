const connectdb = require('../Helpers/DbConnection');
const ObjectId = require('mongodb').ObjectId;

async function deleteEvent(req,res){

    try {
        const db = await connectdb();
        const collection = db.collection("Events");
        const doc = {_id :new ObjectId(req.params.id)}
        const deleteResult = await collection.deleteOne(doc);
        
        return res.json({"message":`deleted ${deleteResult.deletedCount} documents`})
        

    } catch (error) {
        return res.status(500).json({"message":"Internal server error"})
    }
}

module.exports = deleteEvent;