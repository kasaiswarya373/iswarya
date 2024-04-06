var canvas = document.querySelector("#canvasBlock");
var ctx = canvas.getContext("2d");

var captcha = (number) => {
    var captchaValue = '';
    var text = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for(var i= 0 ; i < number; i++){
        captchaValue += text.charAt(Math.floor(Math.random()*text.length));
    }
    return captchaValue;
}

var getCaptchaValue = () => {

    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    vText = captcha(5);
    console.log(vText);

    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;

    ctx.moveTo(-100, 25);
    ctx.lineTo(300, 25);
    ctx.stroke();
    ctx.moveTo(-100, 50);
    ctx.lineTo(300, 50);
    ctx.stroke();

    ctx.moveTo(-100, 75);
    ctx.lineTo(300, 75);
    ctx.stroke();

    ctx.moveTo(-100, 100);
    ctx.lineTo(300, 100);
    ctx.stroke();

    ctx.moveTo(-100, 125);
    ctx.lineTo(300, 125);
    ctx.stroke();

    // ----------- for drawing lines --------

    ctx.moveTo(0,0);
    ctx.lineTo(400,200);
    ctx.stroke();

    ctx.moveTo(0,150);
    ctx.lineTo(400,-50);
    ctx.stroke();

    // ------------ for text -------------

    ctx.font = "60px Arial";
    ctx.fillText = (vText[0],10,70);
    ctx.fillText = (vText[1],70,130);
    ctx.fillText = (vText[2],140,70);
    ctx.fillText = (vText[3],200,130);
    ctx.fillText = (vText[4],250,50);

    var imageDataURL = canvas.toDataURL();
    var captchaImage = new Image();
    captchaImage.src = imageDataURL;
    var captchaContainer = document.getElementById("canvasBlock");
    captchaContainer.innerHTML = ''; 
    captchaContainer.appendChild(captchaImage);

}

getCaptchaValue();
