var generateCaptch = () => {
    var captchaValue = randomUppercase1() + randomNumber() + randomLowercase() + randomUppercase2() + randomLowercase2();
    document.querySelector("span").innerHTML = captchaValue;
}

var randomUppercase1 = () => {
    var minRange = 65;
    var maxRange = 90
    var randomAlphabet = Math.round(Math.random() * (maxRange - minRange) + minRange);
    var char = (String.fromCharCode(randomAlphabet));
    return char;
}

var randomNumber = () => {
    var randomNum = Math.round(Math.random() * 9);
    return randomNum;
}

var randomLowercase = () => {
    var minRange = 97;
    var maxRange = 122;
    var randomAlphabet = Math.round(Math.random() * (maxRange - minRange) + minRange);
    var char = (String.fromCharCode(randomAlphabet));
    return char;
}

var randomUppercase2 = () => {
    var minRange = 65;
    var maxRange = 90
    var randomAlphabet = Math.round(Math.random() * (maxRange - minRange) + minRange);
    var char = (String.fromCharCode(randomAlphabet));
    return char;
}

var randomLowercase2 = () => {
    var minRange = 97;
    var maxRange = 122;
    var randomAlphabet = Math.round(Math.random() * (maxRange - minRange) + minRange);
    var char = (String.fromCharCode(randomAlphabet));
    return char;
};
//generateCaptch(); //if you call this function
// it shows captcha on the load of the page

var getConfirm = () => {
    confirm("Do you really want to submit?");
}
