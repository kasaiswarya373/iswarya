var sample = () => {
  console.log("frm sample");
  console.log(document.querySelector("#sampleTxtBox").value);
};

var registerUser = () => {};

var validateKeyUpEvents = (event) => {
  var element = event.target;
  if (element.value.length > 0) {
    document.querySelector(".validationList").style.display = "block";
  } else {
    document.querySelector(".validationList").style.display = "none";
  }

  // Valiadtion for password length
  if (element.value.length == 8) {
    document.querySelector("#lenValidation").style.color = "Green";
  } else {
    document.querySelector("#lenValidation").style.color = "Red";
  }
  // validation for first letter to be upper case

  var charCodeOfFirstChar = element.value.charCodeAt(0);

  if (charCodeOfFirstChar >= 65 && charCodeOfFirstChar <= 90) {
    // Its upper case
    document.querySelector("#firstCharValidation").style.color = "Green";
  } else {
    document.querySelector("#firstCharValidation").style.color = "Red";
  }

  //Password should have min one digit and max of 2 digits
  var digit = element.value.replace(/[^0-9]/g, "").length;
  if (digit >= 1 && digit <= 2) {
    document.querySelector("#oneDigitOrTwoDigitValidation").style.color =
      "Green";
  } else {
    document.querySelector("#oneDigitOrTwoDigitValidation").style.color = "Red";
  }

  //For Fourth Validation
  var specialCase = new RegExp("(?=.*[!@#$%^&*])");
  if (specialCase.test(element.value)) {
    document.querySelector("#specialSymbolValidation").style.color = "Green";
  } else {
    document.querySelector("#specialSymbolValidation").style.color = "Red";
  }

  // Fifth validation
  var array = ["!", "@", "#", "$", "%", "&", "*"];
  var lastCharacter = element.value[element.value.length - 1];
  if (array.includes(lastCharacter)) {
    document.querySelector("#endWithSpeSymValidation").style.color = "Green";
  } else {
    document.querySelector("#endWithSpeSymValidation").style.color = "Red";
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
    document.querySelector("#openEye").style.display = "inline-block";
    document.querySelector("#closedEye").style.display = "none";
  }
};
