// pattern -> ULNLU

var getRandomNumber = () => {
    return Math.round(Math.random() * 9);
}

var getRandomUppercasechar = () => {
    var minRange = 65;
    var maxRange = 90;
    var randomAsciiNumber = Math.round(Math.random() * (maxRange - minRange) + minRange);
    String.fromCharCode(randomAsciiNumber);
    return String.fromCharCode(randomAsciiNumber);


}
var getRandomLowercasechar = () => {
    var minRange = 97;
    var maxRange = 122;
    var randomAsciiNumber = Math.round(Math.random() * (maxRange - minRange) + minRange);
    String.fromCharCode(randomAsciiNumber);
    return String.fromCharCode(randomAsciiNumber);
}


console.log(getRandomNumber());
console.log(getRandomUppercasechar());
console.log(getRandomLowercasechar());