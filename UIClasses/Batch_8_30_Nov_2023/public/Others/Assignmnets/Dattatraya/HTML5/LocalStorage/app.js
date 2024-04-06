var username = "";

var applytheme = (colorName) => {
  document.querySelector("body").style.background = colorName;
};
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("userSelectedTheme") != null) {
    applytheme(localStorage.getItem("userSelectedTheme"));
  }
  if (localStorage.getItem("login_name") != null) {
    showWelcomeBlock(localStorage.getItem("login_name"));
  }
});

var getSelectedTheme = () => {
  var selectedTheme = document.querySelector("#ThemeSelector").value;
  console.log(selectedTheme);

  localStorage.setItem("userSelectedTheme", selectedTheme);

  applytheme(selectedTheme);
};

var saveUserDetails = () => {
  var username = document.querySelector("#user_name").value;
  localStorage.setItem("login_name", username);
  document.querySelector("#user_name").value = "";
  console.log(username);
  var password = document.querySelector("#pass_word").value;
  document.querySelector("#pass_word").value = "";
  console.log(password);
  showWelcomeBlock(username);
};

var showWelcomeBlock = (username) => {
  document.querySelector("#login_name").innerHTML = username;

  document.querySelector(".WelcomeBlock").style.display = "block";
};
