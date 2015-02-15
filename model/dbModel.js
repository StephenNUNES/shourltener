var mongoose = require('mongoose');

module.exports = (function () {
   
   mongoose.connect('mongodb://shourltenerUser:shourltenerPassword@ds041851.mongolab.com:41851/shourltener', function(err) {
      if (err) { 
         console.log('Connexion à la base de données non effectuée ' + err);
      }
   });

   var schemaUrl = new mongoose.Schema ({
      urlShorted: String,
      url: String
   });
   return mongoose.model('urls', schemaUrl);

})();
