var express = require('express');
var router = express.Router();

var bookModule = require('../modules/bookStoreModule');

/* GET home page. */
router.get('/list', bookModule.getBookList);
router.get('/getBook/:id', bookModule.getBook);
router.post('/addBook', bookModule.addBook);
router.put('/editBook/:id', bookModule.editBook);
router.get('/deleteBook/:id', bookModule.deleteBook);

module.exports = router;
