var Refresh = () => {
    var captchaBox = document.getElementById("captchaBox");
    var captchaValue = generateRandomString(6);
    captchaBox.innerText = captchaValue;
}

function generateRandomString(length) {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var randomString = "";
        for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    randomString += charset.charAt(randomIndex);
}
return randomString;
}