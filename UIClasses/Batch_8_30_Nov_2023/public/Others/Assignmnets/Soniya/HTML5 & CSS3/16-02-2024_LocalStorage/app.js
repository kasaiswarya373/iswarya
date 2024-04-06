var savedUsername;
var savedPassword;
var rememberMeCheckbox;
document.addEventListener("DOMContentLoaded", () =>
{
    savedUsername = localStorage.getItem("username");
    savedPassword = localStorage.getItem("password");
    rememberMeCheckbox = document.getElementById("checkBox");

  if (savedUsername && savedPassword) {
    document.getElementById("userName").value = savedUsername;
    document.getElementById("passWord").value = savedPassword;
    rememberMeCheckbox.checked = true;
  }
});
var saveLoginCredentials = () => {
    var username = document.getElementById("userName").value;
    var password = document.getElementById("passWord").value;

    if (rememberMeCheckbox.checked) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }

  };

