
var getRandomPattern = () => {
    var pattern = '';
    var possiblePatterns = ['L' , 'U', 'N'];
    
    for (var i = 1; i <= 5; i++) {
        var randomIndex = Math.floor(Math.random() * 3);
        pattern += possiblePatterns[randomIndex];
    }
    console.log("Pattern using is " + pattern);
    return pattern;
}

var getCaptchaValue = (customCaptchaPattern) => {
    var pattern;
    
    /*if (customCaptchaPattern) {
        pattern = customCaptchaPattern
    } else {
        pattern = getRandomPattern();
    }   */    
    pattern = customCaptchaPattern ? customCaptchaPattern : getRandomPattern();
    
    var captchaText = '';
    var pattern = pattern.split('');
    for (var i = 0 ; i < pattern.length; i++) {
        captchaText += getRandomNumberOrChar(pattern[i]);
    }
    return captchaText;
}


/**
 * 
 * @param {string} type | U/L
 */
var getRandomNumberOrChar = (type) => {
    type = type.trim();
    type = type.toLowerCase();
    var minRange, maxRange;
    switch(type) {
        case 'n':
            return Math.round(Math.random() * 9);
            break;
        case 'u':
            minRange = 65;
            maxRange = 90;
            break;
        case 'l':
            minRange = 97;
            maxRange = 122;
    }
    var randomAsciiNumber = Math.round(Math.random() * (maxRange - minRange) + minRange);
    return String.fromCharCode(randomAsciiNumber);
}

console.log(getRandomNumberOrChar('n'))
console.log(getRandomNumberOrChar('U   '));
console.log(getRandomNumberOrChar('l'));