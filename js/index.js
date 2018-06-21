$(function() {
  $('[data-toggle="tooltip"]').tooltip();
  $('a[href*="#"').click(function(event) {
    var target = $(this.hash);
    event.preventDefault();
    $('html, body').animate(
      {
        scrollTop: target.offset().top - 90
      },
      1000
    );
  });
});
