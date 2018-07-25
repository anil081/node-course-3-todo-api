const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
if(err){
	return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to mongodb server');
    //deleteMany,DeleteOne,findOneAndDelete

    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    // 	console.log(result);
    // });
// db.collection('Todos').findOneAndUpdate({
// 	_id: new ObjectID("5b577085942ffcd34c5c4649")
// }, {
// 	$set: {
// 		completed: true
// 	}
//    }, {
// 		returnOriginal: false
	
// }).then((result) => {
// 	console.log(result);
// });

db.collection('Users').findOneAndUpdate({
	name: 'unknown'
}, {
	$inc:{age: 2}
}, {
	returnOriginal: false
}).then((result) => {
	console.log(result);
});
// 	//db.close();
});

