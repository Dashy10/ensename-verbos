var pgp = require('pg-promise')();
var connString = process.env.DATABASE_URL;
// connects to our database
var db = pgp(connString);


function getAllverbs(req, res, next) {
  console.log('inside function getAllverbs',req.body)
  // ALLOWS YOU TO TYPE IN ANY COMMAND THAT HAS MORE THAN ONE COMPONENT
  db.any('select * from verbs_present')
    .then(function(data) {
      console.log('inside data verbs_present',data)
      console.log('DATA:', data);
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'All Verbs'
        });
    })
    .catch(function(err) {
      return next(err);
    });
}

module.exports = {
  getAllverbs: getAllverbs
};
