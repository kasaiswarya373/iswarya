/**
 * Pattern - ULNLU
 * type -> U/L (Upper/Lower)
 */

var getCaptchaValue = (customCaptchaPattern) => {

    var pattern;
    if (customCaptchaPattern){
        pattern = customCaptchaPattern;
    } else{

        var pattern = 'ULNLU';
    }

    var capchaText = '';
    var pattern = pattern.split('');
    for(var i = 0; i < pattern.length; i++){
        capchaText += getRandomNumberOrChar(pattern[i]);
    }
    return capchaText;
}

var getRandomNumberOrChar = (type) => {

    type = type.trim();
    type = type.toLowerCase();
    var minRange, maxRange;
    switch(type) {
        case 'n':
            return Math.round(Math.random() * 9);

        case 'u':
            minRange = 65;
            maxRange = 90;
            break;

        case 'l':
            minRange = 97;
            maxRange = 122;
            break;
    }
    var randomAsciiNumber = Math.round(Math.random() * (maxRange - minRange) + minRange); 
    return String.fromCharCode(randomAsciiNumber);
}
console.log(getRandomNumberOrChar('n'));
console.log(getRandomNumberOrChar('   U'));
console.log(getRandomNumberOrChar('l'));





/*

//Pattern - ULNLU
var getRandomNumber = () => {
    return Math.round(Math.random() * 9);
}
var getRandomUpperCaseChar = () => {
    var minRange = 65;
    var maxRange = 90;
    var randomNumber = Math.round(Math.random() * (maxRange - minRange) + minRange); 
    return String.fromCharCode(randomNumber);
}

var getRandomLowerCaseChar = () => {
    var minRange = 97;
    var maxRange = 122;
    var randomNumber = Math.round(Math.random() * (maxRange - minRange) + minRange); 
    return String.fromCharCode(randomNumber);
}

// console.log(getRandomUpperCaseChar());
// console.log(getRandomLowerCaseChar());

*/