const { MongoClient } = require('mongodb');
require("dotenv").config()
async function connectdb() {
    try {
      const uri = process.env.uri;
      const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log('Connected to MongoDB');
  
      const db = client.db("Dt");
    return db;
    }catch (err) {
      console.log('Error occurred while connecting to MongoDB:', err);
      process.exit(1);
    }
  }
  

  module.exports = connectdb;