var mongoose = require('mongoose');

// define the model for the book
var bookSchema = mongoose.Schema({
    id: mongoose.Schema.ObjectId,
    title: { type: String, default: '' },
    author: { type: String, default: '' },
    datePublished: { type: Date, default: Date.now },
    genre: { type: String, default: '' }
});

module.exports = mongoose.model('Book', bookSchema);