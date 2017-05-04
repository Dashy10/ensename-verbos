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
  var id = req.params.id;
  console.log(id);
  db.one('SELECT * FROM conjugation_present WHERE id = $1', id)
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
  var id = req.params.id;
  console.log(id);
  db.one('SELECT * FROM conjugation_preterite WHERE id = $1', id)
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
  var id = req.params.id;
  console.log(id);
  db.one('SELECT * FROM conjugation_future WHERE id = $1', id)
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
  var id = req.params.id;
  console.log(id);
  db.one('SELECT * FROM conjugation_conditional WHERE id = $1', id)
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


module.exports = {
  getAllpresent: getAllpresent,
  getAllpreterite: getAllpreterite,
  getAllfuture: getAllfuture,
  getAllconditional: getAllconditional,
  getPresentverb: getPresentverb,
  getPreteriteverb: getPreteriteverb,
  getFutureverb: getFutureverb,
  getConditionalverb: getConditionalverb,

};
////////////////NOTES TO MYSELF//////////////////
// passing multiple queries to one promise using pg-promise
// .task method
