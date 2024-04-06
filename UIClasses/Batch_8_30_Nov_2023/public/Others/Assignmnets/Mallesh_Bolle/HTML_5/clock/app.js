var h , m ,s ;
h = document.querySelector(".hourhand");
m = document.querySelector(".minhand");
s = document.querySelector(".sechand");
var date = new Date()


var clock = () => {
    var d = new Date()
    document.querySelector(".sechand").style.transform= `rotate(${d.getSeconds()*6}deg)`
    document.querySelector(".minhand").style.transform= `rotate(${d.getMinutes()*6}deg)`
    document.querySelector(".hourhand").style.transform= `rotate(${d.getHours()*30 + d.getMinutes()*0.5}deg)`
}
setInterval(clock , 1000)


var diplaynumber = () => {
    var time = document.querySelector("span");
    var hou = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    time.style.display = "block"
    time.innerHTML = `${hou} :  ${min} : ${sec}`
}
var hidenumbers = () => {
    var time = document.querySelector("span");
    time.style.display = "none"
}