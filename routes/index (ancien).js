var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

/* Post submit an url to short */
router.post('/', function(req, res, next) {
   
	var shortId = require('shortid');
	var urlToShort = req.body.urlToShort;
   var resShortIdGenerate = shortId.generate();
	var shortedUrl = ['http://shoUrLten.er/', resShortIdGenerate].join('');
	
	var mongoose = require('mongoose');
   
	mongoose.connect('mongodb://shourltenerUser:shourltenerPassword@ds041651.mongolab.com:41651/shourltener', function(err) {
      if (err) { 
         console.log('Connexion à la base de données non effectuée ' + err);
      }
   });
   
   var schemaUrl = new mongoose.Schema ({
      idUrlShorted: String,
      url: String
   });
   
   var UrlModel = mongoose.model('urls', schemaUrl);
	
   var idAndUrl = new UrlModel({
      idUrlShorted: resShortIdGenerate,
      url: urlToShort
   });
   
   idAndUrl.save( function (err) {
      if (err) { 
         throw err; 
      }
      console.log('Url et son id ajouté avec succès !');
   });
   
   mongoose.connection.close();
   
   res.send(shortedUrl);
	//res.render('index.html'); // TODO ajouter l'url réduite
});

module.exports = router;
