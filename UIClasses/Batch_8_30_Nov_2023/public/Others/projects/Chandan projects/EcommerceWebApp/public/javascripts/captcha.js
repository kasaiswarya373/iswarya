var canvas = document.querySelector(".canvasblock")
var ctx = canvas.getContext("2d");
var captcha = (index) => {
    var captcha = '';
    var text = 'ABCDEFGHIJKLMNOPQRSTUVWabcdefghijklmnopqrstuv123456789';
    for(var i = 0;i < index;i++){
        captcha +=text.charAt(Math.floor(Math.random()*text.length));
    }
    return captcha;
}
var ctext;
var getcpatcha = () =>{
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    ctext = captcha(5);
    ctx.moveTo(0, 0);
    ctx.lineTo(400, 200);
    ctx.stroke();
    ctx.moveTo(0, 150);
    ctx.lineTo(400, -50);
    ctx.stroke();
    ctx.font = "60px Arial";
    ctx.fillText(ctext[0], 10, 70);
    ctx.fillText(ctext[1], 70, 130);
    ctx.fillText(ctext[2], 140, 70);
    ctx.fillText(ctext[3], 200, 130);
    ctx.fillText(ctext[4], 250, 50);
} 


getcpatcha();