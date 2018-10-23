var bookSchema = require('../models/bookSchema');

var getBookList = function(req, res) {
    bookSchema.find({}, function(err, books) {
        console.log(err, books);
        if(!err) res.send(books);
        else throw err;
    });
}

var getBook = function(req, res) {
    bookSchema.find({title: req.params.title}, function(err, book) {
        if(!err) res.send(book);
        else throw err;
    })
}

var addBook = function(req, res) {
    let newBook = new bookSchema({
        title: req.body.title,
        id: req.body.id,
        author: req.body.author,
        description: req.body.description,
        shortDesc: req.body.shortDesc,
        imgUrl: req.body.imgUrl
    });

    newBook.save(function(err, status){
        if(!err) res.send(status);
        else throw err;
    })
}

var editBook = function(req, res) {
    bookSchema.findOne({id: req.params.id}, function(err, book) {

        let { title, author, description, shortDesc, imgUrl } = book;

        let updateBook = new bookSchema({
            title: req.body.title||title,
            id: req.params.id||id,
            author: req.body.author||author,
            description: req.body.description||description,
            shortDesc: req.body.shortDesc||shortDesc,
            imgUrl: req.body.imgUrl||imgUrl
        });

        updateBook.save(function(err, status) {
            if(!err) res.send(status);
            else throw err;
        })
    })
}

var deleteBook = function(req, res) {
    bookSchema.findOneAndRemove({id: req.params.id}, function(err, status) {
        if(!err) res.send(status);
        else throw err;
    })
}

module.exports = {
    getBookList: getBookList,
    getBook: getBook,
    addBook: addBook,
    editBook: editBook,
    deleteBook: deleteBook
}