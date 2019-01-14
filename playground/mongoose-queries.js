const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5b8084eb09ad2a7ed58aad23';

// var id = '5c3cd7615b954c12516342ec11';

// if(!ObjectID.isValid(id)) {
//     console.log('ID is not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos',todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo',todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id',todo);
// }).catch((e) => console.log(e));

User.findById(id).then((user) => {
    if(!user) {
        return console.log('User not found');
    }
    console.log('User by Id', user);
}).catch((e) => console.log(e));    