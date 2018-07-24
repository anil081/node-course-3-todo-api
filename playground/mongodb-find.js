const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
if(err){
	return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to mongodb server');
	// db.collection('Todos').find({
	// 	_id: new ObjectID("5b556e9b26a4952c8c284571") 
	// }).toArray().then((docs) =>{
 //       console.log('Todos');
 //       console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('unable to fetch todos', err);
	// });



	// db.collection('Todos').find().count().then((count) =>{
 //       console.log(`Todos count: ${count}`);
     
 //       console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('unable to fetch todos', err);
	// });

	  db.collection('Todos').find({name: 'anil'}).toArray().then((docs) => {
       	console.log(JSON.stringify(docs, undefined, 2));
       });

	//db.close();
});

