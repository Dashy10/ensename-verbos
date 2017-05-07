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
router.get('/present-tense/:verb', db.getPresentverb);
router.get('/preterite-tense/:verb', db.getPreteriteverb);
router.get('/future-tense/:verb', db.getFutureverb);
router.get('/conditional-tense/:verb', db.getConditionalverb);
router.delete('/present-tense/:verb', db.deletePresent);
router.delete('/preterite-tense/:verb', db.deletePreterite);
router.delete('/future-tense/:verb', db.deleteFuture);
router.delete('/conditional-tense/:verb', db.deleteConditional);
router.post('/present-tense', db.createPresentverb);
router.post('/contribuciones', db.createPreteriteverb);
router.post('/contribuciones', db.createFutureverb);
router.post('/contribuciones', db.createConditionalverb);
router.put('/present-tense/:verb', db.updatePresentverb);
router.put('/preterite-tense/:verb', db.updatePreteriteverb);
router.put('/future-tense/:verb', db.updateFutureverb);
router.put('/conditional-tense/:verb', db.updateConditionalverb);

module.exports = router;
