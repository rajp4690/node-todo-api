const {MongoClient, ObjectID} = require('mongodb');
//const MonogoClient = require('mongodb').MonogoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if(error){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MonoDB server');
    const db = client.db('TodoApp');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID("5b80678065f6a503f422b45a")
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5b8052bdac38141e101e36ce")
    }, {
        $set: {
            name: "Diku"
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // client.close();
});
