var mongo = require('mongodb').MongoClient;
var dbname = process.argv[2];
var url = 'mongodb://localhost:27017/' +dbname;

mongo.connect(url, function(err, db){
  if (err) throw err

  var collection = db.collection('users');

  collection.update({
    name: 'Tina'
  }, {
    $set: {
      age: 40
    }
  }).toArray(function(err){
    if (err) throw err;
    db.close();
  })

})
