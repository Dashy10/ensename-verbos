var express = require('express');
var router = express.Router();

var db = require('../db/queries');

/* GET home page. */
// RENDERING INDEX.VIEW FILE
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Spanish Verb Conjugator' });
});
// DYNAMICALLY CREATING NEW ROUTE THAT INVOKES GETALLVERBS FUNCTION


module.exports = router;


// conditions for verbs that I dont have yet
// error message? matching character length
