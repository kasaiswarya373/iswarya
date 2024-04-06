var changeType = () => {
  var pwdElement = document.querySelector("#userPassword");
  var currentType = pwdElement.getAttribute("type");
  if (currentType == "password") {
    pwdElement.setAttribute("type", "text");
    document.querySelector("#closedEye").style.display = "none";
    document.querySelector("#openEye").style.display = "inline-block";
  } else {
    pwdElement.setAttribute("type", "password");
    document.querySelector("#closedEye").style.display = "inline-block";
    document.querySelector("#openEye").style.display = "none";
  }
};

var keyUpEvent = () => {
  var element = event.target;
  // For First Validation
  if (element.value.length == 8) {
    document.querySelector(".firstValidation").style.color = "Yellowgreen";
  } else {
    document.querySelector(".firstValidation").style.color = "Red";
  }
  // For Second Validation
  var charCode = element.value.charCodeAt(0);
  if (charCode >= 65 && charCode <= 90) {
    document.querySelector(".secondValidation").style.color = "Yellowgreen";
  } else {
    document.querySelector(".secondValidation").style.color = "red";
  }
  // For Third Validation
  var digit = element.value.replace(/[^0-9]/g, "").length;
  if (digit >= 1 && digit <= 2) {
    document.querySelector(".thirdValidation").style.color = "Yellowgreen";
  } else {
    document.querySelector(".thirdValidation").style.color = "red";
  }
  //For Fourth Validation
  var specialCase = new RegExp("(?=.*[!@#$%^&*])");
  if (specialCase.test(element.value)) {
    document.querySelector(".fourthValidation").style.color = "yellowgreen";
  } else {
    document.querySelector(".fourthValidation").style.color = "red";
  }
  // Fifth Validation
  var array = ["!", "@", "#", "$", "%", "&", "*"];
  var lastCharacter = element.value[element.value.length - 1];
  if (array.includes(lastCharacter)) {
    document.querySelector(".fifthValidation").style.color = "red";
  } else {
    document.querySelector(".fifthValidation").style.color = "yellowgreen";
  }
};
