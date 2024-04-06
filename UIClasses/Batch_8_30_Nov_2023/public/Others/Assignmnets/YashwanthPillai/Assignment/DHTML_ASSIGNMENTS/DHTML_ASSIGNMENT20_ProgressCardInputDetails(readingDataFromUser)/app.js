var stdProgCard =()=>{
var stdinfo = {
sname :document.querySelector("#Sname").value,
srollno:document.querySelector("#Sid").value,
sage  :document.querySelector("#Sage").value,
sgender:document.querySelector("input[name=sgender]").value,
sclass:document.querySelector("#Sclass").value,
ssection:document.querySelector("#ssec").value,
smarks:[]

}
for(var i = 1; i<=5; i++){
    var temp = "#m" + i;
    var value = parseInt(document.querySelector(temp).value)
    stdinfo.smarks.push(value)
}
console.log(stdinfo);
}
