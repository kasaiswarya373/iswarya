console.log("Hello am from date worker");

var getLatestDateAndTime = () => {
    var date = new Date();
    var customDateFormat = `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()} ${date.getMinutes()} : ${date.getSeconds()}`;
    

     postMessage(customDateFormat)
}

setInterval(() => {
    getLatestDateAndTime();
}, 1000)
