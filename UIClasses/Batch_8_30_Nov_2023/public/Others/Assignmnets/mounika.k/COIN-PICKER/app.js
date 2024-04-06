var arrRandomNum = [];
var n = 0;
 var divcreate = ()=>{
    for(var i = 1; i <= 10; i++){
        var maindiv = document.createElement('div');
        for(var j = n; j < n+10; j++){
            var innerdiv = document.createElement('div');
        innerdiv.setAttribute('class', 'call')
        innerdiv.setAttribute('id',`m${j+1}`)
        innerdiv.innerHTML = j+1;
        maindiv.appendChild(innerdiv);
    }
    n += 10;
    document.getElementById('container').appendChild(maindiv);
    }
}
 var generate = ()=>{
    var minlength = 0;
    var maxlength = 99;
    var random = Math.round(Math.random()*(maxlength-minlength)+1);
    if(arrRandomNum.indexOf(random) == -1){
        randomNum(random);
    }else{
        if(arrRandomNum.length != 100){
        generate();
        }else if(arrRandomNum.length == 100){
            var btnrandom = document.getElementById('btn');
            btnrandom.setAttribute('class',"close")
            // console.log('hi invoked');
            alert('Click on restart to play again')
            var restartbtn = document.createElement('button');
            restartbtn.innerHTML = "Restart";
            restartbtn.addEventListener('click', restart);
            restartbtn.setAttribute('class','restbtn');
            restartbtn.setAttribute('id','rebtn');
            document.getElementById('btncont').appendChild(restartbtn);
        }
    }
}
    var  randomNum = (random)=>{
    document.getElementById('random').innerHTML = random;
    var numIndex = arrRandomNum.indexOf(random);    
        if(numIndex == -1){
            arrRandomNum.push(random)
            marknum();
        }
    }
var marknum = ()=>{
 for(var num of arrRandomNum){
    var mark = document.getElementById(`m${num}`);
    mark.setAttribute('class','colred')
 }    
}
var restart = ()=>{
    for(var num of arrRandomNum){
        var reset = document.getElementById(`m${num}`);
        reset.setAttribute('class','reset')
     }   
     arrRandomNum =[];
     document.getElementById('btn').style.display ='block'
    document.getElementById('rebtn').style.display = 'none'
    //  console.log(arrRandomNum);
}