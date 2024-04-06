var registerUser = () => {
  //   console.log(registerUser);
};
var validateKeyUpEvents = (event) => {
  var element = event.target;
  if (element.value.length > 0) {
    document.querySelector(".validationList").style.display = "block";
  } else {
    document.querySelector(".validationList").style.display = "none";
  }

  //1. Valiadtion for password length
  if (element.value.length == 8) {
    document.querySelector("#lenValidation").style.color = "Green";
  } else {
    document.querySelector("#lenValidation").style.color = "Red";
  }

  //2. validation for first letter to be upper case
  var charCodeOfFirstChar = element.value.charCodeAt(0);

  if (charCodeOfFirstChar >= 65 && charCodeOfFirstChar <= 90) {
    document.querySelector("#firstCharValidation").style.color = "Green";
  } else {
    document.querySelector("#firstCharValidation").style.color = "Red";
  }

  //3. Validation for Password should have min one digit and max of 2 digits
  var minMaxdigit = element.value;

  var hasDigit = true; // Check for the presence of at least one digit using ASCII values

  for (var i = 0; i < minMaxdigit.length; i++) {
    var charCode = minMaxdigit.charCodeAt(i);

    if (charCode >= 48 && charCode <= 57) {
      // ASCII values for digits (0-9) are between 48 and 57
      hasDigit = false;
      break;
    }

    if (hasDigit) {
      document.querySelector("#secondCharValidation").style.color = "Green";
    } else {
      document.querySelector("#secondCharValidation").style.color = "Red";
    }
  }

  // 4. Should have one special symbol #, $, &, @
  var sSymbol = element.value;
  // Check for the presence of at least one special symbol (#, $, &, @)
  var hasSpecialSymbol = /[#\$&@]/.test(sSymbol);

  if (hasSpecialSymbol) {
    document.querySelector("#thirdCharValidation").style.color = "Green";
  } else {
    document.querySelector("#thirdCharValidation").style.color = "Red";
  }

  // 5. Password should not end with a special symbol
  var sSymbol2 = element.value;

  var hasSpecialSymbol = /[#\$&@]/.test(sSymbol2);
  var endsWithSpecialSymbol = /[#\$&@]$/.test(sSymbol2);

  if (hasSpecialSymbol && !endsWithSpecialSymbol) {
    document.querySelector("#fourthCharValidation").style.color = "Green";
  } else {
    document.querySelector("#fourthCharValidation").style.color = "Red";
  }
};

var validateKeyPressEvents = (event) => {
  var element = event.target;
};
var changeTheType = () => {
  var pwdElement = document.querySelector("#userPassword");
  var currentType = pwdElement.getAttribute("type");
  if (currentType == "password") {
    pwdElement.setAttribute("type", "text");
    document.querySelector("#openEye").style.display = "none";
    document.querySelector("#closedEye").style.display = "inline-block";
  } else {
    pwdElement.setAttribute("type", "password");
    document.querySelector("#openEye").style.display = "inline";
    document.querySelector("#closedEye").style.display = "none";
  }
};
