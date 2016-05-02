var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var value_size = process.argv[2];

mongo.connect(url, function(err, db){

  var prices = db.collection('prices')
  var match = {$match: {size: value_size}}
  var group = {$group: {
    _id: 'total',
    total: {
      $avg: '$price'
    }
  }}
  prices.aggregate([match, group]).toArray(function(err, results){
    if (err) throw err

    console.log(Number(results[0].total).toFixed(2));
    db.close();
  })

}); //End of mongo connection
