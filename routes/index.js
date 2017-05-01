var express = require('express');
var router = express.Router();

var db = require('../db/queries');

/* GET home page. */
// RENDERING INDEX.VIEW FILE
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Spanish Verb Conjugator' });
});
// DYNAMICALLY CREATING NEW ROUTE THAT INVOKES GETALLVERBS FUNCTION
router.get('/present-tense', db.getAllverbs);

module.exports = router;
