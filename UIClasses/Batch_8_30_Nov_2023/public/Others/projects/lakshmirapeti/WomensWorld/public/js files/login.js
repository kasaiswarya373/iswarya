let loginform = document.getElementById('loginform');
var loginbtn = document.getElementById('loginbtn');
let useriderr = document.getElementById('loginid');
let passworderr = document.getElementById('loginpass');
let loginmodal = document.getElementById('loginmodal');
let welcomemodal = document.getElementById('welcomeModal');

var userdata = {}
userdata.userid = document.getElementById('username').value;
userdata.password = document.getElementById('password').value;
loginform.addEventListener('keyup', () => {
  if (document.getElementById('username').value == "" || document.getElementById('password').value == "") {
    loginbtn.setAttribute("disabled", 'disabled')
  } else {
    loginbtn.removeAttribute("disabled")
  }
})

function logindetails() {
  axios.post('/login/details', { params: userdata }).then((response) => {
    if (response.data.msg == "valid user") {
      var lmodal = bootstrap.Modal.getOrCreateInstance(loginmodal)
      lmodal.hide()
      productslists()
      document.getElementById("login").style.display = "none";
      document.getElementById("signup").style.display = "none";
      document.getElementById("logoutbtn").style.display = "block";
      var welcomemsg = bootstrap.Modal.getOrCreateInstance(welcomemodal)
      welcomemsg.show()
    } else {
      useriderr.style.display = "block"
    }
  })
  document.getElementById('username').value = "";
  document.getElementById('password').value = "";
  loginbtn.setAttribute("disabled", 'disabled')

  setInterval(() => {
    useriderr.style.display = "none"
    passworderr.style.display = "none"
  }, 3000)
}