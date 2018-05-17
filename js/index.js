$(function () {

  const $contactForm = $('#contactForm');
  const $contactSuccessModal = $('#contactSuccessModal');

  // Enable tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // Trigger modal on submit, prevent post
  $contactForm.submit(function(e) {
    e.preventDefault(e);
    $contactSuccessModal.modal();
  });

  // Reset form on modal close
  $contactSuccessModal.on('hidden.bs.modal', function (e) {
    $contactForm[0].reset();
  })

});