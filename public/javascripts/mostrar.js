// var express = require('express');
// var router = express.Router();
// var cors = require('cors');
// var db = require('../db/queries');
  // grab button by id
  let present_tenseURL = 'http://localhost:3000/present-tense/';
  let preterite_tenseURL = 'localhost:3000/preterite-tense';
  let future_tenseURL = 'localhost:3000/future-tense';
  let conditional_tenseURL = 'localhost:3000/conditional-tense';
  let mostrame = $('.mostrame')

  $('#get_verbs').on('click',function(){
    let input = $('#verb_input').val();

    let verb = encodeURI(input);

    axios.get(present_tenseURL + verb)
    .then(function(res){
      window.location.href ='/present-tense/' + verb
    });
  });


// $('#get_verbs').on('click',function(){
//   console.log('ya');
//
// let verb = $('#verb_input').val();
// console.log(verb);
// })



// loop through data using forEach
// at every iteration, I need it to return an <li> tag

// function pop(){
//   axios.get('http://localhost:3000/present-tense/')
//   .then(function(res){
//     console.log(res)
//     var verb =  $('#verb_input').val();
//     res.data.data.forEach( (d) => {
//       $('.mostrame').html(verb)
//     })
//     console.log(verb);
//   })
//

//
