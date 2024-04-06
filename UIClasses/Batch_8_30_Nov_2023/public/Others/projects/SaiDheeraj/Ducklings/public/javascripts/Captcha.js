// Cpatcha Generation ::
var generateCaptcha = () => {
    var canvas = document.createElement("canvas");
    canvas.width = 180;
    canvas.height = 90;
    var ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < 50; i++) {
        var x = Math.random() * canvas.width;
        var y = Math.random() * canvas.height;
        var width = Math.random() * 40;
        var height = Math.random() * 40;
        ctx.fillStyle = randomColor();
        ctx.fillRect(x, y, width, height);
    }

    var captchaValue = generateRandomString(6);
    ctx.font = "italic bold 40px Arial";
    ctx.fillStyle = "black";
    for (var i = 0; i < captchaValue.length; i++) {
        var x = i * 30 + Math.random() * 20;
        var y = 50 + Math.random() * 20;
        var rotation = Math.random() * 0.4 - 0.2;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotation);
        ctx.fillText(captchaValue[i], 0, 0);
        ctx.restore();
    }
    
    var captchaContainer = document.getElementById("captchaContainer");
    captchaContainer.innerHTML = '';
    captchaContainer.appendChild(canvas);
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
function randomColor() {
    return '#' + Math.random().toString(16).slice(2, 8);
}
generateCaptcha();