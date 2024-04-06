var count = 0;
var generateBlock = () => {
    count++;
    var divtag = document.createElement('div');
    divtag.innerText = 'block _'+count;
    document.querySelector('.maincontainer').append(divtag);
}
var showdate = (date) => {
document.querySelector('.datecontainer span').innerText = date;
}
document.addEventListener('DOMContentLoaded',() => {
   /* setInterval(()=>{
         generateBlock ();

    },1000)
    showdate(new Date);*/
})
var blockWebWorker = new Worker('workers/blockworker.js');
    blockWebWorker.onmessage = ((event) => {
    generateBlock(event.data);
})
var datewebworker = new Worker('workers/dateworkers.js');
datewebworker.onmessage = ((event) => {
    showdate(event.data);
})