



// storeSignupData()

var storeSignupData = {
  loginAndSignupDetails() {
    storeSignupData.userName = $("#userName").val().trim();

    if (storeSignupData.userName === "") {
      $("#E_UN").show();
      return;
    } else {
      $("#E_UN").hide();
    }
    
    storeSignupData.userEmail = $("#user_Email").val().trim();
    if (storeSignupData.userEmail === "") {
      $("#U_EM").show();
      return;
    } else {
      $("#U_EM").hide();
    }
    

    storeSignupData.userPwd = $("#user_Pwd").val().trim();
    if (storeSignupData.userPwd === "") {
      $("#U_PD").show();
      return;
    } else {
      $("#U_PD").hide();
    }
    
  },
};





// if(userName && userEmail && userPwd){
 
//   let userDetails = {name : userName, emailId : userEmail, pwd:userPwd}
//   localStorage.setItem("userDetails",JSON.stringify(userDetails))
// }

$("#signup-btn").on( "click", function() {


    var storingSignupDataLs = {
    userNameLs : storeSignupData.userName,
    userEmailLs : storeSignupData.userEmail,
    userPwdLs : storeSignupData.userPwd

  }
  storeSignupData.loginAndSignupDetails();
  localStorage.setItem("storingSignupDataLs",(JSON.stringify(storingSignupDataLs)))
  
  console.log(
    storeSignupData.userName,
    storeSignupData.userEmail,
    storeSignupData.userPwd
  );
  resetValues();

})

var resetValues = () => {
  $("#userName").val("");
  $("#user_Email").val("");
  $("#user_Pwd").val("");
};

/// VIEWING PASSWORD

var showPass = () => {
  var showPassword = $("#user_Pwd");
  var currentType = $("#user_Pwd").attr("type");
  // console.log(showPassword,currentType)

  if (currentType === "password") {
    showPassword.attr("type", "text");
    $("#openEye").css("display", "inline-block");
    // $('element_selector').css('property_name', 'value');
    $("#closedEye").css("display", "none");
  } else {
    showPassword.attr("type", "password");
    $("#openEye").css("display", "none");
    // $('element_selector').css('property_name', 'value');
    $("#closedEye").css("display", "inline-block");
  }
};

///  USERNAME VALIDATION
var userNameVal = (event) => {
  var element = event.target;
  var userNameChar = element.value;

  var digit = /[0-9]/g;

  if (userNameChar.match(digit)) {
    $("#userVal").css("display", "none");
  } else {
    $("#userVal").css("display", "inline-block");
    return true;
  }

  var uppercase = /[A-Z]/g;

  if (userNameChar.match(uppercase)) {
    $("#userVal").css("display", "none");
  } else {
    $("#userVal").css("display", "inline-block");
    return true;
  }
  var lowercase = /[a-z]/g;

  if (userNameChar.match(lowercase)) {
    $("#userVal").css("display", "none");
  } else {
    $("#userVal").css("display", "inline-block");
    return true;
  }
};

/// EMAIL VALIDATION
var emailVal = (event) => {
  var element = event.target;
  var emailCharacters = element.value;

  var emailChar = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/g;

  if (emailCharacters.match(emailChar)) {
    $("#valEmail").css("display", "none");
  } else {
    $("#valEmail").css("display", "inline-block");
  }
};

/// PASSWORD VALIDATION

var keyUpPwd = (event) => {
  //   console.log(event);

  var element = event.target;

  /////// 1. for min characters

  if (element.value.length >= 8) {
    // min-length-val error
    $("#min-length-val").css("color", "green");
    $("#checkOne").css("display", "inline-block");
    $("#crossOne").css("display", "none");
  } else {
    $("#min-length-val").css("color", "red");
    $("#checkOne").css("display", "none");
    $("#crossOne").css("display", "inline-block");
  }
  // // ////// 2. For max characters

  if (element.value.length <= 11) {
    $("#max-length-val").css("color", "red");
    $("#checkTwo").css("display", "none");
    $("#crossTwo").css("display", "inline-block");
  } else {
    $("#max-length-val").css("color", "green");
    $("#checkTwo").css("display", "inline-block");
    $("#crossTwo").css("display", "none");
  }

  // 3. One Numerical character
  var pwdCharacters = element.value;

  var digit = /[0-9]/g;

  if (pwdCharacters.match(digit)) {
    $("#num-char").css("color", "green");
    $("#checkThree").css("display", "inline-block");
    $("#crossThree").css("display", "none");
  } else {
    $("#num-char").css("color", "red");
    $("#checkThree").css("display", "none");
    $("#crossThree").css("display", "inline-block");
  }

  // 4. One Uppercase Character

  // var lenghtOfValue = element.value.maxLength

  var uppercase = /[A-Z]/g;
  if (pwdCharacters.match(uppercase)) {
    $("#upper-case").css("color", "green");
    $("#checkFour").css("display", "inline-block");
    $("#crossFour").css("display", "none");
  } else {
    $("#upper-case").css("color", "red");
    $("#checkFour").css("display", "none");
    $("#crossFour").css("display", "inline-block");
  }

  var symbols = /[@$&#!?*_-]+/;

  if (pwdCharacters.match(symbols)) {
    $("#symbols-char").css("color", "green");
    $("#checkFive").css("display", "inline-block");
    $("#crossFive").css("display", "none");
  } else {
    $("#symbols-char").css("color", "red");
    $("#checkFive").css("display", "none");
    $("#crossFive").css("display", "inline-block");
  }

  var lowercase = /[a-z]/g;

  if (pwdCharacters.match(lowercase)) {
    $("#lowercase-char").css("color", "green");
    $("#checkSix").css("display", "inline-block");
    $("#crossSix").css("display", "none");
  } else {
    $("#lowercase-char").css("color", "red");
    $("#checkSix").css("display", "none");
    $("#crossSix").css("display", "inline-block");
  }
};


