const {MongoClient, ObjectID} = require('mongodb');
//const MonogoClient = require('mongodb').MonogoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if(error){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MonoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5b7f428543fe650f484ea23f')
    }).then((result) => {
        console.log(result);
    });

    // client.close();
});
