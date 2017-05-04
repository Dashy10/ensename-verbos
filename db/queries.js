var promise = require('bluebird');
var options = {
  promiseLib: promise
};
var pgp = require('pg-promise')(options);
var connString = process.env.DATABASE_URL;
// connects to our database
var db = pgp(connString);

// C.R.U.D Functionality

// infinite loop of json data why?
// getAllverbs = (req,res,next)  => {
//
//   db.any('SELECT id FROM verb_table, conjugation_present, conjugation_preterite, conjugation_future, conjugation_conditional')
//   .then(function(data){
//     res.status(200)
//     .json({
//       status: 'success',
//       data: data,
//       message: 'Success getting all verbs'
//     });
//   })
//   .catch(function(err){
//     return next(err);
//   });
//
// };

function getPresentverb(req,res,next) {
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



// passing multiple queries to one promise using pg-promise
// .task method


module.exports = {
  // getAllverbs: getAllverbs,
  getPresentverb: getPresentverb,

};
