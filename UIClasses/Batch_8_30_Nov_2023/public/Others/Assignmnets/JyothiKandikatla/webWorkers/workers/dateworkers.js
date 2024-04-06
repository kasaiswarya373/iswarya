var datewebworker = () =>{
    var getdate = new Date();
    var currentdateformat = `${getdate.getDate()} / ${getdate.getMonth() + 1} / ${getdate.getFullYear()} ${getdate.getMinutes()} : ${getdate.getSeconds()}`
    postMessage(currentdateformat);
}
setInterval(() => {
    datewebworker();
},1000)