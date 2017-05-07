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
      displayYo(res.data.data.yo)
      displayTu(res.data.data.tú)
      displayThird(res.data.data.third)
      displayNosotros(res.data.data.nosotros)
      displayVosotros(res.data.data.vosotros)
      displayGroup(res.data.data.group)
    });
  });

displayVerb = (verb) => {
  let all_present_tense_verbs = verb
  $('#verb-name').empty().append(" " + verb)
}

displayYo = (yo) => {

  let all_present_tense_verbs = yo
  console.log(all_present_tense_verbs)
  $("#singular-first").empty().append(" " + yo);
}
displayTu = (tu) => {

  let all_present_tense_verbs = tu
  console.log(all_present_tense_verbs)
  $("#singular-second").empty().append(" " + tu);
}

displayThird = (third) => {

  let all_present_tense_verbs = third
  console.log(all_present_tense_verbs)
  $("#singular-third").empty().append(" " + third);
}

displayNosotros = (nosotros) => {

  let all_present_tense_verbs = nosotros
  console.log(all_present_tense_verbs)
  $("#plural-first").empty().append(" " + nosotros);
}

displayVosotros = (vosotros) => {

  let all_present_tense_verbs = vosotros
  console.log(all_present_tense_verbs)
  $("#plural-second").empty().append(" " + vosotros);
}

displayGroup = (group) => {

  let all_present_tense_verbs = group
  console.log(all_present_tense_verbs)
  $("#plural-third").empty().append(" " + group);
}

});
