// generate captcha 

function generate () {
    var captcha = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789';
    for (var i = 0 ; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById('captcha').innerText = captcha;
}

// validate captcha 

function validate() {
    var userInput = document.getElementById('userInput').Value;
    var captcha = document.getElementById('captcha').innerText;
    var message = document.getElementById('message');
    if (userInput === captcha){
        message.innerText ='CAPTCHA matched! valid.';

    } else {
        message.innerText ='CAPTCHA not matched! Invalid.';
    }
}