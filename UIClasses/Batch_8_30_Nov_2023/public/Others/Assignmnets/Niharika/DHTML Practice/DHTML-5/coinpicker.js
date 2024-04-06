for (var i = 1; i <= 90; i++) {
    var div = document.createElement("div");
    div.setAttribute("class", "number");
    div.setAttribute("id",i);
    div.innerText = i;
    document.querySelector(".container").append(div);
}
var generatedNumbers = [];
var getrandomvalues = () => {
    var maxrange = 90;
    do {
        randomnumber = Math.round(Math.random() * maxrange);
    } while (generatedNumbers.includes(randomnumber));
    
    generatedNumbers.push(randomnumber);
     
    document.querySelector(".displaynumber").innerText = randomnumber;
    var spanToHighlight = document.getElementById(randomnumber);
    spanToHighlight.style.backgroundColor = "gold";
    spanToHighlight.style.textDecoration = "line-through";

    if (generatedNumbers.length == 90) {
        alert("Game is Finished!");
    }
}