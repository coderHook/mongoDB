var mongo = require('mongodb').MongoClient;
var dbname = process.argv[2];
var url = 'mongodb://localhost:27017/' + dbname;


var collec_name = process.argv[3];
var idcollect = process.argv[4];

mongo.connect(url, function(err, db){
  if(err) throw err

  var collection = db.collection(collec_name);

  collection.remove({
    _id: idcollect
  }).toArray(function(err){
    if(err) throw err
    db.close();

  })
})
