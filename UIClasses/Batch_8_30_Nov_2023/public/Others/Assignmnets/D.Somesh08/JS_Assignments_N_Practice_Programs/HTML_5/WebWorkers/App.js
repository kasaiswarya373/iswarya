var counter = 0;
var buildBlocks = () => {

    counter++;
    var newBlock = document.createElement('div');
    newBlock.innerText = `Block ${counter}`;

    document.querySelector('.container').append(newBlock);

    // showDate(new Date());
}

var showDate = (date) => {
    var spanTg = document.querySelector('.dateBlock span');
    spanTg.innerHTML = `<b> ${date} </b>`;

}

setInterval(() => {
    buildBlocks();
}, 2000);

var myworker = new Worker("./WebWorker.js");
myworker.onmessage = ((event) => {
    console.log(event.data);
    showDate(event.data)
    if (counter == 5) {
        myworker.terminate();
    }
});