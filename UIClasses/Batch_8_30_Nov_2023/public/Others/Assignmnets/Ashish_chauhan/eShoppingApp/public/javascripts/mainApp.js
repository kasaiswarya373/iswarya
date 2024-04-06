var loadSelectPage = (type) => {
  location.hash = type;
  if (type == "LOgin") return;
  var templateUrl = "";
  switch (type) {
    case "signup":
      templateUrl = "templates/newSignUp.htm";
      break;
    case "home":
      $("#mainContentBlockArea").html(" ");
      break;
    case "frgotPwd":
      templateUrl = "templates/forgotPwd.htm";
      break;
    case "productDetails":
      templateUrl = "templates/productDetails.htm";
      break;
  }
  axios.get(templateUrl).then((response) => {
    if (type == "signup") {
      $("#mainContentBlockArea").html(response.data);
    } else if (type == "frgotPwd") {
      // hide existing popup
      $("#pageLoginModel").modal("hide");
      $("#mainContentBlockArea").html(response.data);
    } else if (type == "productDetails") {
      $("#mainContentBlockArea").html(response.data);
      loadProductDetails();
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const checkrem = document.getElementById("rememberMe"),
    emailInput = document.querySelector("#userAccountId"),
    passInput = document.querySelector("#accountPwd");
  if (localStorage.checkbox && localStorage.checkbox !== "") {
    checkrem.setAttribute("checked", "checked");
    emailInput.value = localStorage.username;
    passInput.value = localStorage.userpassword;
  } else {
    checkrem.removeAttribute("checked");
    emailInput.value = "";
    passInput.value = "";
  }
});

var storeUserCredentials = () => {
  const checkrem = document.getElementById("rememberMe"),
    emailInput = document.querySelector("#userAccountId"),
    passInput = document.querySelector("#accountPwd");
  if (checkrem.checked && emailInput.value && passInput.value !== "") {
    localStorage.username = emailInput.value;
    localStorage.userpassword = passInput.value;
    localStorage.checkbox = checkrem.value;
  } else {
    localStorage.username = "";
    localStorage, (userpassword = "");
    localStorage.checkbox = "";
  }
};
