var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {
        type: String
    },
    id: {
        type: String
    },
    url: {
        type: String
    },
    lists : {
      type : Array,
      default: []
    }
});

var User = mongoose.model('User', userSchema);
module.exports = mongoose.model('User', userSchema);
