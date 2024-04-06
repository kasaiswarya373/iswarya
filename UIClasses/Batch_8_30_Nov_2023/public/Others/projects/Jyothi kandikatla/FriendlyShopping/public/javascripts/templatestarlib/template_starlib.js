var fullrating,halfstarcount;
var emptystar = 0;
var addstar = (selector,rating) =>{
    var addstarcontainer = document.createElement('div');
    addstarcontainer.classList.add('starcontainer');
   fullstarCount = parseInt(rating);
    for(var i = 0;i < fullstarCount ; i++){
    var fulldiv = document.createElement('div');
    fulldiv.classList.add('fullstar');
    addstarcontainer.append(fulldiv);
    }
    halfstarcount = (rating % 1 == 0) ? 0 : 1;
        if(halfstarcount){
        var halfdiv = document.createElement('div');
        halfdiv.classList.add('halfstar');
        addstarcontainer.append(halfdiv);
    } 
     emptystar = 5 -(fullstarCount  + halfstarcount);
        for(var i = 0; i < emptystar;i++){
        var divempty = document.createElement('div');
        divempty.classList.add('emptystar');
        addstarcontainer.append(divempty);
    }
    document.querySelector(selector).append(addstarcontainer);
}
/*document.addEventListener('DOMContentLoaded',()=>{
    addstar('.rating',3.5);

})*/
