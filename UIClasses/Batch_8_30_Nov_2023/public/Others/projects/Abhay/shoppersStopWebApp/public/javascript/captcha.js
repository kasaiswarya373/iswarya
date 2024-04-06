var c = document.querySelector("#myCanvas");
var ctx = c.getContext("2d");
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function getCaptcha() {
    captcha = '';
    var charLength = characters.length;
    for (var i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * charLength));
    }
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.fillStyle = "#fdffb6";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = "black";
    ctx.font = "30px Arial";
    ctx.moveTo(100, 0);
    ctx.lineTo(200, 100)

    ctx.moveTo(50, 0);
    ctx.lineTo(100, 100)

    ctx.moveTo(0, 0);
    ctx.lineTo(50, 100)

    ctx.moveTo(180, 0);
    ctx.lineTo(200, 50)
    ctx.stroke();

    var x = 10;
    var y = 50;
    var dir = 1;
    for (var i = 0; i < captcha.length; i++) {
        ctx.fillText(captcha[i], x, y);
        if (dir === 1) {
            x += 30;
            y += 20;
        } else {
            x += 30;
            y -= 20;
        }
        dir *= -1;
    }
}
getCaptcha();
