var generateNewBlocks = () =>{
    postMessage('displayBlocks');
}
setInterval(() => {
    generateNewBlocks();
},1000)