var pgp = require('pg-promise')();
var connString = process.env.DATABASE_URL;
// connects to our database
var db = pgp(connString);
