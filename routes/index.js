var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var model = require('../model/dbModel');
   
   
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

/* Post submit an url to short */
router.post('/', function(req, res, next) {
   
	var shortId = require('shortid');
	var urlToShort = req.body.urlToShort;
   
   var resShortIdGenerate = shortId.generate();
   
	var shortedUrl = ['http://shor.ty/', resShortIdGenerate].join('');
   
   var idAndUrl = new model({
      urlShorted: shortedUrl,
      url: urlToShort
   });
   
   idAndUrl.save(function (err) {
      if (err) { 
         throw err; 
      }
      mongoose.connection.close();
   });
   
   var objectToSend = {shortedUrl: shortedUrl, url: urlToShort};
   
   res.send(objectToSend);
});

module.exports = router;
