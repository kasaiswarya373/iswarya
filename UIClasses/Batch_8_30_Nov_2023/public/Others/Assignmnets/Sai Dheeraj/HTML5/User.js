var getthemechooser = () => {
    var choosentheme = document.querySelector("#themeChooser").value;
    console.log(choosentheme);

    localStorage.setItem("userChoosenTheme", choosentheme);
    applytheme(choosentheme);
}
var applytheme = (colorName) => {
    document.querySelector("body").style.background = colorName;
}
var Rememberdata = () => {
    var rememberCheckbox = document.querySelector("#rememberCheck");
    var inputUsername = document.querySelector("#username").value;
    var inputPassword = document.querySelector("#password").value;
    var registrationmsg = document.querySelector(".registrationmsg");
    
    if (rememberCheckbox.checked) {
        localStorage.setItem("username", inputUsername);
        localStorage.setItem("password", inputPassword);
        registrationmsg.textContent = "Thank you for registering!";
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        registrationmsg.textContent = "";
    }
}
function displayWelcomeMessage() {
    var username = localStorage.getItem("username");
    if (username) {
        var welcomeBlock = document.querySelector(".welcomeBlock");
        welcomeBlock.innerHTML = "Continue Registration Process !";
        
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("userChoosenTheme") !== null) {
        applytheme(localStorage.getItem("userChoosenTheme"));
    }
    displayWelcomeMessage();
    Rememberdata();
});

