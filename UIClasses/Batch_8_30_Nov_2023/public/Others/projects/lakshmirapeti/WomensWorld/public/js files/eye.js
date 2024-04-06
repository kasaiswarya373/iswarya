var password = document.getElementById("password");
var eyeicon = document.getElementById("eyeicon");
var eyeslash = document.getElementById("hideeyeicon");

showHidePassword = () => {
  if (password.type == 'password') {
    password.setAttribute('type', 'text');
    eyeslash.style.display = "none";
  }
};
hidepassword = () => {
  if (password.type == 'text') {
    password.setAttribute('type', 'password');
    eyeslash.style.display = "block";

  }
}

eyeicon.addEventListener('click', hidepassword);
eyeslash.addEventListener("click", showHidePassword)

// signup password

var signuppassword = document.getElementById("signuppassword");
var signupeyeicon = document.getElementById("signupeyeicon");
var signuphideeye = document.getElementById("signuphideeyeicon");


signupshowHidePassword = () => {
  if (signuppassword.type == 'password') {
    signuppassword.setAttribute('type', 'text');
    signuphideeye.style.display = "none";
  }
};
signuphidepassword = () => {
  if (signuppassword.type == 'text') {
    signuppassword.setAttribute('type', 'password');
    signuphideeye.style.display = "block";

  }
}


signupeyeicon.addEventListener('click', signuphidepassword);
signuphideeye.addEventListener("click", signupshowHidePassword);

// reenter password eyeicon

var signupreenter = document.getElementById("signupreenter");
var reentereyeicon = document.getElementById("signupreentereyeicon");
var reenterhideeye = document.getElementById("signupreenterhideeyeicon");


reenter_showHidePassword = () => {
  if (signupreenter.type == 'password') {
    signupreenter.setAttribute('type', 'text');
    reenterhideeye.style.display = "none";
  }
};
reenter_hidepassword = () => {
  if (signupreenter.type == 'text') {
    signupreenter.setAttribute('type', 'password');
    reenterhideeye.style.display = "block";

  }
}


reentereyeicon.addEventListener('click', reenter_hidepassword);
reenterhideeye.addEventListener("click", reenter_showHidePassword)

// login

var login = document.getElementById("loginmodal")
var modal = bootstrap.Modal.getOrCreateInstance(login)
setTimeout(() => {
  modal.show()
}, 5000)
