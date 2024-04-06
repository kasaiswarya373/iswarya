var setUserDetails = () => {
    var userDetails = {}
    userDetails.email = document.querySelector("#emailInput").value;
    userDetails.password = document.querySelector("#passwordInput").value;
    localStorage.setItem("data", JSON.stringify(userDetails));
}

var gettingData = () => {
    var storeData = localStorage.getItem("data");
    if (storeData) {
        var userDetails = JSON.parse(storeData);
        document.querySelector("#emailInput").value = userDetails.email;
        document.querySelector("#passwordInput").value = userDetails.password;
    }
}