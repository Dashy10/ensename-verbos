var promise = require('bluebird');
var options = {
  promiseLib: promise
};
var pgp = require('pg-promise')(options);
var connString = process.env.DATABASE_URL;
// connects to our database
var db = pgp(connString);


/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//////////// C.R.U.D Functionality////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////


////////////////////////////////////////////
////////////// GET ONE VERB AT A TIME/////////////
//////////////////////////////////////////

getPresentverb = (req,res,next) => {
  var verb = req.params.verb;
  db.one('SELECT * FROM conjugation_present WHERE verb = $1', verb)
    .then(function(data){
      res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'Your verb was retrieved'
      });
    })
    .catch(function(err){
      return next(err);
    });
};

getPreteriteverb = (req,res,next) => {
  var verb = req.params.verb;
  db.one('SELECT * FROM conjugation_preterite WHERE verb = $1', verb)
    .then(function(data){
      res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'Your verb was retrieved'
      });
    })
    .catch(function(err){
      return next(err);
    });
};

getFutureverb = (req,res,next) => {
  var verb = req.params.verb;
  db.one('SELECT * FROM conjugation_future WHERE verb = $1', verb)
    .then(function(data){
      res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'Your verb was retrieved'
      });
    })
    .catch(function(err){
      return next(err);
    });
};

getConditionalverb = (req,res,next) => {
  var verb = req.params.verb;
  db.one('SELECT * FROM conjugation_conditional WHERE verb = $1', verb)
    .then(function(data){
      res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'Your verb was retrieved'
      });
    })
    .catch(function(err){
      return next(err);
    });
};
////////////////////////////////////////////
////////////// GET ALL TENSES /////////////
//////////////////////////////////////////
getAllpresent = (req,res,next)  => {

   db.any('SELECT * FROM conjugation_present')
  .then(function(data){
    res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'Success getting all verbs'
    });
  })
  .catch(function(err){
    return next(err);
  });

};

getAllpreterite = (req,res,next)  => {

   db.any('SELECT * FROM conjugation_preterite')
  .then(function(data){
    res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'Success getting all verbs'
    });
  })
  .catch(function(err){
    return next(err);
  });

};

getAllfuture = (req,res,next)  => {

   db.any('SELECT * FROM conjugation_future')
  .then(function(data){
    res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'Success getting all verbs'
    });
  })
  .catch(function(err){
    return next(err);
  });

};

getAllconditional = (req,res,next)  => {

   db.any('SELECT * FROM conjugation_conditional')
  .then(function(data){
    res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'Success getting all verbs'
    });
  })
  .catch(function(err){
    return next(err);
  });

};

///////////////////DELETE A VERB BASED ON TENSE//////////////////
deletePresent = (req,res,next) => {
  var present_tense_verb = req.params.verb;
  db.result('delete from conjugation_present where verb = $1', present_tense_verb)
}

deletePreterite = (req,res,next) => {
  var preterite_tense_verb =req.params.verb;
  db.result('delete from conjugation_preterite where verb = $1', preterite_tense_verb)
}

deleteFuture = (req,res,next) => {
  var future_tense_verb = req.params.verb
  db.result('delete from conjugation_future where id = $1', future_tense_verb)
}

deleteConditional = (req,res,next) => {
  var conditional_tense_verb = req.params.verb
  db.result('delete from conjugation_conditional where id = $1', conditional_tense_verb)
}


//////////////////CREATE A VERB/////////////////////////////////
createPresentverb = (req,rest,next) => {
  db.none('insert into conjugation_present(verb, yo, "tú", "third", nosotros, vosotros, "group")' +
      'values(${verb}, ${yo}, ${"tú"}, ${"third"}, ${nosotros}, ${vosotros}, ${"group"})',
    req.body)
  .then(res.redirect('/contribuciones'))
}

