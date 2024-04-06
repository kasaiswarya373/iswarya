console.log('from web worker!!!!!');

var customDate = () => {
    var date = new Date();

    var currentDateTime = `${date.getDate()} / ${date.getMonth()+1} / ${date.getFullYear()} : 
   ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;

    postMessage(currentDateTime);
}
setInterval(() => {
    customDate();
}, 100);