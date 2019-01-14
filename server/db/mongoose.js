var mongoose = require('mongoose');
var MONGODB_URI = 'mongodb://NodeAPITest:Node.API.Test123@ds257314.mlab.com:57314/nameless-spire-15101';

mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_URI || 'mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true });

module.exports = {mongoose};