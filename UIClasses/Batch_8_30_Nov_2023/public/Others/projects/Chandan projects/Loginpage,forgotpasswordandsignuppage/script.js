document.getElementById("loginform").addEventListener("submit",function(event){
    event.preventDefault(); // prevent form submission



// get input values..

var email = document.getElementById("email").Value;
var password = document.getElementById("password").value;

// perform logic 
console.log("Login successful!");
});

// forgot password page 

document.getElementById("forgotpasswordform").addEventListener("submit", function(event){
   event.preventDefault();// prevent form submisssion

   var email= document.getElementById("email").value;

   // perform password reset 
   console.log ("password reset request sent to:" + email);
});

// sign up page 

document.getElementById("signupform").addEventListener("submit", function(event){
   event.preventDefault(); // prevent form submission

   var fullName = document.getElementById("fullName").value;
   var email = document.getElementById("email").value;
   var password = document.getElementById("password").value;
});

// perform sign up (you can add your logic here)

console.log ("sign up successful! welcome," + fullName + "!");
