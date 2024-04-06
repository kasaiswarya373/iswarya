var counter = 0;
var loadBlocksToContainer = () => {
    counter++;
    var divTag = document.createElement("div");
    divTag.innerText = 'Block_ ' + counter;
    document.querySelector(".blockContainer").append(divTag);
}

document.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
        loadBlocksToContainer();
    }, 1000)
    showData(new Date());
    
});

var showData = (date) => {
    document.querySelector(".dateContainer span").innerText = date;
}


var myworker = new Worker("workers/dateworker.js");

myworker.onmessage = ((event) => {
    console.log("data received from web worker");
    console.log(event.data);
    showData(event.data)
    if (counter == 5) {
        myworker.terminate();
    }
})