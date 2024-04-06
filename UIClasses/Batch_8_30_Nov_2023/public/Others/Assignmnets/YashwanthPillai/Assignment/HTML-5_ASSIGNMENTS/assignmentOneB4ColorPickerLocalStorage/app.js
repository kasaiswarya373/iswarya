// alert(localStorage.getItem('userSelectedTheme'))

var applyTheme = (theme) =>{
    document.querySelector(".container").style.background = theme;
}


document.addEventListener("DOMContentLoaded" , ()=>{
    if(localStorage.getItem('userSelectedTheme') != null){
        applyTheme(localStorage.getItem('userSelectedTheme'))
    }

    if(localStorage.getItem("userGivenName") != null){
        showUserDetails(localStorage.getItem("userGivenName"))
    }
})


var getTheme = () =>{
    var theme = document.querySelector("#userColor").value
    // document.querySelector('#userColor').value = ''
    console.log(theme);
    
    applyTheme(theme)
    localStorage.setItem('userSelectedTheme',theme)
}


var getUserDetails = () =>{
    var takeUserName = document.querySelector("#u_name").value

    localStorage.setItem("userGivenName" ,takeUserName )
    console.log(takeUserName);
    showUserDetails(takeUserName)
    document.querySelector("#u_name").value = ''
}
var showUserDetails = (takeUserName) =>{
    document.querySelector("#userMessage").innerHTML = takeUserName
    document.querySelector(".message").style.display = "block"
}