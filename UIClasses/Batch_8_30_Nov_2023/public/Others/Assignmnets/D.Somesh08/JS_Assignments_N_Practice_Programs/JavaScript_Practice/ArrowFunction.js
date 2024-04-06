
var arrow = (...restParam) => restParam[0]+restParam[1]; 

var sum = arrow(2,Math.abs(-4));

console.log(`This is arrow function..! ${sum}`); 
  