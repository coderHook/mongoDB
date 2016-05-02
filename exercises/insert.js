var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var firstname = process.argv[2];
var lastname = process.argv[3];

var names = {
  firstName: firstname,
  lastName: lastname
}

mongo.connect(url, function(err, db){
  if (err) throw err;

  var collection = db.collection('docs');
  //Lets try to insert a document inside the docs collection.
  collection.insert(names, function(err, data){
  if(err) throw err;
  console.log(JSON.stringify(names));
  db.close();
  })

})
