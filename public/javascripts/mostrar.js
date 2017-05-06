
  // grab button by id
  let present_tenseURL = 'http://localhost:3000/present-tense/';
  // let preterite_tenseURL = 'localhost:3000/preterite-tense';
  // let future_tenseURL = 'localhost:3000/future-tense';
  // let conditional_tenseURL = 'localhost:3000/conditional-tense';
  let mostrame = $('.mostrame')

  $('#get_verbs').on('click',function(e){
    e.preventDefault();
    $('.mostrame').css("opacity",".7");
    let input = $('#verb_input').val();

    let verb = encodeURI(input);

    axios.get(present_tenseURL + verb)
    .then(function(res){
      // console.log(res.data.data)
      displayYo(res.data.data.yo)
      displayTu(res.data.data.tú)
      displayThird(res.data.data.third)
      displayNosotros(res.data.data.nosotros)
      displayVosotros(res.data.data.vosotros)
      displayGroup(res.data.data.group)
    });
  });

displayYo = (yo) => {
  // ul = $("<ul/>");
  let all_present_tense_verbs = yo
  console.log(all_present_tense_verbs)
  $("#singular-first").empty().append(yo);
}
displayTu = (tu) => {
  // ul = $("<ul/>");
  let all_present_tense_verbs = tu
  console.log(all_present_tense_verbs)
  $("#singular-second").empty().append(tu);
}

displayThird = (third) => {
  // ul = $("<ul/>");
  let all_present_tense_verbs = third
  console.log(all_present_tense_verbs)
  $("#singular-third").empty().append(third);
}

displayNosotros = (nosotros) => {
  // ul = $("<ul/>");
  let all_present_tense_verbs = nosotros
  console.log(all_present_tense_verbs)
  $("#plural-first").empty().append(nosotros);
}

displayVosotros = (vosotros) => {
  // ul = $("<ul/>");
  let all_present_tense_verbs = vosotros
  console.log(all_present_tense_verbs)
  $("#plural-second").empty().append(vosotros);
}

displayGroup = (group) => {
  // ul = $("<ul/>");
  let all_present_tense_verbs = group
  console.log(all_present_tense_verbs)
  $("#plural-third").empty().append(group);
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
