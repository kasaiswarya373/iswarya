for (var i = 1 ; i<=90; i++) {
    var span = document.createElement("span");
    span.setAttribute("class","number");
    span.setAttribute("id",i);
    span.innerText = i;
    document.querySelector(".container").append(span);
  
}
var generatedNumbers = [];
var getrandomvalues = () => {
    var maxRange = 90;
    do {
        randomnumber = Math.round(Math.random() * maxRange);

    } while (generatedNumbers.includes(randomnumber));
}

generatedNumbers.push(randomnumber);

document.querySelector(".displaynumber").innerText = randomnumber;
var spantohighlight = document.getElementById(randomnumber);
spantohighlight.style.backgroundcolor = "yellow";
spantohighlight.style.textDecoration = "line-through";

if (generatedNumbers.length ==90){
    alert("game is finished");
}
