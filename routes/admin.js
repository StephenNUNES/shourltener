var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var model = require('../model/dbModel');

/* GET Admin page */
router.get('/', function(req, res, next) {
   
   var query = model.find(null);
   var result = query.exec(function (err, resQuery) {
      if (err) {
         throw err;
      }
      mongoose.connection.close();
      res.render('admin.html', {tabData: resQuery});
   }); 
   
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
});

module.exports = router;
