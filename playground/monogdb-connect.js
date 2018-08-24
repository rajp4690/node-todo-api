const {MongoClient, ObjectID} = require('mongodb');
//const MonogoClient = require('mongodb').MonogoClient;
//
// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if(error){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MonoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    //
    // db.collection('Users').insertOne({
    //     name: 'Raj',
    //     age: 23,
    //     location: 'New Paltz'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to add user', err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // })
    
    client.close();
});
