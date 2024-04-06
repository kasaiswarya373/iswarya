var generatRandomNumbers = () => {
var maxNum = parseInt(document.querySelector("#Maxnum").value)
var minNum = parseInt(document.querySelector("#Minnum").value)
var randomValue = Math.round(Math.random()*(maxNum - minNum)) + minNum;


document.querySelector(".rn").innerHTML = randomValue;
}

generatRandomNumbers()