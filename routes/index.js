var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Express' });
});

//router.get('/', function(request, response) {
 //  res.render('index.html');
//});
module.exports = router;
