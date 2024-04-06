document.addEventListener("DOMContentLoaded", function(){
    // Generate a random CAPTCHA code
    var captchaCode = generateCaptcha();

    // Display the generated CAPTCHA code
    var captchaImage = document.querySelector("img");
    captchaImage.src = "captcha_image.png"; // Replace with the actual path to your CAPTCHA image file
    captchaImage.alt = "CAPTCHA Image";

    // Refresh CAPTCHA when the refresh button is clicked
    document.getElementById("refreshCaptcha").addEventListener("click", function(){
        captchaCode = generateCaptcha();
        captchaImage.src = "captcha_image.png"; // Replace with the actual path to your CAPTCHA image file
        captchaImage.alt = "CAPTCHA Image";
    });

    // Handle form submission
    document.getElementById("loginForm").addEventListener("submit", function(event){
        event.preventDefault();
        
        // Fetch username, password, and CAPTCHA input
        var username = document.getElementById("Enter username").value;
        var password = document.getElementById("Enter password").value;
        var captchaInput = document.getElementById("Enter captcha").value;

        // Validate CAPTCHA
        if (captchaInput === captchaCode) {
            // Proceed with login process
            if (username && password) {
                // Simulate login process with a delay
                setTimeout(function(){
                    // Clear form fields
                    document.getElementById("username").value = "";
                    document.getElementById("password").value = "";
                    document.getElementById("captcha").value = "";
                    // Redirect to dashboard or any other page after successful login
                    window.location.href = "dashboard.html";
                }, 2000); // 2 seconds delay
            } else {
                alert("Please enter both username and password.");
            }
        } else {
            alert("Incorrect CAPTCHA. Please try again.");
            captchaCode = generateCaptcha();
            captchaImage.src = "captcha_image.png"; // Replace with the actual path to your CAPTCHA image file
            captchaImage.alt = "CAPTCHA Image";
        }
    });
});

// Function to generate a random CAPTCHA code
function generateCaptcha() {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var length = 6;
    var captchaCode = "";
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * chars.length);
        captchaCode += chars[randomIndex];
    }
    return captchaCode;
}