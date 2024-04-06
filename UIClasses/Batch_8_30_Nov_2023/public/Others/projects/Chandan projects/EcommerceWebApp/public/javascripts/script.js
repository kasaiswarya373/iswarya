
var loadSelectedPage = (type) => {
  var templateUrl = '';
  switch (type) {
    case 'signup':
      templateUrl = 'Templates/newSignup.htm';
      break;
    case 'home':
      $("#mainContentBlockArea").html('');
      break;
    case 'forgotPwd':
      templateUrl = 'Templates/forgotPwd.htm';
      break;
  }
  axios.get(templateUrl).then((response) => {
    if (type == 'signup') {
      $("#mainContentBlockArea").html(response.data);
    } else if (type == 'forgotPwd') {
      // hide existing popup
      $('#pageLoginModal').modal('hide');
      $("#mainContentBlockArea").html(response.data);
    }

  })
}
// check if user credentials are stored in local storage 
document.addEventListener("DOMContentLoaded", function() {
   
  const storedUserId = localStorage.getItem('userId');
  const storedpassword = localStorage.getItem('password');

if (storedUserId && storedpassword) {
  document.getElementById('userId').value = storedUserId;
  document.getElementById('password').value = storedpassword;
  document.getElementById('rememberMe').checked = true;

}
// save user credentials to local storage when "remember me"
document.getElementById('loginContent').addEventListener('click', function() {
  if (document.getElementById('rememberMe').checked) {
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;
    localStorage.setItem('userId', userId);
    localStorage.setItem('password', password);
  } else {
    localStorage.removeItem('userId');
    localStorage.removeItem('password');
  }
});
});


/*
  // Array of captcha values
  const captchaValues = [
    "ABCD",
    "EFGH",
    "IJKL"
    // Add more captcha values as needed
  ];

  // Function to display a random captcha image and value
  function displayRandomCaptcha() {
    const randomIndex = Math.floor(Math.random() * captchaValues.length);
    const captchaImage = document.getElementById('captchaImage');
    captchaImage.src = "images/captcha_images/captcha_src1.jpg";
    
  }
  document.addEventListener("DOMContentLoaded", function() {
  
    // Refresh captcha image and value when the "Refresh Captcha" button is clicked
  document.getElementById('refreshCaptcha').addEventListener('click', displayRandomCaptcha);

  })

  // Display a random captcha image and value when the page loads
  window.addEventListener('load', displayRandomCaptcha);

  
*/

var validateCaptcha = () => {
    errCaptcha = document.getElementById("errCaptcha");
    inputText = document.querySelector('#reCaptcha').value;
    let validateCaptcha = 0;
    for(var i = 0; i < 5;i++){
        if(inputText.charAt(i) != ctext[i]){
            validateCaptcha++;
        }else{
            console.log(inputText[i]);
        }
    }
    if (inputText == "") {
        errCaptcha.innerHTML = "Re-Captcha must be filled";
        errCaptcha.style.color = 'red';
      }else if (validateCaptcha > 0 || inputText.length > 5) {
        errCaptcha.innerHTML = "Wrong captcha";
        errCaptcha.style.color = 'ornge';
      }else {
       $('#recaptcha').val() = '';
      }
}
    document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('#refresh').addEventListener('click',()=>{
    getcpatcha();
    document.getElementById("errCaptcha").innerText= '';
    document.querySelector('#reCaptcha').value = '';
})
})