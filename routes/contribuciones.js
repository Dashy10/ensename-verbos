$('.delete').on('click', function() {
  let id = $(this).parent().attr('data-id')
  axios.delete("http://localhost:5000/"+id)
  $(this).parent().remove();
})

// WHEN YOU CLICK THIS BUTTON YOU ARE NOW ALLOWED TO EDIT INPUT
$('.edit').on('click', function(){
  $(this).prev().removeAttr('readonly')
  $(this).prev().focus();
})

// THIS IS EDIT
$('.input_item').on('change',function(){
  let id = parseInt($(this).parent().attr('data-id'))
  // WHEN YOU PULL SOMETHING USING VAL IT IS PULLED IN AS A STRING AND
  // YOU NEED TO CONVERT IT
  let val = $(this).val();
  console.log(val)
  $(this).attr('readonly',true)
  axios.patch("http://localhost:5000/"+id, {
    first: val,
    id: id
  })
})
