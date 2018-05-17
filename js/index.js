
// Enable tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

// Trigger modal on submit, prevent post
$('#contactSubmitButton').on('click', function(e){
  e.preventDefault();
  $('#contactSuccessModal').modal();
});