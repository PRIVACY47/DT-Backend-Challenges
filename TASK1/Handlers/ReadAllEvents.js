const connectdb = require('../Helpers/DbConnection')

async function ReadAllEvents(req,res){
    try {
        const db = await connectdb();
        const events = await collection.find({}).toArray();
        return res.json(events)

    } catch (error) {
        return res.status(500).json({"message":"Internal server error"})
    }

}