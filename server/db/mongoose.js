var mongoose = require('mongoose');
var MONGODB_URI = 'mongodb://NodeAPITest:Node.API.Test123@ds257314.mlab.com:57314/nameless-spire-15101';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp' || MONGODB_URI,{ useNewUrlParser: true });

module.exports = {mongoose};