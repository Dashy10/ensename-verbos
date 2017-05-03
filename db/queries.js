var promise = require('bluebird');
var options = {
  promiseLib: promise
};
var pgp = require('pg-promise')(options);
var connString = process.env.DATABASE_URL;
// connects to our database
var db = pgp(connString);

// C.R.U.D Functionality

createVerb = (req,res,next) => {
  console.log(req.body)
  // parse this data value as an integer plz
  
  // no return policy

}



module.exports = {

};
