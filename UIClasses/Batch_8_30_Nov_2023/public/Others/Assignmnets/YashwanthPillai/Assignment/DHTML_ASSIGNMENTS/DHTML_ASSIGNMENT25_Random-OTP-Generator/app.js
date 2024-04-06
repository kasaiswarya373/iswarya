var otp = () => {
var sizeOfOtp = parseInt(document.querySelector("#SIZE").value)

var OTPvalue = ""

for(let i = 1; i<=sizeOfOtp; i++ ){
    OTPvalue = OTPvalue + Math.floor(Math.random()*10)
}

document.querySelector(".otp").innerHTML = OTPvalue;
}
 var refresh = () =>{
    otp()
    // OTPvalue = OTPvalue + Math.round(Math.random()*10 - 1)
}
otp()
refresh()
