var coinsDisplay = () =>{
    var divtag = document.createElement('div');
    divtag.setAttribute('class','box');
    var notag;
    for(var i = 1; i <= 100; i++){
        notag = document.createElement('div');
        notag.setAttribute('id',`m${i}`);
        notag.setAttribute('class','coin');
        notag.innerText = i;
        divtag.append(notag);
    }
    console.log(divtag);
    document.querySelector('.mainDiv').append(divtag);
}
coinsDisplay();
var rno = [];
var randomnumber = () =>{
    var minRange = 1;
    var maxRange = 100;
   var n = Math.round(Math.random() * (maxRange - minRange) + minRange);
   document.querySelector('.coindisplay').innerText = n;
   console.log(rno);
    var coincolor = document.getElementById(`m${n}`);
    coincolor.style['background-color'] = 'red';
    coincolor.style['border-radious'] ='10px';
    if(rno.includes(n) == false){
        rno.push(n);

    }else {
randomnumber();
    }
    
}