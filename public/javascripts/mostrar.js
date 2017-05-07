$(function(){
  // grab button by id
  let present_tenseURL = 'https://morning-anchorage-78915.herokuapp.com/present-tense/';
  let preterite_tenseURL = 'https://morning-anchorage-78915.herokuapp.com/preterite-tense/';
  let future_tenseURL = 'https://morning-anchorage-78915.herokuapp.com/future-tense/';
  let conditional_tenseURL = 'https://morning-anchorage-78915.herokuapp.com/conditional-tense/';
  let mostrame = $('.mostrame')

  $('#get_verbs').on('click',function(e){
    e.preventDefault();
    $('.mostrame').css("opacity","1");
    let input = $('#verb_input').val();

    let verb = encodeURI(input);

    axios.get(present_tenseURL + verb)
    .then(function(res){
      // console.log(res.data.data)
      // displayVerb(res.data.data.verb)
      displayYoPresent(res.data.data.yo)
      displayTuPresent(res.data.data.tú)
      displayThirdPresent(res.data.data.third)
      displayNosotrosPresent(res.data.data.nosotros)
      displayVosotrosPresent(res.data.data.vosotros)
      displayGroupPresent(res.data.data.group)
    });
    axios.get(preterite_tenseURL + verb)
    .then(function(res){
      displayYoPreterite(res.data.data.yo)
      displayTuPreterite(res.data.data.tú)
      displayThirdPreterite(res.data.data.third)
      displayNosotrosPreterite(res.data.data.nosotros)
      displayVosotrosPreterite(res.data.data.vosotros)
      displayGroupPreterite(res.data.data.group)

    });
    axios.get(future_tenseURL + verb)
    .then(function(res){
      displayYoFuture(res.data.data.yo)
      displayTuFuture(res.data.data.tú)
      displayThirdFuture(res.data.data.third)
      displayNosotrosFuture(res.data.data.nosotros)
      displayVosotrosFuture(res.data.data.vosotros)
      displayGroupFuture(res.data.data.group)

    });
    axios.get(conditional_tenseURL + verb)
    .then(function(res){
      displayYoConditional(res.data.data.yo)
      displayTuConditional(res.data.data.tú)
      displayThirdConditional(res.data.data.third)
      displayNosotrosConditional(res.data.data.nosotros)
      displayVosotrosConditional(res.data.data.vosotros)
      displayGroupConditional(res.data.data.group)

    });
  });

// displayVerbPresent = (verb) => {
//   let all_present_tense_verbs = verb
//   $('#verb-name').empty().append(" " + verb)
// }

///////////////Present-tense/////////////////////////////
displayYoPresent = (yo) => {

  let all_present_tense_verbs = yo
  console.log(all_present_tense_verbs)
  $("#singular-first-present").empty().append(" " + yo);
}

displayTuPresent = (tu) => {

  let all_present_tense_verbs = tu
  console.log(all_present_tense_verbs)
  $("#singular-second-present").empty().append(" " + tu);
}

displayThirdPresent = (third) => {

  let all_present_tense_verbs = third
  console.log(all_present_tense_verbs)
  $("#singular-third-present").empty().append(" " + third);
}

displayNosotrosPresent = (nosotros) => {

  let all_present_tense_verbs = nosotros
  console.log(all_present_tense_verbs)
  $("#plural-first-present").empty().append(" " + nosotros);
}

displayVosotrosPresent = (vosotros) => {

  let all_present_tense_verbs = vosotros
  console.log(all_present_tense_verbs)
  $("#plural-second-present").empty().append(" " + vosotros);
}

displayGroupPresent = (group) => {

  let all_present_tense_verbs = group
  console.log(all_present_tense_verbs)
  $("#plural-third-present").empty().append(" " + group);
}

///////////////Preterite-tense/////////////////////////////
displayYoPreterite = (yo) => {
  let preterite_tense_yo = yo
  $("#singular-first-preterite").empty().append(" " + yo);
}

displayTuPreterite = (tu) => {
  let preterite_tense_tu = tu
  $("#singular-second-preterite").empty().append(" " + tu);
}

displayThirdPreterite = (third) => {
  let preterite_tense_third = third
  $("#singular-third-preterite").empty().append(" " + third);
}

displayNosotrosPreterite = (nosotros) => {
  let preterite_tense_nosotros = nosotros
  $("#plural-first-preterite").empty().append(" " + nosotros);
}

displayVosotrosPreterite = (vosotros) => {
  let preterite_tense_vosotros = vosotros
  $("#plural-second-preterite").empty().append(" " + vosotros);
}

displayGroupPreterite = (group) => {
  let preterite_tense_group = group
  $("#plural-third-preterite").empty().append(" " + group);
}

/////////////////////Future-Tense///////////////////////
displayYoFuture = (yo) => {
  let future_tense_yo = yo
  $("#singular-first-future").empty().append(" " + yo);
}

displayTuFuture = (tu) => {
  let future_tense_tu = tu
  $("#singular-second-future").empty().append(" " + tu);
}

displayThirdFuture = (third) => {
  let future_tense_third = third
  $("#singular-third-future").empty().append(" " + third);
}

displayNosotrosFuture = (nosotros) => {
  let future_tense_nosotros = nosotros
  $("#plural-first-future").empty().append(" " + nosotros);
}

displayVosotrosFuture = (vosotros) => {
  let future_tense_vosotros = vosotros
  $("#plural-second-future").empty().append(" " + vosotros);
}

displayGroupFuture = (group) => {
  let future_tense_group = group
  $("#plural-third-future").empty().append(" " + group);
}
////////////////////////Conditional-Tense/////////////////////////
displayYoConditional = (yo) => {
  let conditional_tense_yo = yo
  $("#singular-first-conditional").empty().append(" " + yo);
}

displayTuConditional = (tu) => {
  let conditional_tense_tu = tu
  $("#singular-second-conditional").empty().append(" " + tu);
}

displayThirdConditional = (third) => {
  let conditional_tense_third = third
  $("#singular-third-conditional").empty().append(" " + third);
}

displayNosotrosConditional = (nosotros) => {
  let conditional_tense_nosotros = nosotros
  $("#plural-first-conditional").empty().append(" " + nosotros);
}

displayVosotrosConditional = (vosotros) => {
  let conditional_tense_vosotros = vosotros
  $("#plural-second-conditional").empty().append(" " + vosotros);
}

displayGroupConditional = (group) => {
  let conditional_tense_group = group
  $("#plural-third-conditional").empty().append(" " + group);
}
});
