function clearErrors() {
  errors = document.getElementsByClassName("formerror");
  // get the all errors value and iterate one by one
  for (let item of errors) {
    item.innerHTML = "";
  }
}

function seterror(id, error) {
  //sets error inside tag of id
  element = document.getElementById(id);
  element.getElementsByClassName("formerror")[0].innerHTML = error;
}

///perform validation
function validateForm() {
  // if validation fails, set the value of returnval to false
  var returnval = true;
  clearErrors();

  // name logic
  var name = document.forms["myForm"]["Name"].value;
  if (name == "") {
    seterror("nameSec", "**Please fill the Name field");
    return false;
  }
  if (name.length <= 2 || name.length > 20) {
    seterror("nameSec", "**Length must be between 3 and 20");
    return false;
  }
  if (!isNaN(name)) {
    seterror("nameSec", "**Only characters are allowed");
    return false;
  }
  // email logic
  var email = document.forms["myForm"]["Email"].value;
  if (email == "") {
    seterror("emailSec", "**Please fill the Email field");
    return false;
  }
  if (email.indexOf("@") <= 0) {
    seterror("emailSec", "**@ Invalid Email");
    return false;
  }
  if (
    email.charAt(email.length - 4) != "." &&
    email.charAt(email.length - 3) != "."
  ) {
    seterror("emailSec", "**. Invalid Email");
    return false;
  }
  // phone logic
  var phone = document.forms["myForm"]["Phone"].value;
  if (phone == "") {
    seterror("phoneSec", "**Please fill the phone number field");
    return false;
  }
  if (isNaN(phone)) {
    seterror("phoneSec", "**User must write digits only not characters");
    return false;
  }
  if (phone.length != 10) {
    seterror("phoneSec", "**Phone number must be 10 digits only");
    return false;
  }
  // message logic
  var message = document.forms["myForm"]["Message"].value;
  if (message == "") {
    seterror("msgSec", "**Please fill the message field");
    return false;
  }
  if (message.length < 10) {
    seterror("msgSec", "**Message should be atleast 10 characters !");
    returnval = false;
  }

  return returnval;
}
