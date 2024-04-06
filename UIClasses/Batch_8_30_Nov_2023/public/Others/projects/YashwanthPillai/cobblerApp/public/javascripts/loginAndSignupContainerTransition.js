document.addEventListener("DOMContentLoaded", () => {
const wrapper = $(".ls-wrapper");
const loginLink = $(".login-link");
const registerLink = $(".register-link");

registerLink.on("click", () => {
  wrapper.addClass("active");
});
loginLink.on("click", () => {
  wrapper.removeClass("active");
});
})


/////----------------- REMEMBER ME IN LOGIN PAGE ------------------/////


// const remCheck =  document.getElementById("remember_Me");
// const emailInput = document.querySelector("#u_Email").value;
// const passInput = document.querySelector("#u_pwd").value;

// if (localStorage.checkbox && localStorage.checkbox !== "") {
//   remCheck.setAttribute("checked", "checked");
//   emailInput.value = localStorage.email ;
//   passInput.value = localStorage.password;
// } else {
//   remCheck.removeAttribute("checked");
//   emailInput.value = "";
//   passInput.value = "";
// }




