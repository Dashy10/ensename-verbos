var express = require('express');
var router = express.Router();
var cors = require('cors');

var db = require('../db/queries');

/* GET home page. */
// RENDERING INDEX.VIEW FILE
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Enseñame Tus Verbos' });
});

router.get('/contribuciones', function(req, res, next) {
  res.render('contribuciones', {title: 'Contribucíones'});
});
// DYNAMICALLY CREATING NEW ROUTES
router.get('/present-tense', db.getAllpresent);
router.get('/preterite-tense', db.getAllpreterite);
router.get('/future-tense', db.getAllfuture);
router.get('/conditional-tense', db.getAllconditional);
router.get('/present-tense/:verb_id', db.getPresentverb);
router.get('/preterite-tense/:verb_id', db.getPreteriteverb);
router.get('/future-tense/:verb_id', db.getFutureverb);
router.get('/conditional-tense/:verb_id', db.getConditionalverb);
router.delete('/present-tense/:verb_id', db.deletePresent);
router.delete('/preterite-tense/:verb_id', db.deletePreterite);
router.delete('/future-tense/:verb_id', db.deleteFuture);
router.delete('/conditional-tense/:verb_id', db.deleteConditional);
router.post('/contribuciones', db.createPresentverb);
router.post('/contribuciones', db.createPreteriteverb);
router.post('/contribuciones', db.createFutureverb);
router.post('/contribuciones', db.createConditionalverb);
router.patch('/present-tense/:verb_id', db.updatePresentverb);
router.patch('/preterite-tense/:verb_id', db.updatePreteriteverb);
router.patch('/future-tense/:verb_id', db.updateFutureverb);
router.patch('/conditional-tense/:verb_id', db.updateConditionalverb);

module.exports = router;