createPreteriteverb = (req,rest,next) => {
  req.body.verb_id = parseInt(req.body.verb_id)

  db.none('insert into conjugation_present(verb, yo, "tú", "third", nosotros, vosotros, "group")' +
      'values( ${verb},${yo}, ${"tú"}, ${"third"}, ${nosotros}, ${vosotros}, ${"group"})',
    req.body)
  .then(res.redirect('/contribuciones'))
}

createFutureverb = (req,rest,next) => {
  req.body.verb_id = parseInt(req.body.verb_id)

  db.none('insert into conjugation_present(verb, yo, "tú", "third", nosotros, vosotros, "group")' +
      'values(${verb}, ${yo}, ${"tú"}, ${"third"}, ${nosotros}, ${vosotros}, ${"group"})',
    req.body)
  .then(res.redirect('/contribuciones'))
}

createConditionalverb = (req,rest,next) => {
  req.body.verb_id = parseInt(req.body.verb_id)

  db.none('insert into conjugation_present(verb, yo, "tú", "third", nosotros, vosotros, "group")' +
      'values(${verb}, ${yo}, ${"tú"}, ${"third"}, ${nosotros}, ${vosotros}, ${"group"})',
    req.body)
  .then(res.redirect('/contribuciones'))
}
//////////////////UPDATE A VERB////////////////////////////////
updatePresentverb = (req,res,next) => {

  db.none('update conjugation_present set verb=$1, yo=$2, "tú"=$3, "third"=$4, nosotros=$5, vosotros=$6, "group"=$7 where verb_id=$8',
    [req.body.verb, req.body.yo, req.body.tú, req.body.third, req.body.nosotros, req.body.vosotros, req.body.group])
    // .then(res.redirect('/contribuciones'))
}

updatePreteriteverb = (req,res,next) => {

  db.none('update conjugation_preterite set verb=$1, yo=$2, "tú"=$3, "third"=$4, nosotros=$5, vosotros=$6, "group"=$7 where verb_id=$8',
    [req.body.verb, req.body.yo, req.body.tú, req.body.third, req.body.nosotros, req.body.vosotros, req.body.group])
    // .then(res.redirect('/contribuciones'))
}

updateFutureverb = (req,res,next) => {

  db.none('update conjugation_future set verb=$1, yo=$2, "tú"=$3, "third"=$4, nosotros=$5, vosotros=$6, "group"=$7 where verb_id=$8',
    [req.body.verb, req.body.yo, req.body.tú, req.body.third, req.body.nosotros, req.body.vosotros, req.body.group])
    // .then(res.redirect('/contribuciones'))
}

updateConditionalverb = (req,res,next) => {

  db.none('update conjugation_conditional set verb=$1, yo=$2, "tú"=$3, "third"=$4, nosotros=$5, vosotros=$6, "group"=$7 where verb_id=$8',
    [req.body.verb, req.body.yo, req.body.tú, req.body.third, req.body.nosotros, req.body.vosotros, req.body.group])
    // .then(res.redirect('/contribuciones'))
}



module.exports = {
  getAllpresent: getAllpresent,
  getAllpreterite: getAllpreterite,
  getAllfuture: getAllfuture,
  getAllconditional: getAllconditional,
  getPresentverb: getPresentverb,
  getPreteriteverb: getPreteriteverb,
  getFutureverb: getFutureverb,
  getConditionalverb: getConditionalverb,
  deletePresent: deletePresent,
  deletePreterite: deletePreterite,
  deleteFuture: deleteFuture,
  deleteConditional: deleteConditional,
  createPresentverb: createPresentverb,
  createPreteriteverb: createPreteriteverb,
  createFutureverb: createFutureverb,
  createConditionalverb: createConditionalverb,
  updatePresentverb: updatePresentverb,
  updatePreteriteverb: updatePreteriteverb,
  updateFutureverb: updateFutureverb,
  updateConditionalverb: updateConditionalverb,

};
////////////////NOTES TO MYSELF//////////////////
// passing multiple queries to one promise using pg-promise
// .task method
