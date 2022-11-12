var mongoose = require("mongoose");
var schema = mongoose.Schema;

var Users = new schema({
    prenom : String,
    nom : String,
    email : String,
    age : Number

});

module.exports = mongoose.model('users', Users);