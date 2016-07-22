var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test3');
var TodoSchema = new mongoose.Schema({
    name: String,
    completed: Boolean,
    note: String,
    updated_at: { type: Date, default: Date.now }
});
var Todo = mongoose.model('Todo', TodoSchema);

Todo.create({name: 'Master Javascript', completed: true, note: 'Getting better everyday'}, function(err, todo){
    if(err) console.log(err);
    else console.log(todo);
})

var callback = function (err, data) {
    if(err) return console.error(err);
    else console.log(data);
}
Todo.find({completed: true }, callback);
Todo.find({name: /JS$/ }, callback);

Todo.findOneAndUpdate({name: /JS$/ }, {completed: false}, callback);

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todoApp', function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection succesful');
    }
});