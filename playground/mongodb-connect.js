//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);
// var user = {name: 'anil', age: 23};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
if(err){
	return console.log('Unable to connect to MongoDB server');
}
console.log('Connected to MongoDB server');

// db.collection('Todos').insertOne({
// 	text: 'Something to do',
// 	completed: false
// }, (err, result) => {

// if(err){
// 	return console.log('Unable to insert todo', err);
// }

// console.log(JSON.stringify(result.ops, undefined, 2));

// });

// db.collection('Users').insertOne({
// 	name: 'Anil',
// 	age: 23,
// 	location: 'Greater Noida',
// 	completed: false
// }, (err, result) => {
// 	if(err){
// 		return console.log('Unable to insert Users');
// 	}
// 	console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
// });
db.close();

});