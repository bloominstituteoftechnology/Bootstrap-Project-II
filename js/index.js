$(function () {
    $('[data-toggle="tooltip"]').tooltip()
    $('#example').tooltip(options)
  })
  
var form = document.querySelector('.needs-validation');

form.addEventListener("submit", function (event) {
    if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
}
form.classList.add("was-validated");


})