const mongoose = require('mongoose');
//Set up default mongoose connection
mongoose.connect(process.env.mongo_url);
 //Get the default connection
const connection = mongoose.connection;

connection.on('connected',()=> console.log("Mongo DB connection sucessfull"));
connection.on('error',()=> console.log("Mongo DB connection failed"));

module.exports = connection;