var username = '';
//alert(localStorage.getItem("userSelectedTheme"));

var applytheme = (colorName) => {
    document.querySelector("body").style.background = colorName;
}

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("userSelectedTheme") != null) {
        applytheme(localStorage.getItem("userSelectedTheme"));
    }    

    if (localStorage.getItem("u_name") != null) {
        showWelcomeBlock(localStorage.getItem("u_name"));
    }
})



var getSelectedTheme = () => {
    var selectedTheme = document.querySelector("#themeSelector").value;
    console.log(selectedTheme);

    localStorage.setItem("userSelectedTheme", selectedTheme );

    applytheme(selectedTheme);
}



var saveUserDetails = () => {
    username = document.querySelector("#userName").value;
    localStorage.setItem("u_name", username);
    document.querySelector("#userName").value = '';
    console.log(username);
    showWelcomeBlock(username)
}

var showWelcomeBlock = (username) => {
    document.querySelector("#u_name").innerHTML = '<b>' + username + '</b>';

    document.querySelector(".welcomeBlock").style.display = 'block'
}