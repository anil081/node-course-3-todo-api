const {ObjectID} = require('mongodb');



 const {mongoose} = require('./../server/db/mongoose');
 const {Todo} = require('./../server/models/todo');
 const {User} = require('./../server/models/user');

// var id = '5b5b6459a112137c3380db851';

// if(!ObjectID.isValid(id)) {
// 	console.log('Id not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });


// Todo.findById(id).then((todo) => {
// 	if(!todo) {
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo By id', todo);
// }).catch((e) => console.log(e));


User.findById('5b5993acd1ad89b42b494d3d').then((user) => {
            if(!user) {
            	return console.log('Unable to find user');
            }

            console.log(JSON.stringify(), undefined, 2);
}, (e) =>{
	console.log(e);
});