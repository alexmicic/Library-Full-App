var mongoose = require('mongoose');

// load the book module
var book = require('./book');

// define the model for the user
var userSchema = mongoose.Schema({
    id: mongoose.Schema.ObjectId,
    firstName: { type: String, default: '' },
    lastName: { type: String, default: '' },
    dateCreated: { type: Date, default: Date.now },
    favBooks: [book]
});

module.exports = mongoose.model('User', userSchema);