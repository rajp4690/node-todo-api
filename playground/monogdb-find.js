const {MongoClient, ObjectID} = require('mongodb');
//const MonogoClient = require('mongodb').MonogoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if(error){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MonoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b7f40c7bc27e69cc0235dcc')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    db.collection('Users').find({name: "Dan"}).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    // client.close();
});
