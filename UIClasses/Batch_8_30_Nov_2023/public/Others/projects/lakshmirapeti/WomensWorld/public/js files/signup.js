var username = document.querySelector(".signupusername");
var passwords = document.querySelector(".signuppassword");
var reenter = document.getElementById("signupreenter");
var email = document.querySelector(".signupemail");
var number = document.querySelector(".signupnumber");
var female = document.getElementById("female");
var male = document.getElementById("male");
var termsconditions = document.getElementById("checkbox");
var form = document.getElementById("signupform");
var btn = document.getElementById("clickbtn")
var houseno = document.getElementById("house")
var village = document.getElementById("village")
var city = document.getElementById("city")
var district = document.getElementById("district")
var state = document.getElementById("state")
var pincode = document.getElementById("pincode")
var signupmodal = document.getElementById('signupmodal')
let welcomemsg = document.getElementById('welcomeModal')
let sorrymsg = document.getElementById('sorryModal');
let displayoffers = document.querySelector('.display')
// error messages
var nameerror = document.getElementById("errormsg");
var passworderror = document.getElementById("pattern");
var reentererror = document.getElementById("matchpass");
var emailerror = document.getElementById("emailerr");
var phonenumerror = document.getElementById("numerr");
var passlenerror = document.getElementById("passlen");
var usernumerror = document.getElementById("namemsg");
var gendererror = document.getElementById("gendererr");
var checkboxerror = document.getElementById("checkerr")
var villageerr = document.getElementById("villageerr");
var houseerr = document.getElementById("houseerr");
var stateerr = document.getElementById("stateerr");
var districterr = document.getElementById("districterr");
var pincodeerr = document.getElementById("pincodeerr");
var cityerr = document.getElementById("cityerr");


form.addEventListener('keyup', () => {
  if (document.querySelector("input[name=gender]:checked") != null) { // indicates atlease one radio selected
      console.log("one button Selected")
  } else { // Indicates not even one button selected
    console.log("one button Not Selected")
  }
/*
  if (username.value.trim() == '' || passwords.value.trim() == '' || reenter.value.trim() == '' || email.value.trim() == '' || number.value.trim() == '' || village.value.trim() == '' || houseno.value.trim() == '' || city.value.trim() == '' || district.value.trim() == '' || state.value.trim() == '' || pincode.value.trim() == '') {
    btn.setAttribute("disabled", "disabled")
    
  }
  if (username.value.length <= 4 || username.value.length > 15) {
    nameerror.style.display = "block"
    
  }
  else {
    nameerror.style.display = "none"
  }
  if (username.value.includes("0") || username.value.includes("1") || username.value.includes("2") || username.value.includes("3") || username.value.includes("4") || username.value.includes("5") || username.value.includes("6") || username.value.includes("7") || username.value.includes("8") || username.value.includes("9")) {
    usernumerror.style.display = "block";
    
  } else {
    usernumerror.style.display = "none";
  }
  if (passwords.value != reenter.value) {
    reentererror.style.display = "block";
    
  } else {
    reentererror.style.display = "none";
  }
  if (passwords.value.includes('#') || passwords.value.includes('$') || passwords.value.includes('%') || passwords.value.includes('&') || passwords.value.includes('*') || passwords.value.includes('-') || passwords.value.includes('=') || passwords.value.includes('/') || passwords.value.includes('?') || passwords.value.includes('!') || passwords.value.includes(',')) {
    passworderror.style.display = "block";
  } else {
    passworderror.style.display = "none";
  }
  if (passwords.value.length <= 4) {
    passlenerror.style.display = "block";
  } else {
    passlenerror.style.display = "none";
  }
  if (!email.value.includes("@") || !email.value.includes(".com")) {
    emailerror.style.display = "block";
  } else {
    emailerror.style.display = "none";
  }
  if (number.value.length != 10) {
    phonenumerror.style.display = "block";
  }
  else {
    phonenumerror.style.display = "none";
  }
  if (!houseno.value.length > 0) {
    houseerr.style.display = "block"
  } else {
    houseerr.style.display = "none"
  }
  if (!village.value.length > 0) {
    villageerr.style.display = "block"
  } else {
    villageerr.style.display = "none"
  }
  if (!city.value.length > 0) {
    cityerr.style.display = "block"
  } else {
    cityerr.style.display = "none"
  }
  if (!state.value.length > 0) {
    stateerr.style.display = "block"
  } else {
    stateerr.style.display = "none"
  }
  if (!district.value.length > 0) {
    districterr.style.display = "block"
  } else {
    districterr.style.display = "none"
  }
  if (pincode.value.length != 6) {
    pincodeerr.style.display = "block"
  } else {
    pincodeerr.style.display = "none"
  }


  if (nameerror.style.display == "none" && usernumerror.style.display == "none" && passworderror.style.display == "none" && passlenerror.style.display == "none" && reentererror.style.display == "none" && emailerror.style.display == "none" && phonenumerror.style.display == "none" && villageerr.style.display == "none" && houseerr.style.display == "none" && cityerr.style.display == "none" && districterr.style.display == "none" && stateerr.style.display == "none" && pincodeerr.style.display == "none") {
    btn.removeAttribute("disabled")
  } else {
    btn.setAttribute("disabled", "disabled")
  }*/
})


function signupdetails() {

  var useraddressdetails = {}
  useraddressdetails.house_no = houseno.value;
  useraddressdetails.village = village.value;
  useraddressdetails.city = city.value;
  useraddressdetails.district = district.value;
  useraddressdetails.state = state.value;
  useraddressdetails.pincode = pincode.value;

  var signupuserdata = {};
  signupuserdata.userid = username.value;
  signupuserdata.user_password = passwords.value;
  signupuserdata.email_id = email.value;
  signupuserdata.phonenumber = number.value;
  signupuserdata.useraddress = useraddressdetails
  if (female.checked == true) {
    axios.post('/signup/get/post', signupuserdata).then((response) => {
      if (response.data.msg == "done") {
        var modal = bootstrap.Modal.getOrCreateInstance(signupmodal)
        modal.hide()
        document.getElementById("login").style.display = "none";
        document.getElementById("signup").style.display = "none";
        document.getElementById("logoutbtn").style.display = "block";
        let wmodal = bootstrap.Modal.getOrCreateInstance(welcomemsg)
        wmodal.show()
        displayoffers.style.display = "block"
        productslists()
      }
    }).catch((err) => {
      console.log(err)
    })
  } else {
    var modal = bootstrap.Modal.getOrCreateInstance(signupmodal)
    modal.hide()
    let smodal = bootstrap.Modal.getOrCreateInstance(sorrymsg)
    smodal.show()
  }
  username.value = "";
  passwords.value = "";
  reenter.value = "";
  email.value = "";
  number.value = "";
  houseno.value = '';
  village.value = '';
  city.value = '';
  district.value = '';
  state.value = '';
  pincode.value = '';
  female.checked = false;
  male.checked = false;
  termsconditions.checked = false;
  btn.setAttribute("disabled", "disabled")

}

