// (string)type : U/L/Number

var getCaptcha = () => {
    var captchaText = generateCaptchaValue();
    document.querySelector("#box").innerText = captchaText;
}
var generateCaptchaValue = () => {
    var pattern = 'ULNLU';
    var captchaText = '';
    var pattern = pattern.split('');
    for (var i = 0; i < pattern.length; i++) {
        captchaText += getRandomCharOrNumber(pattern[i]);
    }
    return captchaText;
}

var getRandomCharOrNumber = (type) => {
    type = type.trim(); // remove the spaces before and after char
    type = type.toUpperCase();

    switch (type) {
        case 'N': return Math.round(Math.random() * 9);
            break;
        case 'U': var minRange = 65;
            var maxRange = 90;
            break;
        case 'L': var minRange = 97;
            var maxRange = 122;
            break;
    }

    var randomCharAlphabet = (Math.random() * (maxRange - minRange)) + minRange;
    randomCharAlphabet = Math.round(randomCharAlphabet);
    return String.fromCharCode(randomCharAlphabet);
}