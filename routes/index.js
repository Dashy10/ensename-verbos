var express = require('express');
var router = express.Router();

var db = require('../db/queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Spanish Verb Conjugator' });
});

router.get('/api/spanish_verbs', db.getAllverbs);

module.exports = router;
