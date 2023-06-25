const connectdb = require('../Helpers/DbConnection')
const  ObjectId = require('mongodb').ObjectId;



async function readEvent(req,res){

    try {
        const db = await connectdb();
        const {eventId,type,limit,page} = req.query;
        const collection = db.collection("Events")
        if(eventId)
        {
            console.log("entered")
            const data = await collection.find({ _id: new ObjectId(eventId) }).toArray()
            res.json({'events':data})
            console.log(error)
            res.status(500).send('Internal server error');
        }
        else if(type){
            
            const skip = (parseInt(page) - 1) * parseInt(limit);
            const events = await collection.find({})
            .sort({ timestamp: -1 }) 
            .skip(skip)
            .limit(parseInt(limit))
            .toArray();
            
            return res.json(events)
        }
        else{
            const events = await collection.find({}).toArray();
            return res.json(events)
        }
    }
 catch (error) {
        return res.status(500).json({"message":"Internal server error"})
    }
 
}

module.exports = readEvent;