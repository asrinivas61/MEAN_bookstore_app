var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    id: { type: String, required: true },
    description: { type: String, required: true },
    shortDesc: { type: String, required: true },
    imgUrl: { type: String, required: true }
})

var Book = mongoose.model('bookStore', bookSchema);

module.exports = Book;