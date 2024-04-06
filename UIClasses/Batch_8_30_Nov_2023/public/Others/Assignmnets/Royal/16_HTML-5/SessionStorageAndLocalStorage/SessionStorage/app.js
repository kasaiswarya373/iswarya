var username = '';
var applytheme = (colorName) => {
    document.querySelector("body").style.background = colorName;

}

document.addEventListener("DOMContentLoaded", () => {
    if(sessionStorage.getItem('userSelectedTheme') != null){
        applytheme(sessionStorage.getItem('userSelectedTheme'));
    }

    if(sessionStorage.getItem('u_name') != null){
        showWelcomeBlock(sessionStorage.getItem('u_name'));
    }
})

var getSelectedTheme = () => {
    var selectedTheme = document.querySelector('#themeSelector').value;
    console.log(selectedTheme)
    
    sessionStorage.setItem("userSelectedTheme", selectedTheme);

    applytheme(selectedTheme);
}



var saveUserDetails = () => {
    var userName = document.querySelector("#userName").value;
    sessionStorage.setItem("u_name", username);
    document.querySelector("#userName").value = '';                 //after reading we are making it empty
    console.log(userName)
    showWelcomeBlock(userName);
}

var showWelcomeBlock = (userName) => {
    document.querySelector("#u_name").innerHTML = '<b>' + userName +' </b>' ; 
    document.querySelector('.welcomeBlock').style.display = 'block'; 
}