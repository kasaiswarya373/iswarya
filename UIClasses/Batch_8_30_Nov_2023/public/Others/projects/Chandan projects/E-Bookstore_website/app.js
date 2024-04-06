var example = {

    generateCaptcha: function() {
        var captchaText = '';
        var possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoprstuvwxyz0123456789';
        for (var i = 0; i < 5; i++) {
            captchaText += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
        }
        return captchaText;
    },

    drawCaptcha: function(captchaText) {
        var canvas = document.getElementById('captchaCanvas').Value;
        var ctx = captchaCanvas.getContext('2d');
        ctx.clearRect(0,0,captchaCanvas.width,captchaCanvas.height);
        ctx.font = '30px Arial';
        ctx.fillText(captchaText, 10,30);
    },

    refreshCaptcha: function() {
      example.generateNewCaptcha();
    },

    validateForm:function() {
        var inputCaptcha = document.getElementById('captchaCanvas').value;
        var generatedCaptcha = sessionStorage.getItem('captcha');
        if (inputCaptcha.toUpperCase()=== generatedCaptcha.toUpperCase()) {
            alert('capctha matched! form submitted.');
            return true;
        } else {
            alert('incorrect captcha! please try again.');
            example.generateNewCaptcha();
            return false;
        }
    },

    generateNewCaptcha: function() {
        var captchaText = example.generateCaptcha();
        sessionStorage.setItem('captcha', captchaText);
        example.drawCaptcha(captchaText);

    }
};
document.getElementById('refreshCaptcha').addEventListener('click', example.refreshCaptcha);

/*window.onload = example.generateNewCaptcha; */
