$(function(){
    let foo = 123;
  // grab button by id
  $('#get_verbs').on('click',function(e){
      e.preventDefault();
    $('.mostrame').css("opacity", ".5");

  });

  function pop(){
    axios.get('http://localhost:3000/present-tense/1')
    .then(function(res){
      console.log(res)
    })
  }



});
