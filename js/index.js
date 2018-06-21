var form = document.getElementsByTagName('form')[0];
var email = document.getElementById('email');
var Name = document.getElementById('Name');
var phone = document.getElementById('phone');
var error = document.querySelector('.error');
console.log(email);
console.log(Name);
console.log(phone);
email.addEventListener("input", function(event) {
  // Each time the user types something, we check if the
  // email field is valid.
  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    error.innerHTML = ""; // Reset the content of the message
    error.className = "error"; // Reset the visual state of the message
  }
}, false);
Name.addEventListener("input", function(event) {
  // Each time the user types something, we check if the
  // email field is valid.
  if (Name.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    error.innerHTML = ""; // Reset the content of the message
    error.className = "error"; // Reset the visual state of the message
  }
}, false);
phone.addEventListener("input", function(event) {
  // Each time the user types something, we check if the
  // email field is valid.
  if (phone.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    error.innerHTML = ""; // Reset the content of the message
    error.className = "error"; // Reset the visual state of the message
  }
}, false);
form.addEventListener("submit", function(event) {
  // Each time the user tries to send the data, we check
  // if the email field is valid.
  if (!email.validity.valid || !phone.validity.valid || !Name.validity.valid) {

    // If the field is not valid, we display a custom
    // error message.
    error.innerHTML = "<h2>All fields required!</h2>";
    error.className = "error active";
    // And we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
}, false);