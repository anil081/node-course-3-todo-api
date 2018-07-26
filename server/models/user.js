var mongoose = require('mongoose');

var User = mongoose.model('User', {
	email: {type: String, minlength: 1, trim: true, required: true}
});

var mailTodo = new User({ email: '   anil.yadav081@gmail.com'});
mailTodo.save().then((doc) => {
	console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
	console.log('Unable to save', e);
});


module.exports = {User};