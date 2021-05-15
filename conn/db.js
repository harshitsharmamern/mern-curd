// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mystudent";

// MongoClient.connect(url,{useUnifiedTopology: true } ,function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });

const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/mystudent",{
  useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex : true
}).then(()=>{console.log("database created")}).catch((e)=>{console.log(e);})











