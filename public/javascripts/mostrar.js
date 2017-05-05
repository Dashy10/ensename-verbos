$(function(){
  // grab button by id
  $('#get_verbs').on('click',function(e){
      e.preventDefault();
    $('.mostrame').css("opacity", ".5");


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
