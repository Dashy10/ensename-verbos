
  // grab button by id
  let present_tenseURL = 'http://localhost:3000/present-tense/';
  // let preterite_tenseURL = 'localhost:3000/preterite-tense';
  // let future_tenseURL = 'localhost:3000/future-tense';
  // let conditional_tenseURL = 'localhost:3000/conditional-tense';
  let mostrame = $('.mostrame')

  $('#get_verbs').on('click',function(e){
    e.preventDefault();
    let input = $('#verb_input').val();

    let verb = encodeURI(input);

    axios.get(present_tenseURL + verb)
    .then(function(res){
      // console.log(res.data.data)
      displayVerb(res.data.data.group)
      // window.location.href ='/present-tense/' + verb
    });
  });

displayVerb = (allverbs) => {
  // ul = $("<ul/>");
  let all_present_tense_verbs = allverbs
  console.log(all_present_tense_verbs)
  $(".mostrame").append(allverbs);
  
  // $(all_present_tense_verbs).each(function(){
  //   $("<li/>").text(this).appendTo(ul);
  // });



}

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
