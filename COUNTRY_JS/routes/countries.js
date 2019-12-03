var express = require('express'); //Carica il modulo express
var router = express.Router(); //Ottiene un oggetto router
var country = require('countryjs');


router.get('/info/US', function(req, res, next) {
 res.send(country.info('US'));  //Restituisce le informazioni sugli stati uniti
});

router.get('/info/IT', function(req, res, next) {
 res.send(country.info('IT'));  //Restituisce le informazioni sull’italia
});

module.exports = router;