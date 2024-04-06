function time(){
    var date = new Date();
    var div = document.getElementById("timer");
    div.innerHTML =` ${date.getHours()}  ${date.getMinutes()}  ${date.getSeconds()}`;
}
setInterval(time, 1000);