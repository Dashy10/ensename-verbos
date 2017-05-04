var express = require('express');
var router = express.Router();

var db = require('../db/queries');

/* GET home page. */
// RENDERING INDEX.VIEW FILE
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Enseñame Tus Verbos' });
});

router.get('/contribuciones', function(req, res, next) {
  res.render('contribuciones', {title: 'Contribucíones'});
});
// DYNAMICALLY CREATING NEW ROUTE THAT INVOKES GETALLVERBS FUNCTION
router.get('/present-tense', db.getAllpresent);
router.get('/preterite-tense', db.getAllpreterite);
router.get('/future-tense', db.getAllfuture);
router.get('/conditional-tense', db.getAllconditional);
router.get('/present-tense/:id', db.getPresentverb);
router.get('/preterite-tense/:id', db.getPreteriteverb);
router.get('/future-tense/:id', db.getFutureverb);
router.get('/conditional-tense/:id', db.getConditionalverb);
// router.get('/verbs', db.getAllverbs);

module.exports = router;
