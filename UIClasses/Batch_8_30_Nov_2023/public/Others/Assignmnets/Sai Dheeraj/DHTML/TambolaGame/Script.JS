var block = [];

var chart = () => {
    var button  = "";
    for (var a = 1; a <= 90; a++){
        var div = document.createElement('div');
        div.setAttribute('class' , 'number');
        div.setAttribute('id', a);
        div.innerText = a;   
        document.querySelector(".container").append(div);
    }
}
var start = () => {
    var number = Math.floor(Math.random() * 90 + 1);
    for (var a = 0; a < block.length; a++){
        if (number == block[a]){
            number = Math.floor(Math.random() * 90 + 1);
            a = 0;
        }
        console.log(number);
    }

    document.getElementById('number').innerHTML = number;
    document.getElementById(number).style.backgroundColor = 'blue';

    if (block.length == 90){
        alert ('Game over!!!!');
    }
    block.push(number);
}
chart();