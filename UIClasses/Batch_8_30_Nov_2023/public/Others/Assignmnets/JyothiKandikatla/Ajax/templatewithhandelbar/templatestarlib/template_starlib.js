var fullrating,halfstarcount;
var emptystar = 0;
var addstar = (rating) =>{
   fullrating = parseInt(rating);
    for(var i = 0;i < fullrating; i++){
    var fulldiv = document.createElement('div');
    fulldiv.classList.add('fullstar');
    document.querySelector('.starcontainer').append(fulldiv);
    }
    halfstarcount = (rating % 1 == 0) ? 0 : 1;
        if(halfstarcount){
        var halfdiv = document.createElement('div');
        halfdiv.classList.add('halfstar');
        document.querySelector('.starcontainer').append(halfdiv);
    } 
     emptystar = 5 -(fullrating + halfstarcount);
        for(var i = 0; i < emptystar;i++){
        var divempty = document.createElement('div');
        divempty.classList.add('emptystar');
        document.querySelector('.starcontainer').append(divempty);
    }
}
document.addEventListener('DOMContentLoaded',()=>{
    addstar(3.5);

})
