var saveUserCredentials = () => {
  var userNameInput = document.getElementById("user_name");
  var userPassword = document.getElementById("pass_word");
  var rememberMeCheckbox = document.getElementById("rememberMe");

  var username = userNameInput.value;
  var password = userPassword.value;
  var rememberMe = rememberMeCheckbox.checked;

  if (username.trim() !== "" && password.trim() !== "" && rememberMe) {
    localStorage.setItem("savedUsername", username);
    localStorage.setItem("savedPassword", password);
    localStorage.setItem("rememberMe", "true");
    alert("User data saved successfully!");
  } else {
    localStorage.removeItem("savedUsername");
    localStorage.removeItem("savedPassword");
    localStorage.removeItem("rememberMe");
    // console.log("User Data Cleared!");
  }
};
var loadUserData = () => {
  var savedUsername = localStorage.getItem("savedUsername");
  var savedPassword = localStorage.getItem("savedPassword");
  var rememberMe = localStorage.getItem("rememberMe");

  if (savedUsername) {
    document.getElementById("user_name").value = savedUsername;
    document.getElementById("pass_word").value = savedPassword;

    if (rememberMe === "true") {
      document.getElementById("rememberMe").checked = true;
    }
  }
};

document.addEventListener("DOMContentLoaded", loadUserData);
